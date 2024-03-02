import { cloneElement, createContext, useContext, useState, Children } from "react";

const AccordionContext = createContext();

function Accordion(props) {
    const [accordionData, setAccordionData] = useState({activeItem : -1});
    //const [accordionIndex, setAccordionIndex] = useState(0);

    //console.log(props.children)

    /*props.children.map((child, index) => {
        child.props.key = index;
    });*/

    const children = Children.map(props.children, (child, index) => {
        return cloneElement(child, {index});
    });

    return (
        <AccordionContext.Provider value={{accordionData, setAccordionData}}>
            <div className="accordion" id={props.accID}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

export default Accordion;

export function useAccordionContext() {
    return useContext(AccordionContext);
}