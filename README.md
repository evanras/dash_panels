# Dash Panels

Dash Panels is a Dash component library that offers a handful of resizable components. 

## Components

### Panels
The resizable panels are inspired by and built utilizing the 
[`react-resizable-panels`](https://github.com/bvaughn/react-resizable-panels) React component.
These components allow Dash developers to configure groups of resizable components.

#### Demo


#### Usage
```python
from dash_panels import PanelGroup, Panel, PanelResizeHandle
from dash import Dash, html

app = Dash(__name__)

handle_styles = {
    "background-color": "blue",
    "width": "3px",
    "height": "100%",
}
vertical_handle_styles = {
    "background-color": "blue",
    "height": "3px",
    "width": "100%",
}

panel_layout = html.Div(
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
    app.layout = panel_layout
    app.run(debug=False)

```

### ResizableModal
The ResizableModal component is a highly customizable component that can be resized as well as dragged around. 

#### Demo


#### Usage
```python
from dash_panels import ResizableModal
from dash import Dash, html, Input, Output

app = Dash(__name__)

resizable_modal_layout = html.Div(
    children=[
        html.H1("ResizableModal Example"),
        html.P("Click below to see ResizableModal."),
        html.Button(id="open-modal", children="Open Modal"),
        ResizableModal(
            id="test-modal",
            title="Resizable Modal",
            isOpen=False,
            backdrop=True,
            showCloseButton=True,
            rightOffset=50,   # 50px from right edge
            bottomOffset=100,  # 100px from bottom edge
            resizeCorner="bottom-right",
            children=[
                "Hello, this is test content! I can included tons of text in here. "
            ]
        )
    ]
)
@app.callback(
    Output("test-modal", "isOpen"),
    Input("open-modal", "n_clicks"),
    prevent_initial_call=True,
)
def open_modal(n_clicks):
    return True

if __name__ == "__main__":
    app.layout = resizable_modal_layout
    app.run(debug=False)

```

