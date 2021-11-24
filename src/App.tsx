import React from 'react';
import './App.css';

type Props = {
    foo: string;
};

const App: React.FC<Props> = () => {
    // const a = { name: '112' };
    // console.log(props.foo);

    return (
        <div className="app">
            <header className="app-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
