% Auto-generated: do not edit by hand
\name{panel}

\alias{panel}

\title{Panel component}

\description{

}

\usage{
panel(children=NULL, id=NULL, className=NULL, collapsedSize=NULL,
collapsible=NULL, defaultSize=NULL, maxSize=NULL,
minSize=NULL, order=NULL, style=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. The children of this component.}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{className}{Character. The class name for the panel group used for styling}

\item{collapsedSize}{Numeric. Panel should collapse to this size (in percentage or pixels)}

\item{collapsible}{Logical. Whether Panel should collapse when resized beyond its minSize}

\item{defaultSize}{Numeric. Initial size of panel (in percentage)}

\item{maxSize}{Numeric. Maximum size of panel (in percentage)}

\item{minSize}{Numeric. Minimum size of panel (in percentage)}

\item{order}{Numeric. Order of panel within group; required for groups with conditionally rendered panels}

\item{style}{Named list. style for the panel group}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

