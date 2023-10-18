import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../src/Components/Sidebar';
import Home from '../src/Components/Home';
import Product from '../src/Components/Product';
import Dashboard from '../src/Components/Dashboard';
import Income from '../src/Components/Income';
import Promote from '../src/Components/Promote';
import Help from '../src/Components/Help';
import Customer from '../src/Components/Customer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="grid grid-cols-4">
          <div className="col-span-1 fixed h-screen">
            <Sidebar />
          </div>
          <div className="col-span-5 pt-4 pr-8 overflow-y-auto" style={{ backgroundColor: "#F5F6F8", marginLeft: "250px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/income" element={<Income />} />
              <Route path='/customer' element={<Customer />}/>
              <Route path="/promote" element={<Promote />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
