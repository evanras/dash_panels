from dash_panels import PanelGroup, Panel, PanelResizeHandle
from dash import Dash, html

app = Dash(__name__)

handle_styles = {
    "background-color": "red",
    "width": "3px",
    "height": "100%",
}
vertical_handle_styles = {
    "background-color": "red",
    "height": "3px",
    "width": "100%",
}

app.layout = html.Div(
    style={"height": "100vh"},
    children=[
        PanelGroup(
            id="panel-group",
            children=[
                Panel(
                    id="panel-1",
                    children=[html.Div("Panel 1")],
                    defaultSize=45,
                    minSize=15,
                    collapsible=True,
                ),
                PanelResizeHandle(html.Div(style=handle_styles)),
                Panel(
                    id="panel-2",
                    children=[
                        PanelGroup(
                            id="panel-group-2",
                            children=[
                                Panel(id="panel-2-1", children=["Panel 2-1"]),
                                PanelResizeHandle(
                                    html.Div(style=vertical_handle_styles)
                                ),
                                Panel(id="panel-2-2", children=[html.Div("Panel 2-2")]),
                            ],
                            direction="vertical",
                        )
                    ],
                    minSize=50,
                ),
                PanelResizeHandle(html.Div(style=handle_styles)),
                Panel(
                    id="panel-3",
                    children=[html.Div("Panel 3")],
                    defaultSize=20,
                    minSize=10,
                ),
            ],
            direction="horizontal",
        )
    ],
)


if __name__ == "__main__":
    app.run(debug=True)