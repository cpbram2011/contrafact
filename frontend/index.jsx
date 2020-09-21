import React from 'react'; 
import ReactDOM from 'react-dom'; 

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const App = () => (
        <div>
            <h1>noice</h1>
        </div>
    )
    ReactDOM.render(<App />, root)
})