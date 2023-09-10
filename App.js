import React from "react";
import ReactDOM from "react-dom/client";

// JSX -> React.createElement -> Obj -> HTML(DOM)
// JSX Expression
// Fragment > Only one parent for component
// React Element
const header = <h1 key="h1">Namaste</h1>

// React Component (Normal js Func > React.createlment > Obj> HtmlDom)
const HeaderComponent = () => {
    return <h1 key="h1">Namaste Component</h1>
}

const HeaderComponent2 = () => (
    <>
      {header}
      {HeaderComponent()}
      <h1 key="h1">Namaste Component</h1>
    </>
  );

//   const HeaderComponent2 = () => {
//     return (
//       <>
//         {header}
//         {HeaderComponent()}
//         <h1 key="h1">Namaste Component</h1>
//       </>
//     );
//   }
  
  

// Create a React root in the 'root' div element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the 'header' component into the 'root' element
// root.render(container);
// Rendering header component u can call using normal <hc/> or hc() as its a normal func
root.render(<HeaderComponent2/>);
