import logo from './logo.svg';
import './App.css';
import MainHeader from './Components/MainHeader';
import PizzaList from './Components/PizzaList';
import OrderList from './Components/OrderList';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Home />
    </div>
  );
}

export default App;
