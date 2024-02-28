import { useState } from "react";

function AccordionItem(props) {
    const [opened, setOpened] = useState(false);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={'heading' + props.accID}>
                <button className={"accordion-button " + (opened ? '' : 'collapsed')}
                    type="button"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={'collapse' + props.accID}
                    onClick={() => {
                        setOpened(!opened);
                    }}>
                {props.title}
                </button>
            </h2>
            <div id={'collapse' + props.accID}
                className={"accordion-collapse collapse " + (opened ? 'show' : 'collapse')}
                aria-labelledby={'heading' + props.accID}>
                <div className="accordion-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;