% Auto-generated: do not edit by hand
\name{ressizableModal}

\alias{ressizableModal}

\title{RessizableModal component}

\description{
ResizableModal Component  A modal dialog component that can be resized by dragging from configurable corners. Provides extensive customization options for Dash developers including resize handles, positioning, styling, and callback functions.
}

\usage{
ressizableModal(children=NULL, id=NULL, animation=NULL, backdrop=NULL,
backdropClosable=NULL, bodyClassName=NULL, bodyStyle=NULL,
className=NULL, customResizeIcon=NULL, dragBounds=NULL,
dragHandle=NULL, draggable=NULL, escapeClosable=NULL,
headerClassName=NULL, headerStyle=NULL, height=NULL,
isOpen=NULL, maxHeight=NULL, maxWidth=NULL, minHeight=NULL,
minWidth=NULL, modal=NULL, onClose=NULL, onMove=NULL,
onResize=NULL, resizable=NULL, resizeCorner=NULL,
resizeHandleClassName=NULL, resizeHandleStyle=NULL,
showResizeIcon=NULL, style=NULL, title=NULL, width=NULL,
x=NULL, y=NULL, zIndex=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component (modal content).}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{animation}{Logical. Whether to enable open/close animations (future feature).}

\item{backdrop}{Logical. Whether to show a backdrop overlay.}

\item{backdropClosable}{Logical. Whether clicking the backdrop closes the modal.}

\item{bodyClassName}{Character. CSS class name for the modal body.}

\item{bodyStyle}{Named list. Inline styles for the modal body.}

\item{className}{Character. CSS class name for the modal container.}

\item{customResizeIcon}{A list of or a singular dash component, string or number. Custom resize icon element to display.}

\item{dragBounds}{A value equal to: 'viewport' | lists containing elements 'top', 'right', 'bottom', 'left'.
those elements have the following types:
  - top (numeric; optional)
  - right (numeric; optional)
  - bottom (numeric; optional)
  - left (numeric; optional). Constraints for modal dragging.
- null: No constraints (default)
- 'viewport': Keep within browser viewport
- object: { top, right, bottom, left } pixel bounds}

\item{dragHandle}{A value equal to: 'header', 'modal', 'custom'. Which area of the modal can be used for dragging.
- 'header': Only the header area (default)
- 'modal': Entire modal except resize handle
- 'custom': Only elements with data-drag-handle="custom"}

\item{draggable}{Logical. Whether the modal can be dragged by its header.}

\item{escapeClosable}{Logical. Whether pressing escape closes the modal.}

\item{headerClassName}{Character. CSS class name for the modal header.}

\item{headerStyle}{Named list. Inline styles for the modal header.}

\item{height}{Numeric. Initial height of the modal in pixels.}

\item{isOpen}{Logical. Whether the modal is currently open/visible.}

\item{maxHeight}{Numeric. Maximum height constraint in pixels.}

\item{maxWidth}{Numeric. Maximum width constraint in pixels.}

\item{minHeight}{Numeric. Minimum height constraint in pixels.}

\item{minWidth}{Numeric. Minimum width constraint in pixels.}

\item{modal}{Logical. Whether to display as a modal (with backdrop).}

\item{onClose}{Named list. Callback fired when the modal is closed.}

\item{onMove}{Named list. Callback fired when the modal is moved.}

\item{onResize}{Named list. Callback fired when the modal is resized.}

\item{resizable}{Logical. Whether the modal can be resized.}

\item{resizeCorner}{A value equal to: 'top-left', 'top-right', 'bottom-left', 'bottom-right'. Which corner to show the resize handle on.}

\item{resizeHandleClassName}{Character. CSS class name for the resize handle.}

\item{resizeHandleStyle}{Named list. Inline styles for the resize handle.}

\item{showResizeIcon}{A value equal to: 'none', 'default'. Whether to show a resize icon and what type.}

\item{style}{Named list. Inline styles for the modal container.}

\item{title}{Character | a list of or a singular dash component, string or number. The modal title. Can be a string or React element.}

\item{width}{Numeric. Initial width of the modal in pixels.}

\item{x}{Numeric. Initial X position in pixels from the left edge.}

\item{y}{Numeric. Initial Y position in pixels from the top edge.}

\item{zIndex}{Numeric. Z-index for the modal (backdrop will be zIndex - 1).}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

