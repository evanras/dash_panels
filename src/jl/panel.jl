# AUTO GENERATED FILE - DO NOT EDIT

export panel

"""
    panel(;kwargs...)
    panel(children::Any;kwargs...)
    panel(children_maker::Function;kwargs...)


A Panel component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional): The class name for the panel group used for styling
- `collapsedSize` (Real; optional): Panel should collapse to this size (in percentage or pixels)
- `collapsible` (Bool; optional): Whether Panel should collapse when resized beyond its minSize
- `defaultSize` (Real; optional): Initial size of panel (in percentage)
- `maxSize` (Real; optional): Maximum size of panel (in percentage)
- `minSize` (Real; optional): Minimum size of panel (in percentage)
- `order` (Real; optional): Order of panel within group; required for groups with conditionally rendered panels
- `style` (Dict; optional): style for the panel group
"""
function panel(; kwargs...)
        available_props = Symbol[:children, :id, :className, :collapsedSize, :collapsible, :defaultSize, :maxSize, :minSize, :order, :style]
        wild_props = Symbol[]
        return Component("panel", "Panel", "dash_panels", available_props, wild_props; kwargs...)
end

panel(children::Any; kwargs...) = panel(;kwargs..., children = children)
panel(children_maker::Function; kwargs...) = panel(children_maker(); kwargs...)

