# AUTO GENERATED FILE - DO NOT EDIT

#' @export
panelResizeHandle <- function(children=NULL, id=NULL, className=NULL, disabled=NULL, style=NULL) {
    
    props <- list(children=children, id=id, className=className, disabled=disabled, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'PanelResizeHandle',
        namespace = 'dash_panels',
        propNames = c('children', 'id', 'className', 'disabled', 'style'),
        package = 'dashPanels'
        )

    structure(component, class = c('dash_component', 'list'))
}
