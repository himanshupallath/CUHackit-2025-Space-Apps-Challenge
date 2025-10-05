# pages/dashboard.py
import gradio as gr
import requests
import folium
from folium import CircleMarker

# =========================
# NASA EONET API Config
# =========================
CATEGORIES_API_URL = "https://eonet.gsfc.nasa.gov/api/v3/categories"

def build_dashboard_tab(cfg: dict):
    """
    Replaces the Doctor's Dashboard contents with a NASA EONET map and category dropdown.
    Reads NASA API key from config if present; otherwise uses the inline fallback.
    """
    NASA_API_KEY = cfg.get(
        "nasa_api_key",
        "depy7lrYmWyjvLFvZVZdPPLykM2ra2EGMSmvqFca"  # <-- replace in config.json for production
    )

    # ----- helpers kept local to the dashboard -----
    def fetch_events_by_category(category_id: int):
        """
        Fetch NASA EONET events directly from the Categories API.
        """
        url = f"{CATEGORIES_API_URL}/{category_id}"
        params = {"api_key": NASA_API_KEY}
        response = requests.get(url, params=params, timeout=20)
        response.raise_for_status()
        data = response.json()

        events = []
        for event in data.get("events", []):
            title = event.get("title", "Unknown Event")
            category = event.get("categories", [{}])[0].get("title", "Other")
            for geom in event.get("geometry", []):
                coords = geom.get("coordinates", [0, 0])
                date = geom.get("date", "Unknown")
                # handle [lon, lat]
                if isinstance(coords, (list, tuple)) and len(coords) >= 2:
                    lon, lat = coords[0], coords[1]
                else:
                    lon, lat = 0, 0
                events.append(
                    {
                        "title": title,
                        "category": category,
                        "date": date,
                        "lat": lat,
                        "lon": lon,
                    }
                )
        return events

    category_mapping = {
        "Wildfires": 8,
        "Severe Storms": 10,
        "Volcanoes": 12,
        "Floods": 14,
        "Other": 0,
    }
    category_options = list(category_mapping.keys())

    def render_category_map(category_name: str):
        category_id = category_mapping.get(category_name, 8)  # default Wildfires
        events = fetch_events_by_category(category_id)

        # Folium map (satellite view, full width)
        fmap = folium.Map(
            location=[20, 0],
            zoom_start=2,
            tiles="Esri.WorldImagery",
            width="100%",
            height="600px",
        )

        # Simple color choice per category (customize if you want)
        color = {
            "Wildfires": "red",
            "Severe Storms": "orange",
            "Volcanoes": "purple",
            "Floods": "blue",
            "Other": "green",
        }.get(category_name, "red")

        for e in events:
            CircleMarker(
                location=[e["lat"], e["lon"]],
                radius=6,
                color=color,
                fill=True,
                fill_color=color,
                fill_opacity=0.7,
                popup=f"<b>{e['title']}</b><br>Category: {e['category']}<br>Date: {e['date']}",
            ).add_to(fmap)

        # Full-width HTML wrapper for Gradio
        return f"""
        <div style="width: 100%; height: 600px;">
            {fmap._repr_html_()}
        </div>
        """

    # ----- UI (replaces previous dashboard layout entirely) -----
    gr.Markdown("## The Doctor’s Dashboard — NASA EONET Live Events")

    with gr.Row():
        map_output = gr.HTML(label="NASA Events Map")

    with gr.Row():
        category_dropdown = gr.Dropdown(
            label="Select Event Category",
            choices=category_options,
            value="Wildfires",
            scale=4,
        )

    # initial render
    category_dropdown.change(
        fn=render_category_map, inputs=category_dropdown, outputs=map_output
    )
    # render once at load
    map_output.value = render_category_map("Wildfires")
