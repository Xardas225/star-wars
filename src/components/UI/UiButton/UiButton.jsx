const UiButton = ({
    text, disabled
}) => {
    return (
        <button
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default UiButton;