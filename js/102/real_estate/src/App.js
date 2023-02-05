import './App.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>My Real Estate Company</h1>
      <Link to="/">Home</Link> |
      <NavLink to='/BuyAHome'>Buy A Home</NavLink> |
      <NavLink to='/SellAHome'>Sell A Home</NavLink> |
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
