import './App.css';
import Header from './components/Hader';
import Section from './components/Section';
import Sectiontew from './components/Sectiontew';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Header />
          </Route>
          <Route path="/ iPat">
            <Header />
          </Route>
          <Route path='/'>
            <Header />
          </Route>
        </Switch>
        <Section />
         <Sectiontew />
       <Section3 />
       <Section4/>
       <Section5/>
      </div>
    </Router>
  );
}


export default App;

