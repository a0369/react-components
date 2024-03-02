import { useAccordionContext } from './Accordion';

function AccordionItem(props) {
    const {accordionData, setAccordionData} = useAccordionContext();

    /*
    *   Check if current index is set the children index
    *   @returns boolean
    */
    const chkOpened = () => {
        return (props.index === accordionData.activeItem);
    };

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={'heading' + props.accID}>
                <button className={"accordion-button " + (chkOpened() ? '' : 'collapsed')}
                    type="button"
                    aria-expanded={chkOpened() ? 'true' : 'false'}
                    aria-controls={'collapse' + props.accID}
                    onClick={() => {
                        if (chkOpened()) {
                            setAccordionData({...accordionData, activeItem : -1});
                        } else {
                            setAccordionData({...accordionData, activeItem : props.index});
                        }
                        
                    }}>
                {props.title}
                </button>
            </h2>
            <div id={'collapse' + props.accID}
                className={"accordion-collapse collapse " + (chkOpened() ? 'show' : 'collapse')}
                aria-labelledby={'heading' + props.accID}>
                <div className="accordion-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;