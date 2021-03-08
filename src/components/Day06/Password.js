import { Form } from 'react-bootstrap';

const Password = (props) => {
    let inputStyle = {
            border : props.valid ? "2px solid black" :  "2px solid red"
        }
        
    return (
        <>
            <Form.Group>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control 
                    onChange = {props.onChange} 
                    style = { inputStyle } 
                    value = {props.value}
                />
            </Form.Group>
        </>
        );
}

export default Password;