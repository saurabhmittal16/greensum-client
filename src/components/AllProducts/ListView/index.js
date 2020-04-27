import ProdListViewCard from './ProdListView';

const ProductListView = (props) => {
    // data -> array of objects with data {image, name, price, text}
    const data = props.data;
    
    return data.map(
        item => <ProdListViewCard image = {item.image}  name = {item.name}  price = {item.price}  text = {item.text} />
    );
}

export default ProductListView;
