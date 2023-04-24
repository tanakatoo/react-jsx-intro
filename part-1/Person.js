const Person = (props) => {
    return (
        <div>
            <p>Learn some information about this person.</p>
            {props.age > 18 ? <h3>Go vote!</h3> : <h3>You must be 18</h3>}
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}