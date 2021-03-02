import BasketItem from './BasketItem';


const Basket = ( {items} ) => (
    items ? 
        (<ul className="list-group">
            { items.map( (item, index) => (
                <BasketItem item = {item} />
            ))}
        </ul>) : 
        <p> Basket Empty</p>
);

export default Basket;