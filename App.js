import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement('div', {}, [React.createElement('h1', {}, 'Heading 1 From Parcel'), React.createElement('h2', {}, 'Heading 2')]);

// Create a React root in the 'root' div element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the 'heading' component into the 'root' element
root.render(container);
