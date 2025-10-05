# pages/home.py
import gradio as gr
from utils.assets import film_value, film_exists

def build_home_tab(cfg: dict):
    with gr.Row(elem_classes="hero"):
        gr.Markdown(f"""
<div class="pulse-badge"><span class="pulse-dot"></span> Terra at 25</div>
<h1>{cfg["title"]}</h1>
<p>{cfg["tagline"]}</p>
""")

    with gr.Row(elem_classes="section"):
        with gr.Column(elem_classes="video-container"):
            gr.Markdown('### 🎬 Film — "Earth\'s Medical Chart" (2–3 min)')
            gr.Video(
                value=film_value(cfg["film_video"]),
                label="Cinematic cut",
                interactive=False,
                show_download_button=True,
                height=480
            )
            if not film_exists(cfg["film_video"]):
                gr.Markdown(
                    "> ⚠️ Add your film at `assets/video/doctor-cut-1080p.mp4`.",
                    elem_classes="card"
                )

    with gr.Row(elem_classes="section"):
        gr.Markdown(
            """
### About this project
**Terra** has recorded Earth's "vitals" for 25 years. This site premieres a cinematic cut and offers a clean, accessible data explorer.
            """,
            elem_classes="card"
        )

    gr.Markdown("—  \n<span class='footer'>Data credits: NASA Terra (MODIS, MISR, MOPITT, ASTER, CERES).</span>")
