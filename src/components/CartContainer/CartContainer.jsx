import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from "../../../context/CartContext"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Loading } from '../Loading/Loading' 

import './CartContainer.css'


const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const isFormValid = () => {
        return dataForm.name.trim() !== '' && dataForm.phone.trim() !== '' && dataForm.email.trim() !== '';
    };

    const [id, setId] = useState('')
    const { cartList, deleteCart, reduceQuantity, totalPrice } = useCartContext()

    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    const handleAddOrder = async (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.items = cartList.map(prod => {
            return { id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity }
        })
        order.total = totalPrice()

        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order)
            .then(({ id }) => {
            setId(id);
            setPurchaseCompleted(true);
        })
            .catch(err => console.log(err))
            .finally(() => {
                setDataForm({
                    name: '',
                    phone: '',
                    email: ''
                })
                deleteCart()
            })
    }

    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <>
            <Loading />
            <div className='cart-container'>
                {purchaseCompleted ? (
                    <h3 className='purchase-generated'>Se genero la orden de compra {id}</h3>
                    
                ) : (
                    <>
                        {cartList.length > 0 ? (
                            <>
                                <div className='cart-flex'>
                                    {cartList.map(prod => (
                                        <div className='div-product' key={prod.id}>
                                            <h2>{prod.name}</h2>
                                            <img src={prod.imageUrl} className="prod-img-cart" />
                                            <div className='prod-cart-info'>
                                                ${prod.price} - Cantidad: {prod.quantity}
                                                <button className="btn-delete" onClick={() => reduceQuantity(prod.id)}> X </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='cart-price-empty'>
                                    <h3>Precio Total: <strong>${totalPrice()} </strong></h3>
                                    <button className='btn-empty-cart' onClick={deleteCart}>Vaciar Carrito</button>
                                </div>

                                <form onSubmit={handleAddOrder}>
                                    <div className='form-container'>
                                        <h2> Nombre y Apellido </h2>
                                        <input className='form-cart'
                                            type='text'
                                            name='name'
                                            placeholder='Ingresa nombre completo'
                                            value={dataForm.name}
                                            onChange={handleOnChange}
                                        />
                                        <h2> Numero de Telefono </h2>
                                        <input className='form-cart'
                                            type='number'
                                            name='phone'
                                            placeholder='Ingresa Numero'
                                            value={dataForm.phone}
                                            onChange={handleOnChange}
                                        />
                                        <h2> Email </h2>
                                        <input className='form-cart'
                                            type='email'
                                            name='email'
                                            placeholder='Ingresa Email'
                                            value={dataForm.email}
                                            onChange={handleOnChange}
                                        />
                                        <div className='btn-container'>
                                            <button
                                                type="submit" 
                                                disabled={!isFormValid()}
                                                className='btn-finish-order'
                                            >
                                                Terminar compra
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className='no-products-in-cart'>
                                <h2>No hay productos en el carrito</h2>
                                <Link to='/ItemListContainer'>
                                    <button className="btn-detail-cart">Volver a Productos</button>
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default CartContainer