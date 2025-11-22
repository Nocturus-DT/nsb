import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { user, logout, cart } = useApp();

  return (
    <nav className="navbar">
      <div className="logo"><i className="fas fa-cloud"></i> NS Bridge Host</div>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({isActive})=>isActive?"active":""}>Início</NavLink></li>
        <li><NavLink to="/products">Produtos</NavLink></li>
        <li><NavLink to="/tutorial">Tutorial</NavLink></li>
        {user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
        
        <li>
          <div className="cart-icon" onClick={() => document.getElementById('cartModal').showModal()}>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-badge" style={{display: cart.length>0?'flex':'none'}}>
              {cart.length}
            </span>
          </div>
        </li>

        {!user ? (
          <li><button className="btn btn-primary" onClick={() => document.getElementById('loginModal').showModal()}>Login</button></li>
        ) : (
          <>
            <li><span style={{marginRight:'1rem'}}>Olá, {user.name || user.email}</span></li>
            <li><button className="btn btn-outline" onClick={logout}>Sair</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}