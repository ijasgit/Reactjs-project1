import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from '@testing-library/react';
import Main from './Main';



// const name="reactjs"
// // const el = React.createElement("div", { className: "samples" }, React.createElement("h1", {}, "hello"), React.createElement("h2", {}, "world"))
// const el = <h1 className='style'>hello world..{3+3}{name}</h1>
// class Third extends React.Component{
//     render(){
//         return (
//             <p>hello</p>
//         )
//     }
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Third />)
root.render(<Main/>)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


