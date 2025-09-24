# AUTO GENERATED FILE - DO NOT EDIT

export panelgroup

"""
    panelgroup(;kwargs...)
    panelgroup(children::Any;kwargs...)
    panelgroup(children_maker::Function;kwargs...)


A PanelGroup component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `autoSaveId` (String; optional): Unique id used to auto-save group arragement via local storage.
- `className` (String; optional): The class name for the panel group for styling
- `direction` (String; optional): Direction of the panel group - horizontal or vertical
- `style` (Dict; optional): Additonal style for the panel group
"""
function panelgroup(; kwargs...)
        available_props = Symbol[:children, :id, :autoSaveId, :className, :direction, :style]
        wild_props = Symbol[]
        return Component("panelgroup", "PanelGroup", "dash_panels", available_props, wild_props; kwargs...)
end

panelgroup(children::Any; kwargs...) = panelgroup(;kwargs..., children = children)
panelgroup(children_maker::Function; kwargs...) = panelgroup(children_maker(); kwargs...)

