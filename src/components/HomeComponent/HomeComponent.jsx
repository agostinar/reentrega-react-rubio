import homeImg from '../../assets/img/electrodomesticos-home-img.jpeg'
import { Link } from 'react-router-dom';
import './Home.css';

const HomeComponent = () => {
    return (
            <section className="home">
                <div className="home-overlay"></div>
                <img src={homeImg} alt="Home Image" className="home-image" />
                <div className="home-content">
                    <h1 className="home-tagline">Los mejores electrodomesticos</h1>
                    <p className="home-subtitle">Maxima calidad</p>
                    <Link to="/ItemListContainer">
                    <button className="home-button">Explorar Productos</button>
                    </Link>
                </div>
            </section>
    );
}

export default HomeComponent;