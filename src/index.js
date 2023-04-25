import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Car from './views/car.js';

// eslint-disable-next-line no-unused-vars
function render_html(){
    // Code is displayed in <div id="root"></div>
    const element = React.createElement("h1",{},"Hello World!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element);
}

// eslint-disable-next-line no-unused-vars
function render_html_JSX(){
    // Code is displayed in <div id="root"></div>
    let random_number1 = Math.floor(Math.random() * (20 - 1 + 1));
    let random_number2 = Math.floor(Math.random() * (20 - 1 + 1));

    let message = "equal to";
    if(random_number1 > random_number2)
        message = "greater than"
    else if(random_number1 < random_number2)
        message = "less than"

    const element = <h1 className="red">Number {random_number1} is {message} {random_number2} </h1>;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element);
}

function render_html_from_file(){
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(Car());
}

//render_html()
render_html_from_file()