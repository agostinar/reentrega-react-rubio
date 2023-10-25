import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetialContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from '../context/CartContext'
import CartContainer from './components/CartContainer/CartContainer';
import HomeComponent from './components/HomeComponent/HomeComponent.jsx';
import './App.css'


function Home() {
    return (
        <div>
            <HomeComponent />
        </div>
    )
}

function App() { 
    return (
        <Router>
            <CartContextProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/ItemListContainer' element={<ItemListContainer /> }/>
                    <Route path='/category/:cid' element={<ItemListContainer /> }/>
                    <Route path='/detalle/:pid' element={<ItemDetialContainer /> }/>
                    <Route path='/cart' element={<CartContainer /> }/>
                </Routes>
            </CartContextProvider>            
        </Router>
    )
}


export default App; Home