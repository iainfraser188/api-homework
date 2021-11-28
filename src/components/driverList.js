import React from "react";

const DriverList =({drivers})=>{
    const driverItem = drivers.map((driver,index)=>{
        return <li key={index} class="item">
            <p>Name:{driver.name}</p>
            <details>
            <p>Special Skill:{driver.special_skill}</p>
            <p>Debut Tour:{driver.debut_tour}</p>
            </details>
            
            
               </li>
                
    })

    return (
             <ul>
              
                {driverItem} 
             
            </ul>  
    )  
           
}

export default DriverList 

