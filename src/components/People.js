

const People = ( {names} ) => (
    names ? (<ul className="list-group">
        { names.map( (value, index) => (
            <li className="list-group-item" key={ index }>{ value }</li>
        ))}
    </ul>) : 
   <p>Nothing to see here</p>
);

export default People;