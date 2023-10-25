import Item from "./Item/Item"
import '../ItemListContainer.css'

const ItemList = ({ products, selectedCategory }) => {
    return (
        <>
        
            {products.map((product) => {
                if (!selectedCategory || product.category === selectedCategory) {
                    return <Item key={product.id} product={product} />;
                }
                return null;
            })}
        
        </>
    );
};

export default ItemList