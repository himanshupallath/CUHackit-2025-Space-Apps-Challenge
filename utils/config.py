# utils/config.py
import json
from pathlib import Path

CONFIG_PATH = Path("config.json")
DEFAULTS = {
    "title": "Terra at 25 — Earth's Changing Breath",
    "tagline": "Terra has watched Earth breathe for 25 years. This is her medical chart.",
    "film_video": "assets/video/doctor-cut-1080p.mp4",
    "patient_monitor_img": "assets/stills/patient_monitor.png",
}

def load_config() -> dict:
    if CONFIG_PATH.exists():
        try:
            return {**DEFAULTS, **json.loads(CONFIG_PATH.read_text())}
        except Exception:
            # Fall back to defaults if config is malformed
            return DEFAULTS.copy()
    return DEFAULTS.copy()
