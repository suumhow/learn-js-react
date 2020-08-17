
    class App extends React.Component {
        state = {  //state of component , properties
            name: 'tom',
            age: 35,
        }
        render() {
            return (
                <div className="app-content">
                    <h1> Hey </h1> 
                    <p>my name is {this.state.name} and i am {35}</p>   // render dynamic stuff 
                </div>

            )
        }
        
    }
    ReactDOM.render(<App />, document.getElementById('app'))
