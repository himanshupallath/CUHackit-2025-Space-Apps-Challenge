# data/disasters.py
DISASTERS = {
    "Wildfire": [
        "Active Fire Hotspots (MODIS)",
        "Smoke Plumes (MISR)",
        "CO Spike (MOPITT)",
        "Burn Scars / Vegetation Loss (NDVI)"
    ],
    "Drought": [
        "Vegetation Stress (NDVI)",
        "Surface Temperature Anomaly (LST)",
        "Evapotranspiration Proxy (LST + NDVI)"
    ],
    "Heatwave": [
        "Urban LST Daytime",
        "Urban LST Nighttime",
        "Parks vs Pavement (LST vs NDVI)"
    ],
    "Flood": [
        "Water Extent Change (NDWI/NDVI proxy)",
        "Soil Moisture Proxy (if available)"
    ],
    "Air Quality": [
        "Aerosol Optical Depth (MISR)",
        "CO Column (MOPITT)",
        "Smoke Transport (MISR + Wind proxy)"
    ]
}
