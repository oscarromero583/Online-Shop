import './App.css';
import Header from "./Header"
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
    return (
        <div className="App">

            <Router>
                <Header />
                <Routes>
                    <Route path="/checkout" element={<Checkout/>}>

                    </Route>

                    <Route path="/" element={<Home/>}>

                    </Route>
                </Routes>
            </Router>



        </div>
    );
}

export default App;
