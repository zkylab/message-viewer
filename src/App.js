import logo from './logo.svg';
import './App.css';
import Simulator from './components/Simulator/Simulator'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
function App() {
  return (
    <div className="App">
      <div className="simWrapper">
        <Tabs className="tabs" defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="radnet" title="RADNET">
          <Simulator className="sim" sim_name={"RADNET"}></Simulator>
          </Tab>
          <Tab eventKey="accs" title="ACCS">
          <Simulator className="sim" sim_name={"ACCS"}></Simulator>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
