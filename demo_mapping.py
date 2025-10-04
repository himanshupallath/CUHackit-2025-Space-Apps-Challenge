import gradio as gr
import requests
import folium
from folium import CircleMarker

# =========================
# NASA EONET API Config
# =========================
NASA_API_KEY = "depy7lrYmWyjvLFvZVZdPPLykM2ra2EGMSmvqFca"  # Replace with your NASA API key
CATEGORIES_API_URL = "https://eonet.gsfc.nasa.gov/api/v3/categories"

# =========================
# Fetch events for a given category directly
# =========================
def fetch_events_by_category(category_id):
    """
    Fetch NASA EONET events directly from the Categories API.
    """
    url = f"{CATEGORIES_API_URL}/{category_id}"
    params = {"api_key": NASA_API_KEY}
    response = requests.get(url, params=params)
    response.raise_for_status()
    data = response.json()

    events = []
    for event in data.get("events", []):
        title = event.get("title", "Unknown Event")
        category = event.get("categories", [{}])[0].get("title", "Other")
        for geom in event.get("geometry", []):
            coords = geom.get("coordinates", [0,0])
            date = geom.get("date", "Unknown")
            lat, lon = coords[1], coords[0] if len(coords) == 2 else (0,0)
            
            events.append({
                "title": title,
                "category": category,
                "date": date,
                "lat": lat,
                "lon": lon
            })
    return events

# =========================
# Render Folium Map (full width)
# =========================
def render_category_map(category_name):
    # Map category names to IDs
    category_mapping = {
        "Wildfires": 8,
        "Severe Storms": 10,
        "Volcanoes": 12,
        "Floods": 14,
        "Other": 0
    }
    category_id = category_mapping.get(category_name, 8)  # default Wildfires

    events = fetch_events_by_category(category_id)

    # Create Folium map (satellite view, full width)
    fmap = folium.Map(location=[20,0], zoom_start=2, tiles="Esri.WorldImagery", width="100%", height="600px")

    # Assign color for this category
    category_color = "red"

    # Plot each event individually
    for e in events:
        CircleMarker(
            location=[e["lat"], e["lon"]],
            radius=6,
            color=category_color,
            fill=True,
            fill_color=category_color,
            fill_opacity=0.7,
            popup=f"<b>{e['title']}</b><br>Category: {e['category']}<br>Date: {e['date']}"
        ).add_to(fmap)

    # Wrap map in full-width div for Gradio HTML
    html_map = f"""
    <div style="width: 100%; height: 600px;">
        {fmap._repr_html_()}
    </div>
    """
    return html_map

# =========================
# Gradio Blocks Interface
# =========================
category_options = ["Wildfires", "Severe Storms", "Volcanoes", "Floods", "Other"]

with gr.Blocks() as demo:
    # Map output on top
    map_output = gr.HTML(label="NASA Events Map")

    # Dropdown input below map
    category_dropdown = gr.Dropdown(
        label="Select Event Category",
        choices=category_options,
        value="Wildfires"
    )

    # Update map when dropdown changes
    category_dropdown.change(fn=render_category_map, inputs=category_dropdown, outputs=map_output)

demo.launch()
