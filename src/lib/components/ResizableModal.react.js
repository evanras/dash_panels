import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

/**
 * ResizableModal Component
 * 
 * A modal dialog component that can be resized by dragging from configurable corners.
 * Provides extensive customization options for Dash developers including resize handles,
 * positioning, styling, and callback functions.
 */
const ResizableModal = (props) => {
    const {
        children,
        setProps,
        id,
        isOpen,
        title,
        width,
        height,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        x,
        y,
        rightOffset,
        bottomOffset,
        resizeCorner,
        showResizeIcon,
        customResizeIcon,
        showCloseButton,
        customCloseIcon,
        onResize,
        onMove,
        onClose,
        draggable,
        dragHandle,
        dragBounds,
        resizable,
        modal,
        backdrop,
        backdropClosable,
        escapeClosable,
        className,
        style,
        headerClassName,
        headerStyle,
        bodyClassName,
        bodyStyle,
        resizeHandleClassName,
        resizeHandleStyle,
        zIndex,
        animation,
        ...other
    } = props;

    /**
     * Calculates initial position based on offsets or x/y coordinates
     */
    const calculateInitialPosition = useCallback(() => {
        if (rightOffset !== undefined && bottomOffset !== undefined) {
            // Calculate position from right and bottom edges
            const calculatedX = window.innerWidth - (width || 400) - rightOffset;
            const calculatedY = window.innerHeight - (height || 300) - bottomOffset;
            return { x: calculatedX, y: calculatedY };
        } else if (rightOffset !== undefined) {
            // Only right offset specified
            const calculatedX = window.innerWidth - (width || 400) - rightOffset;
            return { x: calculatedX, y: y || 100 };
        } else if (bottomOffset !== undefined) {
            // Only bottom offset specified
            const calculatedY = window.innerHeight - (height || 300) - bottomOffset;
            return { x: x || 100, y: calculatedY };
        } else {
            // Use x/y coordinates (default behavior)
            return { x: x || 100, y: y || 100 };
        }
    }, [rightOffset, bottomOffset, x, y, width, height]);

    // State management for modal dimensions and position
    const [dimensions, setDimensions] = useState(() => {
        const initialPosition = calculateInitialPosition();
        return {
            width: width || 400,
            height: height || 300,
            x: initialPosition.x,
            y: initialPosition.y
        };
    });

    // Refs for DOM manipulation and event handling
    const modalRef = useRef(null);
    const resizeHandleRef = useRef(null);
    const isDragging = useRef(false);
    const isResizing = useRef(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const resizeStart = useRef({ x: 0, y: 0, width: 0, height: 0 });

    /**
     * Determines the resize handle position based on the configured corner
     * Supports all four corners with appropriate cursor styles
     */
    const getResizeHandleStyles = useCallback(() => {
        const baseStyles = {
            position: 'absolute',
            cursor: 'nw-resize',
            zIndex: 1000,
            userSelect: 'none'
        };

        switch (resizeCorner) {
            case 'top-left':
                return { ...baseStyles, top: 0, left: 0, cursor: 'nw-resize' };
            case 'top-right':
                return { ...baseStyles, top: 0, right: 0, cursor: 'ne-resize' };
            case 'bottom-left':
                return { ...baseStyles, bottom: 0, left: 0, cursor: 'sw-resize' };
            case 'bottom-right':
            default:
                return { ...baseStyles, bottom: 0, right: 0, cursor: 'se-resize' };
        }
    }, [resizeCorner]);

    /**
     * Calculates new dimensions based on mouse movement and resize corner
     * Ensures dimensions stay within min/max bounds
     */
    const calculateNewDimensions = useCallback((clientX, clientY) => {
        const deltaX = clientX - resizeStart.current.x;
        const deltaY = clientY - resizeStart.current.y;

        let newWidth = resizeStart.current.width;
        let newHeight = resizeStart.current.height;
        let newX = dimensions.x;
        let newY = dimensions.y;

        // Calculate new dimensions based on resize corner
        switch (resizeCorner) {
            case 'top-left':
                newWidth = Math.max(minWidth, Math.min(maxWidth, resizeStart.current.width - deltaX));
                newHeight = Math.max(minHeight, Math.min(maxHeight, resizeStart.current.height - deltaY));
                newX = dimensions.x + (resizeStart.current.width - newWidth);
                newY = dimensions.y + (resizeStart.current.height - newHeight);
                break;
            case 'top-right':
                newWidth = Math.max(minWidth, Math.min(maxWidth, resizeStart.current.width + deltaX));
                newHeight = Math.max(minHeight, Math.min(maxHeight, resizeStart.current.height - deltaY));
                newY = dimensions.y + (resizeStart.current.height - newHeight);
                break;
            case 'bottom-left':
                newWidth = Math.max(minWidth, Math.min(maxWidth, resizeStart.current.width - deltaX));
                newHeight = Math.max(minHeight, Math.min(maxHeight, resizeStart.current.height + deltaY));
                newX = dimensions.x + (resizeStart.current.width - newWidth);
                break;
            case 'bottom-right':
            default:
                newWidth = Math.max(minWidth, Math.min(maxWidth, resizeStart.current.width + deltaX));
                newHeight = Math.max(minHeight, Math.min(maxHeight, resizeStart.current.height + deltaY));
                break;
        }

        return { width: newWidth, height: newHeight, x: newX, y: newY };
    }, [resizeCorner, minWidth, maxWidth, minHeight, maxHeight, dimensions]);

    /**
     * Handles the start of a resize operation
     * Records initial position and dimensions for delta calculations
     */
    const handleResizeStart = useCallback((e) => {
        if (!resizable) return;

        e.preventDefault();
        e.stopPropagation();

        isResizing.current = true;
        resizeStart.current = {
            x: e.clientX,
            y: e.clientY,
            width: dimensions.width,
            height: dimensions.height
        };

        // Add global event listeners for smooth resize experience
        document.addEventListener('mousemove', handleResizeMove);
        document.addEventListener('mouseup', handleResizeEnd);
        document.body.style.cursor = getResizeHandleStyles().cursor;
        document.body.style.userSelect = 'none';
    }, [resizable, dimensions, getResizeHandleStyles]);

    /**
     * Handles mouse movement during resize operation
     * Updates modal dimensions in real-time
     */
    const handleResizeMove = useCallback((e) => {
        if (!isResizing.current) return;

        const newDimensions = calculateNewDimensions(e.clientX, e.clientY);
        setDimensions(newDimensions);

        // Trigger onResize callback for Dash integration
        if (onResize && setProps) {
            setProps({
                onResize: {
                    width: newDimensions.width,
                    height: newDimensions.height,
                    x: newDimensions.x,
                    y: newDimensions.y,
                    timestamp: Date.now()
                }
            });
        }
    }, [calculateNewDimensions, onResize, setProps]);

    /**
     * Handles the end of a resize operation
     * Cleans up event listeners and resets cursor
     */
    const handleResizeEnd = useCallback(() => {
        isResizing.current = false;
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }, [handleResizeMove]);

    /**
     * Determines if an element should act as a drag handle
     * Supports flexible drag area configuration
     */
    const isDragHandle = useCallback((element) => {
        if (!draggable) return false;

        switch (dragHandle) {
            case 'header':
                // Only the header can drag (default behavior)
                return element.closest('[data-drag-handle="header"]') !== null;
            case 'modal':
                // Entire modal can drag (except resize handle)
                return !element.closest('[data-resize-handle]');
            case 'custom':
                // Only elements with data-drag-handle="custom" can drag
                return element.closest('[data-drag-handle="custom"]') !== null;
            default:
                return false;
        }
    }, [draggable, dragHandle]);

    /**
     * Constrains modal position within specified bounds
     */
    const constrainPosition = useCallback((newX, newY) => {
        if (!dragBounds) return { x: newX, y: newY };

        let constrainedX = newX;
        let constrainedY = newY;

        if (dragBounds === 'viewport') {
            // Keep modal within viewport bounds
            constrainedX = Math.max(0, Math.min(window.innerWidth - dimensions.width, newX));
            constrainedY = Math.max(0, Math.min(window.innerHeight - dimensions.height, newY));
        } else if (typeof dragBounds === 'object') {
            // Custom bounds object handling
            const { top = 0, right = window.innerWidth, bottom = window.innerHeight, left = 0 } = dragBounds;
            constrainedX = Math.max(left, Math.min(right - dimensions.width, newX));
            constrainedY = Math.max(top, Math.min(bottom - dimensions.height, newY));
        }

        return { x: constrainedX, y: constrainedY };
    }, [dragBounds, dimensions.width, dimensions.height]);

    /**
     * Handles the start of a drag operation for modal repositioning
     * Simple pixel-based positioning
     */
    const handleDragStart = useCallback((e) => {
        if (!isDragHandle(e.target)) return;

        e.preventDefault();
        e.stopPropagation();
        isDragging.current = true;

        // Simple pixel-based drag start calculation
        dragStart.current = {
            x: e.clientX - dimensions.x,
            y: e.clientY - dimensions.y
        };

        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
        document.body.style.cursor = 'move';
        document.body.style.userSelect = 'none';
    }, [isDragHandle, dimensions]);

    /**
     * Handles mouse movement during drag operation
     * Simple pixel-based movement for smooth dragging
     */
    const handleDragMove = useCallback((e) => {
        if (!isDragging.current) return;

        // Simple pixel-based movement calculation
        const newX = e.clientX - dragStart.current.x;
        const newY = e.clientY - dragStart.current.y;

        // Apply position constraints if configured
        const constrainedPosition = constrainPosition(newX, newY);
        const newDimensions = { ...dimensions, ...constrainedPosition };
        setDimensions(newDimensions);

        // Trigger onMove callback for Dash integration
        if (onMove && setProps) {
            setProps({
                onMove: {
                    x: constrainedPosition.x,
                    y: constrainedPosition.y,
                    timestamp: Date.now()
                }
            });
        }
    }, [dimensions, constrainPosition, onMove, setProps]);

    /**
     * Handles the end of a drag operation
     */
    const handleDragEnd = useCallback(() => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }, [handleDragMove]);

    /**
     * Handles modal close events
     * Supports both escape key and backdrop clicks
     */
    const handleClose = useCallback((trigger) => {
        if (onClose && setProps) {
            setProps({
                onClose: {
                    trigger,
                    timestamp: Date.now()
                }
            });
        }

        // Also update isOpen if controlled by parent
        if (setProps) {
            setProps({ isOpen: false });
        }
    }, [onClose, setProps]);

    /**
     * Handles close button click events
     */
    const handleCloseButtonClick = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        handleClose('close-button');
    }, [handleClose]);

    /**
     * Keyboard event handler for escape key
     */
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape' && escapeClosable && isOpen) {
            handleClose('escape');
        }
    }, [escapeClosable, isOpen, handleClose]);

    /**
     * Backdrop click handler
     */
    const handleBackdropClick = useCallback((e) => {
        if (e.target === e.currentTarget && backdropClosable) {
            handleClose('backdrop');
        }
    }, [backdropClosable, handleClose]);

    // Effect to handle keyboard events
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, handleKeyDown]);

    // Effect to update internal dimensions when props change
    useEffect(() => {
        setDimensions(prev => ({
            ...prev,
            width: width || prev.width,
            height: height || prev.height,
            x: x !== undefined ? x : prev.x,
            y: y !== undefined ? y : prev.y
        }));
    }, [width, height, x, y]);

    // Effect to recalculate position when offset props change
    useEffect(() => {
        if (rightOffset !== undefined || bottomOffset !== undefined) {
            const newPosition = calculateInitialPosition();
            setDimensions(prev => ({
                ...prev,
                x: newPosition.x,
                y: newPosition.y
            }));
        }
    }, [rightOffset, bottomOffset, calculateInitialPosition]);

    /**
     * Renders the resize handle icon based on configuration
     * Clean L-shaped icon that rotates based on resize corner position
     */
    const renderResizeIcon = () => {
        if (!showResizeIcon || showResizeIcon === 'none') return null;

        if (customResizeIcon) {
            return customResizeIcon;
        }

        if (showResizeIcon === 'default') {
            // Determine rotation based on resize corner
            let rotation = 0;
            switch (resizeCorner) {
                case 'top-left':
                    rotation = 180; // L rotated to point toward top-left
                    break;
                case 'top-right':
                    rotation = 270; // L rotated to point toward top-right
                    break;
                case 'bottom-left':
                    rotation = 90;  // L rotated to point toward bottom-left
                    break;
                case 'bottom-right':
                default:
                    rotation = 0;   // L pointing toward bottom-right (default)
                    break;
            }

            // Clean, professional L-shaped icon
            return (
                <div style={{
                    width: '14px',
                    height: '14px',
                    position: 'relative',
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: 'center center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Create L shape with cleaner approach */}
                    <div style={{
                        position: 'relative',
                        width: '10px',
                        height: '10px'
                    }}>
                        {/* Horizontal line */}
                        <div style={{
                            position: 'absolute',
                            bottom: '0px',
                            right: '0px',
                            width: '10px',
                            height: '2px',
                            backgroundColor: '#666',
                            borderRadius: '1px'
                        }} />
                        {/* Vertical line */}
                        <div style={{
                            position: 'absolute',
                            bottom: '0px',
                            right: '0px',
                            width: '2px',
                            height: '10px',
                            backgroundColor: '#666',
                            borderRadius: '1px'
                        }} />
                    </div>
                </div>
            );
        }

        return null;
    };

    /**
     * Renders the close button based on configuration
     */
    const renderCloseButton = () => {
        if (!showCloseButton) return null;

        if (customCloseIcon) {
            return (
                <button
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 'auto'
                    }}
                    onClick={handleCloseButtonClick}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#f0f0f0';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                    }}
                >
                    {customCloseIcon}
                </button>
            );
        }

        // Default X icon
        return (
            <button
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#666',
                    lineHeight: '1',
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={handleCloseButtonClick}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#f0f0f0';
                    e.target.style.color = '#333';
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#666';
                }}
            >
                ×
            </button>
        );
    };

    // Don't render if modal is not open
    if (!isOpen) return null;

    const modalStyles = {
        position: 'fixed',
        left: `${dimensions.x}px`,
        top: `${dimensions.y}px`,
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: zIndex,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        ...style
    };

    const headerStyles = {
        padding: '12px 16px',
        borderBottom: '1px solid #eee',
        cursor: draggable && dragHandle === 'header' ? 'move' : 'default',
        backgroundColor: '#f8f9fa',
        borderTopLeftRadius: '7px',
        borderTopRightRadius: '7px',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...headerStyle
    };

    const bodyStyles = {
        flex: 1,
        padding: '16px',
        overflow: 'auto',
        ...bodyStyle
    };

    const resizeHandleStyles = {
        ...getResizeHandleStyles(),
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...resizeHandleStyle
    };

    return (
        <>
            {/* Backdrop */}
            {modal && backdrop && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: zIndex - 1
                    }}
                    onClick={handleBackdropClick}
                />
            )}

            {/* Modal */}
            <div
                ref={modalRef}
                id={id}
                className={className}
                style={modalStyles}
                onMouseDown={dragHandle === 'modal' ? handleDragStart : undefined}
                {...other}
            >
                {/* Header */}
                {title && (
                    <div
                        className={headerClassName}
                        style={headerStyles}
                        data-drag-handle="header"
                        onMouseDown={dragHandle === 'header' ? handleDragStart : undefined}
                    >
                        <div style={{ flex: 1 }}>
                            {typeof title === 'string' ? <h3 style={{ margin: 0 }}>{title}</h3> : title}
                        </div>
                        {renderCloseButton()}
                    </div>
                )}

                {/* Body */}
                <div
                    className={bodyClassName}
                    style={bodyStyles}
                >
                    {children}
                </div>

                {/* Resize Handle */}
                {resizable && (
                    <div
                        ref={resizeHandleRef}
                        className={resizeHandleClassName}
                        style={resizeHandleStyles}
                        data-resize-handle="true"
                        onMouseDown={handleResizeStart}
                    >
                        {renderResizeIcon()}
                    </div>
                )}
            </div>
        </>
    );
};

