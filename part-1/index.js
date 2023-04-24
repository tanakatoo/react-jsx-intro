const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Me" />
            <Tweet username="Me" date="2023/03/01" message="What's up?" />
            <Tweet username="You" date="2023/03/02" message="Nothing?" />
            <Tweet username="Them" date="2023/03/03" message="We're here?" />
            <Person age={20} hobbies={['skating', 'baseball', 'swimming']} />
            <Person age={15} hobbies={['talking', 'gossiping', 'laughing']} />
            <Person age={59} hobbies={['playing lego', 'biking', 'speedskating']} />
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById("root"))