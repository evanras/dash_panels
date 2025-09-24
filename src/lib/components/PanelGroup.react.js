import PropTypes from 'prop-types';
import { PanelGroup as ReactPanelGroup } from 'react-resizable-panels';

const PanelGroup = (props) => {
    const { children, setProps, ...other } = props;

    return (
        <ReactPanelGroup {...other}>
            {children}
        </ReactPanelGroup>
    );
}

PanelGroup.defaultProps = {};

PanelGroup.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The children of this component.
     */
    children: PropTypes.node,

    /**
     * Updates the component's props.
     */
    setProps: PropTypes.func,

    /**
     * Unique id used to auto-save group arragement via local storage.
    */
    autoSaveId: PropTypes.string,

    /**
     * The class name for the panel group for styling
    */
    className: PropTypes.string,

    /**
     * Direction of the panel group - horizontal or vertical
    */
    direction: PropTypes.string,

    /**
     * Additonal style for the panel group
    */
    style: PropTypes.object,
};

export default PanelGroup;