# AUTO GENERATED FILE - DO NOT EDIT

export resizablemodal

"""
    resizablemodal(;kwargs...)
    resizablemodal(children::Any;kwargs...)
    resizablemodal(children_maker::Function;kwargs...)


A ResizableModal component.
ResizableModal Component

A modal dialog component that can be resized by dragging from configurable corners.
Provides extensive customization options for Dash developers including resize handles,
positioning, styling, and callback functions.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component (modal content).
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `animation` (Bool; optional): Whether to enable open/close animations (future feature).
- `backdrop` (Bool; optional): Whether to show a backdrop overlay.
- `backdropClosable` (Bool; optional): Whether clicking the backdrop closes the modal.
- `bodyClassName` (String; optional): CSS class name for the modal body.
- `bodyStyle` (Dict; optional): Inline styles for the modal body.
- `bottomOffset` (Real; optional): Distance from the bottom edge of the screen in pixels.
If specified, overrides y positioning.
- `className` (String; optional): CSS class name for the modal container.
- `customCloseIcon` (a list of or a singular dash component, string or number; optional): Custom close icon element to display instead of default X.
- `customResizeIcon` (a list of or a singular dash component, string or number; optional): Custom resize icon element to display.
- `dragBounds` (optional): Constraints for modal dragging.
- null: No constraints (default)
- 'viewport': Keep within browser viewport
- object: { top, right, bottom, left } pixel bounds. dragBounds has the following type: a value equal to: 'viewport' | lists containing elements 'top', 'right', 'bottom', 'left'.
Those elements have the following types:
  - `top` (Real; optional)
  - `right` (Real; optional)
  - `bottom` (Real; optional)
  - `left` (Real; optional)
- `dragHandle` (a value equal to: 'header', 'modal', 'custom'; optional): Which area of the modal can be used for dragging.
- 'header': Only the header area (default)
- 'modal': Entire modal except resize handle
- 'custom': Only elements with data-drag-handle="custom"
- `draggable` (Bool; optional): Whether the modal can be dragged by its header.
- `escapeClosable` (Bool; optional): Whether pressing escape closes the modal.
- `headerClassName` (String; optional): CSS class name for the modal header.
- `headerStyle` (Dict; optional): Inline styles for the modal header.
- `height` (Real; optional): Initial height of the modal in pixels.
- `isOpen` (Bool; optional): Whether the modal is currently open/visible.
- `maxHeight` (Real; optional): Maximum height constraint in pixels.
- `maxWidth` (Real; optional): Maximum width constraint in pixels.
- `minHeight` (Real; optional): Minimum height constraint in pixels.
- `minWidth` (Real; optional): Minimum width constraint in pixels.
- `modal` (Bool; optional): Whether to display as a modal (with backdrop).
- `onClose` (Dict; optional): Callback fired when the modal is closed.
- `onMove` (Dict; optional): Callback fired when the modal is moved.
- `onResize` (Dict; optional): Callback fired when the modal is resized.
- `resizable` (Bool; optional): Whether the modal can be resized.
- `resizeCorner` (a value equal to: 'top-left', 'top-right', 'bottom-left', 'bottom-right'; optional): Which corner to show the resize handle on.
- `resizeHandleClassName` (String; optional): CSS class name for the resize handle.
- `resizeHandleStyle` (Dict; optional): Inline styles for the resize handle.
- `rightOffset` (Real; optional): Distance from the right edge of the screen in pixels.
If specified, overrides x positioning.
- `showCloseButton` (Bool; optional): Whether to show a close button in the header.
- `showResizeIcon` (a value equal to: 'none', 'default'; optional): Whether to show a resize icon and what type.
- `style` (Dict; optional): Inline styles for the modal container.
- `title` (String | a list of or a singular dash component, string or number; optional): The modal title. Can be a string or React element.
- `width` (Real; optional): Initial width of the modal in pixels.
- `x` (Real; optional): Initial X position from the left edge in pixels.
- `y` (Real; optional): Initial Y position from the top edge in pixels.
- `zIndex` (Real; optional): Z-index for the modal (backdrop will be zIndex - 1).
"""
function resizablemodal(; kwargs...)
        available_props = Symbol[:children, :id, :animation, :backdrop, :backdropClosable, :bodyClassName, :bodyStyle, :bottomOffset, :className, :customCloseIcon, :customResizeIcon, :dragBounds, :dragHandle, :draggable, :escapeClosable, :headerClassName, :headerStyle, :height, :isOpen, :maxHeight, :maxWidth, :minHeight, :minWidth, :modal, :onClose, :onMove, :onResize, :resizable, :resizeCorner, :resizeHandleClassName, :resizeHandleStyle, :rightOffset, :showCloseButton, :showResizeIcon, :style, :title, :width, :x, :y, :zIndex]
        wild_props = Symbol[]
        return Component("resizablemodal", "ResizableModal", "dash_panels", available_props, wild_props; kwargs...)
end

resizablemodal(children::Any; kwargs...) = resizablemodal(;kwargs..., children = children)
resizablemodal(children_maker::Function; kwargs...) = resizablemodal(children_maker(); kwargs...)

