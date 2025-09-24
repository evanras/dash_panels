# AUTO GENERATED FILE - DO NOT EDIT

#' @export
groupPanel <- function(children=NULL, id=NULL, autoSaveId=NULL, className=NULL, direction=NULL, style=NULL) {
    
    props <- list(children=children, id=id, autoSaveId=autoSaveId, className=className, direction=direction, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GroupPanel',
        namespace = 'dash_panels',
        propNames = c('children', 'id', 'autoSaveId', 'className', 'direction', 'style'),
        package = 'dashPanels'
        )

    structure(component, class = c('dash_component', 'list'))
}
