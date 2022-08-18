import React from 'react'
import img from "../assets/lo.png"


const cart = (props) => {
    // const getDAta=(dataa)=>{
    //     console.log("hello",dataa)
    // }
    return (
        <div>
            <div>{props.obj.name}</div>
            <img src={img}></img>
            {/* <First data={getDAta} /> */}
        </div>

    )
}
export default cart


// const First = (param) => {
//   return (
    
//     <div>first
        
//         <button onClick={()=>param.getDAta=({name:"ijas"})}>clickMe</button>
//     </div>   
//   )
// }


