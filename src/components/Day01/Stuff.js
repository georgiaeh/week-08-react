import Header from "./Header";
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Basket from './Basket';

let listOfNames = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];
let items = [
    { name: "Coffee", price: 2.10 },
    { name: "Bananas", price: 3.50 },
    { name: "Milk", price: 250.65 },
    { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];



const Stuff = ( {square} ) => (
    <>
        <Header>Hello there! </Header>
        
        <br></br>
        <h1>Paragraph</h1>
        <Paragraph></Paragraph>
        
        <br></br>
        <h1>Square</h1>
        { square ? <Square/> : null}
        
        <br></br>
        <h1>People</h1>
        <People names = {listOfNames}/>
        
        <br></br>
        <h1>Basket Items</h1>
        <Basket items= {items} />
    </>
);

Stuff.defaultProps = {
    square: true
}

export default Stuff;