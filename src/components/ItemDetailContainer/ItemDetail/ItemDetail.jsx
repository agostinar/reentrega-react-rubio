import { useState } from "react";
import { useCartContext } from "../../../../context/CartContext";
import ItemCount from "./counter/ItemCount";
import { Link } from "react-router-dom";
import { Loading } from "../../Loading/Loading";
import '../ItemDetailContainer.css';

const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        addProduct({ ...product, quantity });
        setIsCounter(false);
    };

    return (
        <>
        <Loading />
            <div className="container-detail">
                <h1>Detalle del Producto</h1>
                <div className="div-flex">
                    <img className="product-img" src={product.imageUrl} alt="imagen" />
                    <div className="div-info">
                        <h2><strong>{product.name}</strong></h2>
                        <p className="prod-p-detail">Stock: {product.stock}</p>
                        <p className="prod-price">${product.price}</p>
                    </div>
                    <div className="counter-div">
                        {isCounter ?
                            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                            :
                            <>
                                <div className="counter-btn">
                                    <Link to='/Cart'>
                                        <button className="btn-detail-cart">Ir al Carrito</button>
                                    </Link>
                                    <Link to='/ItemListContainer'>
                                        <button className="btn-detail-cart">Volver a Productos</button>
                                    </Link>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;