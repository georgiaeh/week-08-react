
const BasketItem = ( { item } ) => (
    <li className = "list-group-item"> {item.name}: £{item.price}  </li>
);

export default BasketItem;