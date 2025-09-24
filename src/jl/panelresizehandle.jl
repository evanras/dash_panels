# AUTO GENERATED FILE - DO NOT EDIT

export panelresizehandle

"""
    panelresizehandle(;kwargs...)
    panelresizehandle(children::Any;kwargs...)
    panelresizehandle(children_maker::Function;kwargs...)


A PanelResizeHandle component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional): The class name for the panel group for styling
- `disable` (Bool; optional): Disable drag handle
- `style` (Dict; optional): Additional style for the panel group
"""
function panelresizehandle(; kwargs...)
        available_props = Symbol[:children, :id, :className, :disable, :style]
        wild_props = Symbol[]
        return Component("panelresizehandle", "PanelResizeHandle", "dash_panels", available_props, wild_props; kwargs...)
end

panelresizehandle(children::Any; kwargs...) = panelresizehandle(;kwargs..., children = children)
panelresizehandle(children_maker::Function; kwargs...) = panelresizehandle(children_maker(); kwargs...)

