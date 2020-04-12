import ProdListViewCard from './ProdListView';
const ProductListView = (props) => (
    <ProdListViewCard 
        image = {props.image}  name = {props.name}  price = {props.price}  text = {props.text}
        />
);
export default ProductListView;
