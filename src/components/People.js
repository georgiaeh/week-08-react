let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul className="list-group">
        { names.map((value, index) => (
            <li className="list-group-item" key={index}> { value }</li>
        ))}
    </ul>
);

export default People;