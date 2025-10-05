# app.py
from pathlib import Path
import gradio as gr
from utils.config import load_config
from pages.home import build_home_tab
from pages.dashboard import build_dashboard_tab

CSS_PATH = Path("styles/styles.css")

def load_css() -> str:
    return CSS_PATH.read_text() if CSS_PATH.exists() else ""

def create_app():
    cfg = load_config()
    css = load_css()

    with gr.Blocks(title="Terra at 25", css=css, theme="soft") as demo:
        with gr.Tabs(elem_id="navtabs"):
            with gr.Tab("🎬 The Story"):
                build_home_tab(cfg)
            with gr.Tab("🩺 The Doctor’s Dashboard"):
                build_dashboard_tab(cfg)
    return demo

if __name__ == "__main__":
    app = create_app()
    app.launch()
