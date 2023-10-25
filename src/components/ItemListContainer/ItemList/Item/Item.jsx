import { memo } from "react"
import { Link } from "react-router-dom"
import '../../ItemListContainer.css'

const Item = memo(({ product }) => {
    return (
        <>
                <div className="bg-product">
                    <img className="img-product" src={product.imageUrl} alt="imagen prenda" />
                    <div className="product-info">
                        <h2>{product.name}</h2>
                        <p className="prod-p">Stock: {product.stock}</p>
                        <p className="prod-price">${product.price}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={`/detalle/${product.id}`}>
                            <button className="btn-detail">Detalle</button>
                        </Link>
                    </div>
                </div>
        </>
    )
})

export default Item