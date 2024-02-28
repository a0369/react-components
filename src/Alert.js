function Alert({children, dismissable = true, onClose}) {
    return (
        <div className="alert alert-primary alert-dismissible fade show">
            {children}
            {(dismissable) &&
            <button type="button"
                className="btn-close"
                aria-label="Close"
                /*onClick={() => {
                    //CloseAlert()
                    onClose()
                }}*/
                onClick={onClose}></button>}
        </div>
    )
}

export default Alert;