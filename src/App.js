import { RecoilRoot } from 'recoil';
import './App.css';
import MainHeader from './Components/MainHeader';
import Home from './Pages/Home';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <MainHeader />
        <Home />
      </div>
    </RecoilRoot>
  );
}

export default App;
