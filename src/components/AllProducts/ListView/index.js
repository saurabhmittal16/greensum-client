import ProdListViewCard from './ProdListView';

const ProductListView = (props) => {
    // data -> array of objects with data {image, name, price, text}
    const data = props.data;

    return (
        <div
            style={{ marginBottom: '5rem' }}
        >
            {
                data.map(
                    item => <ProdListViewCard image={item.image} name={item.name} price={item.price} text={item.text} />
                )
            }
        </div>
    )
}

export default ProductListView;
