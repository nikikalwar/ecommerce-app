
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import {Switch,Route} from 'react-router-dom'
import Product from './components/Product';
import Modal from './components/Modal';


function App() {
  return (
   <>
   <NavBar></NavBar>
 <Switch>
   <Route exact path="/" component={ProductList}></Route>
   <Route path="/Modal" component={Modal}></Route>
   <Route path="/Product" component={ProductList}></Route>
   <Route path="/details" component={Details}></Route>
   <Route path="/cart" component={Cart}></Route>
   <Route component={Default}></Route>
 </Switch>
  
   </>
  );
}

export default App;
