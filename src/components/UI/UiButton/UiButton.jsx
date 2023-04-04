import cn from 'classnames';
import PropTypes from 'prop-types';

import '../index.css';
import styles from './UiButton.module.css';  

const UiButton = ({
    text, disabled
}) => {
    return (
        <button
            className={cn(styles.button, styles.dark)}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

UiButton.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool
}

export default UiButton;