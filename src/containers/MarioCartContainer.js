import React,{useState,useEffect} from "react";
import DriverList from "../components/driverList";


const MarioCartContainer = ()=>{
    const [drivers,setDrivers] = useState([]);




    const updateDrivers = function (input){
        fetch(`https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name_contains?q=${input}`)
        .then(res => res.json())
        .then(drivers=>setDrivers(drivers))
        
        
    }

    const getDrivers = function (){
       fetch(`https://mario-kart-tour-api.herokuapp.com/api/v1/drivers`)
        .then(res => res.json())
        .then(drivers=>setDrivers(drivers))
    }

    const handleSubmit = (event) => {
        console.log(event.target.value)
        event.preventDefault();
        updateDrivers(event.target.value);
    } 


    useEffect(() =>{
    getDrivers();
},[])


return (
    <>
     <form  onSubmit={handleSubmit} name="input" id="input" >
        <label name="input"/>
           <input  onChange={handleSubmit} type="text" placeholder="search" name="input" id="input"/>
           <button type="submit">search</button>
       </form>
      <h1>Driver List</h1>
      <DriverList class="driverList" drivers = {drivers}></DriverList>
    </>
)

}




export default MarioCartContainer