
const BasketItem = ( { item } ) => {
    return <li className = "list-group-item"> {item.name}: £{item.price}  </li>
}

export default BasketItem;