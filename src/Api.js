import React, { Component } from 'react';

class App extends Component {
    state = {
        data: []
    };
    
    // Code runs after the component is added to the DOM
    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
        
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }
    
    render() {
        const { data } = this.state;
        
        const result = data.map((entry, index) => {
            return <li key={entry}>{entry}</li>;
        });
        
        return <ul>{result}</ul>
    }
}

export default App;
