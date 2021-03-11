import './App.css';
import {Route,Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'


const HatsPage=()=><div>HatsPage</div>

const App =()=> {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
