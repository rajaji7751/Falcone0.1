import React, { useState } from 'react'

const Signup = () => {
    const [name,setName] =useState("Rajesh");
    console.log(name);
    const [Age,setAge] =useState("22");
    console.log(Age);
    const [District,setDistrict]=useState("Sundergarh")
    console.log(District);
    const [Block,setBlock]=useState("Kishornagar");
    console.log(Block);
    const [Pincode,setPincode]=useState("759126");
    console.log(Pincode);
    const [colony,setcolony]=useState("Jaganatha");
    console.log(colony);
    const[Sector,setSector]=useState("Sector17");
    console.log(Sector);
    const[HouseNo,setHouseNo]=useState("HouseNo135");
    console.log(HouseNo);
    const[State,setState]=useState("Odisha");
    console.log(State);
    const[Country,setContry]=useState("India");
    console.log(Country);
    const[Continent,setContinet]=useState("Asia");
    console.log(Continent);
    const[Village,setVillage]=useState("Angul");
    console.log(Village);
    const[Religion,setReligion]=useState("Hindu");
    console.log(Religion);
    const[Nationalbird,setNetionalbird]=useState("Peacock")
    console.log(Nationalbird);
    
  return (
    <div>
      <form><object data="" type=""></object>
        <label>User name</label>
        <br />
        <input type="text"placeholder="Add User name" />
        <label>Useremail</label>
        <br />
        <input type="text"placeholder="Add Useremail" />
        <label>Userpassword</label>
        <br />
        <input type="text"placeholder="Add Userpassword" />
        <button>Signup</button>

        </form>  
        Signup</div>
  )
}

export default Signup