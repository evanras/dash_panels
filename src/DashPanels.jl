
module DashPanels
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/panel.jl")
include("jl/panelgroup.jl")
include("jl/panelresizehandle.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_panels",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_panels.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_panels.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
