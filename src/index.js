import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line no-unused-vars
function render_html(){
    // Code is displayed in <div id="root"></div>
    const element = React.createElement("h1",{},"Hello World!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element);
}

function render_html_JSX(){
    // Code is displayed in <div id="root"></div>
    const element = <h1>Hello World, 2+2={2+3}</h1>;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element);
}

//render_html()
render_html_JSX()