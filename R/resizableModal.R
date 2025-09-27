# AUTO GENERATED FILE - DO NOT EDIT

#' @export
resizableModal <- function(children=NULL, id=NULL, animation=NULL, backdrop=NULL, backdropClosable=NULL, bodyClassName=NULL, bodyStyle=NULL, bottomOffset=NULL, className=NULL, customCloseIcon=NULL, customResizeIcon=NULL, dragBounds=NULL, dragHandle=NULL, draggable=NULL, escapeClosable=NULL, headerClassName=NULL, headerStyle=NULL, height=NULL, isOpen=NULL, maxHeight=NULL, maxWidth=NULL, minHeight=NULL, minWidth=NULL, modal=NULL, onClose=NULL, onMove=NULL, onResize=NULL, resizable=NULL, resizeCorner=NULL, resizeHandleClassName=NULL, resizeHandleStyle=NULL, rightOffset=NULL, showCloseButton=NULL, showResizeIcon=NULL, style=NULL, title=NULL, width=NULL, x=NULL, y=NULL, zIndex=NULL) {
    
    props <- list(children=children, id=id, animation=animation, backdrop=backdrop, backdropClosable=backdropClosable, bodyClassName=bodyClassName, bodyStyle=bodyStyle, bottomOffset=bottomOffset, className=className, customCloseIcon=customCloseIcon, customResizeIcon=customResizeIcon, dragBounds=dragBounds, dragHandle=dragHandle, draggable=draggable, escapeClosable=escapeClosable, headerClassName=headerClassName, headerStyle=headerStyle, height=height, isOpen=isOpen, maxHeight=maxHeight, maxWidth=maxWidth, minHeight=minHeight, minWidth=minWidth, modal=modal, onClose=onClose, onMove=onMove, onResize=onResize, resizable=resizable, resizeCorner=resizeCorner, resizeHandleClassName=resizeHandleClassName, resizeHandleStyle=resizeHandleStyle, rightOffset=rightOffset, showCloseButton=showCloseButton, showResizeIcon=showResizeIcon, style=style, title=title, width=width, x=x, y=y, zIndex=zIndex)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ResizableModal',
        namespace = 'dash_panels',
        propNames = c('children', 'id', 'animation', 'backdrop', 'backdropClosable', 'bodyClassName', 'bodyStyle', 'bottomOffset', 'className', 'customCloseIcon', 'customResizeIcon', 'dragBounds', 'dragHandle', 'draggable', 'escapeClosable', 'headerClassName', 'headerStyle', 'height', 'isOpen', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'onClose', 'onMove', 'onResize', 'resizable', 'resizeCorner', 'resizeHandleClassName', 'resizeHandleStyle', 'rightOffset', 'showCloseButton', 'showResizeIcon', 'style', 'title', 'width', 'x', 'y', 'zIndex'),
        package = 'dashPanels'
        )

    structure(component, class = c('dash_component', 'list'))
}
