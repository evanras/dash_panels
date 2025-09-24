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


class GroupPanel(Component):
    """A GroupPanel component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- autoSaveId (string; optional):
    Unique id used to auto-save group arragement via local storage.

- className (string; optional):
    The class name for the panel group for styling.

- direction (string; optional):
    Direction of the panel group - horizontal or vertical."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_panels'
    _type = 'GroupPanel'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        autoSaveId: typing.Optional[str] = None,
        className: typing.Optional[str] = None,
        direction: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'autoSaveId', 'className', 'direction', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'autoSaveId', 'className', 'direction', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(GroupPanel, self).__init__(children=children, **args)

setattr(GroupPanel, "__init__", _explicitize_args(GroupPanel.__init__))
