# utils/assets.py
from pathlib import Path
import io
import random
import matplotlib.pyplot as plt

def film_exists(film_path: str) -> bool:
    return Path(film_path).exists()

def film_value(film_path: str):
    return film_path if film_exists(film_path) else None

def patient_monitor_value(img_path: str):
    """
    Returns either the patient monitor image path if present,
    or a generated PNG buffer as a placeholder "GIS Map".
    """
    p = Path(img_path)
    if p.exists():
        return str(p)

    # Fallback placeholder map (rendered PNG buffer)
    fig = plt.figure(figsize=(6.8, 3.8))
    ax = fig.add_subplot(111)
    ax.set_facecolor("#111722")
    ax.set_title("GIS Map Placeholder")
    ax.set_xticks([]); ax.set_yticks([])

    # simple noise dots for “smoke-like” vibe
    for _ in range(350):
        ax.scatter(random.random(), random.random(), s=5, alpha=0.28)

    buf = io.BytesIO()
    fig.savefig(buf, format="png", dpi=160, facecolor="#111722")
    plt.close(fig)
    buf.seek(0)
    return buf