ResizableModal.defaultProps = {
    isOpen: true,  // Set to true for easier debugging
    width: 400,
    height: 300,
    minWidth: 200,
    maxWidth: 1200,
    minHeight: 150,
    maxHeight: 800,
    x: 100,
    y: 100,
    rightOffset: undefined,
    bottomOffset: undefined,
    resizeCorner: 'bottom-right',
    showResizeIcon: 'default',
    showCloseButton: false,
    draggable: true,
    dragHandle: 'header',
    dragBounds: null,
    resizable: true,
    modal: true,
    backdrop: true,
    backdropClosable: true,
    escapeClosable: true,
    zIndex: 1000,
    animation: true
};

ResizableModal.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The children of this component (modal content).
     */
    children: PropTypes.node,

    /**
     * Update the component's props (Dash internal).
     */
    setProps: PropTypes.func,

    /**
     * Whether the modal is currently open/visible.
     */
    isOpen: PropTypes.bool,

    /**
     * The modal title. Can be a string or React element.
     */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /**
     * Initial width of the modal in pixels.
     */
    width: PropTypes.number,

    /**
     * Initial height of the modal in pixels.
     */
    height: PropTypes.number,

    /**
     * Minimum width constraint in pixels.
     */
    minWidth: PropTypes.number,

    /**
     * Maximum width constraint in pixels.
     */
    maxWidth: PropTypes.number,

    /**
     * Minimum height constraint in pixels.
     */
    minHeight: PropTypes.number,

    /**
     * Maximum height constraint in pixels.
     */
    maxHeight: PropTypes.number,

    /**
     * Initial X position from the left edge in pixels.
     */
    x: PropTypes.number,

    /**
     * Initial Y position from the top edge in pixels.
     */
    y: PropTypes.number,

    /**
     * Distance from the right edge of the screen in pixels.
     * If specified, overrides x positioning.
     */
    rightOffset: PropTypes.number,

    /**
     * Distance from the bottom edge of the screen in pixels.
     * If specified, overrides y positioning.
     */
    bottomOffset: PropTypes.number,

    /**
     * Which corner to show the resize handle on.
     */
    resizeCorner: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),

    /**
     * Whether to show a resize icon and what type.
     */
    showResizeIcon: PropTypes.oneOf(['none', 'default']),

    /**
     * Custom resize icon element to display.
     */
    customResizeIcon: PropTypes.node,

    /**
     * Whether to show a close button in the header.
     */
    showCloseButton: PropTypes.bool,

    /**
     * Custom close icon element to display instead of default X.
     */
    customCloseIcon: PropTypes.node,

    /**
     * Callback fired when the modal is resized.
     */
    onResize: PropTypes.object,

    /**
     * Callback fired when the modal is moved.
     */
    onMove: PropTypes.object,

    /**
     * Callback fired when the modal is closed.
     */
    onClose: PropTypes.object,

    /**
     * Whether the modal can be dragged by its header.
     */
    draggable: PropTypes.bool,

    /**
     * Which area of the modal can be used for dragging.
     * - 'header': Only the header area (default)
     * - 'modal': Entire modal except resize handle
     * - 'custom': Only elements with data-drag-handle="custom"
     */
    dragHandle: PropTypes.oneOf(['header', 'modal', 'custom']),

    /**
     * Constraints for modal dragging.
     * - null: No constraints (default)
     * - 'viewport': Keep within browser viewport
     * - object: { top, right, bottom, left } pixel bounds
     */
    dragBounds: PropTypes.oneOfType([
        PropTypes.oneOf(['viewport']),
        PropTypes.shape({
            top: PropTypes.number,
            right: PropTypes.number,
            bottom: PropTypes.number,
            left: PropTypes.number
        })
    ]),

    /**
     * Whether the modal can be resized.
     */
    resizable: PropTypes.bool,

    /**
     * Whether to display as a modal (with backdrop).
     */
    modal: PropTypes.bool,

    /**
     * Whether to show a backdrop overlay.
     */
    backdrop: PropTypes.bool,

    /**
     * Whether clicking the backdrop closes the modal.
     */
    backdropClosable: PropTypes.bool,

    /**
     * Whether pressing escape closes the modal.
     */
    escapeClosable: PropTypes.bool,

    /**
     * CSS class name for the modal container.
     */
    className: PropTypes.string,

    /**
     * Inline styles for the modal container.
     */
    style: PropTypes.object,

    /**
     * CSS class name for the modal header.
     */
    headerClassName: PropTypes.string,

    /**
     * Inline styles for the modal header.
     */
    headerStyle: PropTypes.object,

    /**
     * CSS class name for the modal body.
     */
    bodyClassName: PropTypes.string,

    /**
     * Inline styles for the modal body.
     */
    bodyStyle: PropTypes.object,

    /**
     * CSS class name for the resize handle.
     */
    resizeHandleClassName: PropTypes.string,

    /**
     * Inline styles for the resize handle.
     */
    resizeHandleStyle: PropTypes.object,

    /**
     * Z-index for the modal (backdrop will be zIndex - 1).
     */
    zIndex: PropTypes.number,

    /**
     * Whether to enable open/close animations (future feature).
     */
    animation: PropTypes.bool
};

export default ResizableModal;