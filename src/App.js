import './App.css';
import {Switch,Route} from 'react-router-dom';

// Components
import TopNavbar from './components/TopNavbar';
import Store from './components/Store';
import Details from './variables/Details';
import Default from './variables/Default';
import Bag from './cashpoint/Bag';
import ProductModal from './modal/ProductModal';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Switch>
        <Route exact path="/" component={Store} />
        <Route path="/details" component={Details} />
        <Route path="/bag" component={Bag} />
        <Route component={Default} />
      </Switch>
      <ProductModal />
    </div>
  );
}

export default App;
