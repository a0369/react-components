function Accordion(props) {

    return (
        <div className="accordion" id={props.accID}>
            {props.children}
        </div>
    )
}

export default Accordion;