import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading";
import { getDocs, getFirestore, collection, where, query } from "firebase/firestore";


const ItemListContainer = () => { 
    const [products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { cid } = useParams()
    const [selectedCategory, setSelectedCategory] = useState(null);


    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

        useEffect(() => {
            const db = getFirestore();
            const queryCollection = collection(db, 'products');
            let queryFilter = queryCollection;
        
            if (cid) {
                queryFilter = query(queryCollection, where('category', '==', cid));
                setSelectedCategory(cid);
            } else {
                setSelectedCategory(null);
            }
        
            getDocs(queryFilter)
                .then((resp) =>
                    setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
                )
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }, [cid]);


    return (
            <div className="div-products-ilc">
            { loading ? (
                    <Loading />
            ):( 
                <ItemList products={filteredProducts} selectedCategory={selectedCategory} />
                ) 
            }
            </div>
    )
}

export default ItemListContainer