import './App.css';
import Alert from './Alert';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
  const [alertVisible, setAlertVisible] = useState(true);

  const closeAlert = () => {
    setAlertVisible(false);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>React Bootstrap Components</h1>
        <h2>Accordion</h2>

        <Accordion accID="accordionEx">
          <AccordionItem title="Item 1" accID="One">
            <p>This is some content </p>
            <p>This is some more content</p>
          </AccordionItem>
          <AccordionItem title="Item 2" accID="Two">
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </AccordionItem>
          <AccordionItem title="Item 3" accID="Three">
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
          </AccordionItem>
        </Accordion>

        <h2 class="mt-5">Alert</h2>

        { alertVisible &&
        <Alert onClose={() => closeAlert()}>This is an alert</Alert>}
      </div>

      
    </div>
  );
}

export default App;
