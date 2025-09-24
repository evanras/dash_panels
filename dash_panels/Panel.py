# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class Panel(Component):
    """A Panel component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    The class name for the panel group used for styling.

- collapsedSizePercentage (number; optional):
    Panel should collapse to this size (in percentage).

- collapsedSizePixels (number; optional):
    Panel should collapse to this size (in pixesl).

- collapsible (boolean; optional):
    Whether Panel should collapse when resized beyond its minSize.

- defaultSizePercentage (number; optional):
    Initial size of panel (in percentage).

- defaultSizePixels (number; optional):
    Initial size of panel (in pixels).

- maxSizePercentage (number; optional):
    Maximum size of panel (in percentage).

- maxSizePixels (number; optional):
    Maximum size of panel (in pixels).

- minSizePercentage (number; optional):
    Minimum size of panel (in percentage).

- minSizePixels (number; optional):
    Minimum size of panel (in pixels).

- order (number; optional):
    Order of panel within group; required for groups with
    conditionally rendered panels."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_panels'
    _type = 'Panel'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        collapsedSizePixels: typing.Optional[NumberType] = None,
        collapsedSizePercentage: typing.Optional[NumberType] = None,
        collapsible: typing.Optional[bool] = None,
        defaultSizePixels: typing.Optional[NumberType] = None,
        defaultSizePercentage: typing.Optional[NumberType] = None,
        minSizePixels: typing.Optional[NumberType] = None,
        minSizePercentage: typing.Optional[NumberType] = None,
        maxSizePixels: typing.Optional[NumberType] = None,
        maxSizePercentage: typing.Optional[NumberType] = None,
        order: typing.Optional[NumberType] = None,
        style: typing.Optional[typing.Any] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'className', 'collapsedSizePercentage', 'collapsedSizePixels', 'collapsible', 'defaultSizePercentage', 'defaultSizePixels', 'maxSizePercentage', 'maxSizePixels', 'minSizePercentage', 'minSizePixels', 'order', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'collapsedSizePercentage', 'collapsedSizePixels', 'collapsible', 'defaultSizePercentage', 'defaultSizePixels', 'maxSizePercentage', 'maxSizePixels', 'minSizePercentage', 'minSizePixels', 'order', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Panel, self).__init__(children=children, **args)

setattr(Panel, "__init__", _explicitize_args(Panel.__init__))
