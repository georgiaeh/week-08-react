import { useState } from "react";
import { ListGroup, Button, Form} from "react-bootstrap";

const ListHooks = () => {

    const [listItems, setListItems] = useState([]);

    const [value, setValue] = useState("");

    const handleChange = (e) => setValue(e.currentTarget.value);

    const addToList = (e) => {
        e.preventDefault();
        setListItems([...listItems, value])
        setValue("");
    };

    const clear = (e) => {
        e.preventDefault();
        setListItems([])
        setValue("");

    }

    return (
        <>
            <ListGroup className="mt-4">
                {
                    listItems.map( (item, index) => {
                        return <ListGroup.Item key={index} >{item}</ListGroup.Item>
                    })
                }
            </ListGroup>
            <Form onSubmit={addToList}>
                <Form.Control className="mt-4" type = "text" onChange={handleChange} value={value} />
                <Button variant="primary" className="mt-4" onClick={addToList}>Add</Button>
                <Button variant="warning" className="mt-4" onClick={clear}>Clear</Button>
            </Form>
            
        </>
    )

}

export default ListHooks;