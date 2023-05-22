import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Routes,Link,Switch} from 'react-router-dom'
import abi from "./contract/upload.json";
import { useState,useEffect } from 'react';
import { ethers } from 'ethers';
import Buy from './components/Buy';
// import Memos from './components/Memos';
import Nav from './components/Navbar';
import Home from './screens/Home';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x9206C87EEbd21df7C21AeB6333603EF2Ca00606A";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
        <Routes>
          <Route exact path='/login'  element={<LoginScreen state={state}/>} />
          <Route exact path='/register'  element={<RegisterScreen state={state}/>}/>
          <Route exact path='/'  element={<Home/>}/>
          <Route exact path='/cart'  element={<CartScreen state={state}/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
