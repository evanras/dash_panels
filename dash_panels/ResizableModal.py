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


class ResizableModal(Component):
    """A ResizableModal component.
ResizableModal Component

A modal dialog component that can be resized by dragging from configurable corners.
Provides extensive customization options for Dash developers including resize handles,
positioning, styling, and callback functions.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component (modal content).

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- animation (boolean; default True):
    Whether to enable open/close animations (future feature).

- backdrop (boolean; default True):
    Whether to show a backdrop overlay.

- backdropClosable (boolean; default True):
    Whether clicking the backdrop closes the modal.

- bodyClassName (string; optional):
    CSS class name for the modal body.

- bodyStyle (dict; optional):
    Inline styles for the modal body.

- bottomOffset (number; default undefined):
    Distance from the bottom edge of the screen in pixels. If
    specified, overrides y positioning.

- className (string; optional):
    CSS class name for the modal container.

- customCloseIcon (a list of or a singular dash component, string or number; optional):
    Custom close icon element to display instead of default X.

- customResizeIcon (a list of or a singular dash component, string or number; optional):
    Custom resize icon element to display.

- dragBounds (dict; optional):
    Constraints for modal dragging. - None: No constraints (default) -
    'viewport': Keep within browser viewport - object: { top, right,
    bottom, left } pixel bounds.

    `dragBounds` is a a value equal to: 'viewport' | dict with keys:

    - top (number; optional)

    - right (number; optional)

    - bottom (number; optional)

    - left (number; optional)

- dragHandle (a value equal to: 'header', 'modal', 'custom'; default 'header'):
    Which area of the modal can be used for dragging. - 'header': Only
    the header area (default) - 'modal': Entire modal except resize
    handle - 'custom': Only elements with data-drag-handle=\"custom\".

- draggable (boolean; default True):
    Whether the modal can be dragged by its header.

- escapeClosable (boolean; default True):
    Whether pressing escape closes the modal.

- headerClassName (string; optional):
    CSS class name for the modal header.

- headerStyle (dict; optional):
    Inline styles for the modal header.

- height (number; default 300):
    Initial height of the modal in pixels.

- isOpen (boolean; default True):
    Whether the modal is currently open/visible.

- maxHeight (number; default 800):
    Maximum height constraint in pixels.

- maxWidth (number; default 1200):
    Maximum width constraint in pixels.

- minHeight (number; default 150):
    Minimum height constraint in pixels.

- minWidth (number; default 200):
    Minimum width constraint in pixels.

- modal (boolean; default True):
    Whether to display as a modal (with backdrop).

- onClose (dict; optional):
    Callback fired when the modal is closed.

- onMove (dict; optional):
    Callback fired when the modal is moved.

- onResize (dict; optional):
    Callback fired when the modal is resized.

- resizable (boolean; default True):
    Whether the modal can be resized.

- resizeCorner (a value equal to: 'top-left', 'top-right', 'bottom-left', 'bottom-right'; default 'bottom-right'):
    Which corner to show the resize handle on.

- resizeHandleClassName (string; optional):
    CSS class name for the resize handle.

- resizeHandleStyle (dict; optional):
    Inline styles for the resize handle.

- rightOffset (number; default undefined):
    Distance from the right edge of the screen in pixels. If
    specified, overrides x positioning.

- showCloseButton (boolean; default False):
    Whether to show a close button in the header.

- showResizeIcon (a value equal to: 'none', 'default'; default 'default'):
    Whether to show a resize icon and what type.

- title (string | a list of or a singular dash component, string or number; optional):
    The modal title. Can be a string or React element.

- width (number; default 400):
    Initial width of the modal in pixels.

- x (number; default 100):
    Initial X position from the left edge in pixels.

- y (number; default 100):
    Initial Y position from the top edge in pixels.

- zIndex (number; default 1000):
    Z-index for the modal (backdrop will be zIndex - 1)."""
    _children_props = ['title', 'customResizeIcon', 'customCloseIcon']
    _base_nodes = ['title', 'customResizeIcon', 'customCloseIcon', 'children']
    _namespace = 'dash_panels'
    _type = 'ResizableModal'
    DragBounds = TypedDict(
        "DragBounds",
            {
            "top": NotRequired[NumberType],
            "right": NotRequired[NumberType],
            "bottom": NotRequired[NumberType],
            "left": NotRequired[NumberType]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        isOpen: typing.Optional[bool] = None,
        title: typing.Optional[typing.Union[str, ComponentType]] = None,
        width: typing.Optional[NumberType] = None,
        height: typing.Optional[NumberType] = None,
        minWidth: typing.Optional[NumberType] = None,
        maxWidth: typing.Optional[NumberType] = None,
        minHeight: typing.Optional[NumberType] = None,
        maxHeight: typing.Optional[NumberType] = None,
        x: typing.Optional[NumberType] = None,
        y: typing.Optional[NumberType] = None,
        rightOffset: typing.Optional[NumberType] = None,
        bottomOffset: typing.Optional[NumberType] = None,
        resizeCorner: typing.Optional[Literal["top-left", "top-right", "bottom-left", "bottom-right"]] = None,
        showResizeIcon: typing.Optional[Literal["none", "default"]] = None,
        customResizeIcon: typing.Optional[ComponentType] = None,
        showCloseButton: typing.Optional[bool] = None,
        customCloseIcon: typing.Optional[ComponentType] = None,
        onResize: typing.Optional[dict] = None,
        onMove: typing.Optional[dict] = None,
        onClose: typing.Optional[dict] = None,
        draggable: typing.Optional[bool] = None,
        dragHandle: typing.Optional[Literal["header", "modal", "custom"]] = None,
        dragBounds: typing.Optional[typing.Union[Literal["viewport"], "DragBounds"]] = None,
        resizable: typing.Optional[bool] = None,
        modal: typing.Optional[bool] = None,
        backdrop: typing.Optional[bool] = None,
        backdropClosable: typing.Optional[bool] = None,
        escapeClosable: typing.Optional[bool] = None,
        className: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        headerClassName: typing.Optional[str] = None,
        headerStyle: typing.Optional[dict] = None,
        bodyClassName: typing.Optional[str] = None,
        bodyStyle: typing.Optional[dict] = None,
        resizeHandleClassName: typing.Optional[str] = None,
        resizeHandleStyle: typing.Optional[dict] = None,
        zIndex: typing.Optional[NumberType] = None,
        animation: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'animation', 'backdrop', 'backdropClosable', 'bodyClassName', 'bodyStyle', 'bottomOffset', 'className', 'customCloseIcon', 'customResizeIcon', 'dragBounds', 'dragHandle', 'draggable', 'escapeClosable', 'headerClassName', 'headerStyle', 'height', 'isOpen', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'onClose', 'onMove', 'onResize', 'resizable', 'resizeCorner', 'resizeHandleClassName', 'resizeHandleStyle', 'rightOffset', 'showCloseButton', 'showResizeIcon', 'style', 'title', 'width', 'x', 'y', 'zIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'animation', 'backdrop', 'backdropClosable', 'bodyClassName', 'bodyStyle', 'bottomOffset', 'className', 'customCloseIcon', 'customResizeIcon', 'dragBounds', 'dragHandle', 'draggable', 'escapeClosable', 'headerClassName', 'headerStyle', 'height', 'isOpen', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'onClose', 'onMove', 'onResize', 'resizable', 'resizeCorner', 'resizeHandleClassName', 'resizeHandleStyle', 'rightOffset', 'showCloseButton', 'showResizeIcon', 'style', 'title', 'width', 'x', 'y', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(ResizableModal, self).__init__(children=children, **args)

setattr(ResizableModal, "__init__", _explicitize_args(ResizableModal.__init__))
