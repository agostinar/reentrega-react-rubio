import { CartWidget } from './CartWidget/CartWidget';
import { useCartContext } from '../../../context/CartContext';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = ({ children }) => {
    const { totalQuantity } = useCartContext();
    return (
        <div className='header'>
            <h1 className="h1-sf">ElectroStore</h1>
            <div className='navbar active'>
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/category/heladeras">Heladeras</NavLink>
                <NavLink className='nav-link' to="/category/lavarropas">Lavarropas</NavLink>
                <NavLink className='nav-link' to="/ItemListContainer">Productos</NavLink>
            </div>
            <div className="search-bar">
                <i className='bx bx-search'></i>
                <input type="text" placeholder="Buscar productos..." />
            </div>
            <div className='cart-num'>
                <Link to='/cart'>
                    {totalQuantity()} <CartWidget />
                </Link>
            </div>
            {children}
        </div>
    );
};

export default NavBar;
