import { cloneElement, createContext, useContext, useState, Children } from "react";

const AccordionContext = createContext();

function Accordion(props) {
    const [accordionData, setAccordionData] = useState({activeItem : -1});

    // Add an index for each child
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