import { createElement, useEffect, useReducer, useState } from 'react';
import './App.css';
import Cards from './components/NewsCard/NewsCard';
import axios from 'axios';
import techCrunch from './assets/techCrunch.webp';


  // const hotel = [
  //   {
  //     id:1,
  //     title:"Apartmani Vrbak",
  //     grade:"9.5",
  //     location:"Centar,Novi Pazar",
  //     description:"Hotel vrbak nalazi se u samom centru grada ,Najluksuzniji hotelmu gradu,sa ukupno 345 soba",
  //     img:"https://cf.bstatic.com/xdata/images/hotel/square600/412834299.webp?k=d2c78cc860c76f6e0f187088b74b371df5d0fc56bbd8107df442bc64403ef4b0&o="
  //   },
  //   {
  //     id:2,
  //     title:"Stan Na Dan",
  //     grade:"9.0",
  //     location:"Centar,Novi Pazar",
  //     description:"Stan Na Dan se nalazi u Novom Pazaru. Apartman sa 1 spavaćom sobom ima dnevni boravak sa TV-om ravnog ekrana, potpuno opremljenu kuhinju i 1 kupatilo.",
  //     img:"https://cf.bstatic.com/xdata/images/hotel/square600/314901326.webp?k=6a6b292d483c5d8671fb993e773bdaa44082c447799fbd668d92bd26e2e0975f&o="
  //   },
  //   {
  //     id:3,
  //     title:"Hotel Ras Pazariste",
  //     grade:"9.3",
  //     location:"Novi Pazar",
  //     description:"Hotel RAS Pazarište se nalazi u Novom Pazaru i nudi smeštaj sa 3 zvezdice sa baštom, restoranom i barom.",
  //     img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/508609188.jpg?k=09d9971f7ca2340af5b78717184ee5a9d98671ba438021588c8246b579a1527a&o=&hp=1"
  //   },
  //   {
  //     id:4,
  //     title:"Apartmani Rekic",
  //     grade:"8.9",
  //     location:"Novi Pazar",
  //     description:"Nedavno renoviran apartman, Apartmani Rekić-Dubai nudi smeštaj u Novom Pazaru. Ovaj apartman nudi besplatan privatni parking, lift i besplatan WiFi.",
  //     img:"https://cf.bstatic.com/xdata/images/hotel/square600/388779097.webp?k=4ed8f3e606f2764984a9f62b44bca90761cfa4f455d7a1e159cff8bf2eedf739&o="
  //   },
  //   {
  //     id:5,
  //     title:"Hotel IDEAL Deluxe",
  //     grade:"9.5",
  //     location:"Novi Pazar",
  //     description:"Hotel IDEAL Deluxe nalazi se u Novom Pazaru. Svaki smeštaj u ovom hotelu sa 4 zvezdice ima pogled na grad, a gosti mogu da uživaju u pristupu restoranu i baru.",
  //     img:"https://cf.bstatic.com/xdata/images/hotel/square600/574249423.webp?k=c301f12db15490def9b289f8006c970164140b009d5b04b4212e845c8421a295&o="
  //   },
  // ]

  

  // weather app
  // random broj
  // const [broj, setBroj] = useState(0);
  
  // function random() {
  //   const randomBroj = Math.floor(Math.random() * 100);
  //   setBroj(randomBroj);
  // }

  // // -27 +40
  // return (
  //   <div className='kontejner' style={{flexDirection: "column"}}>
  //     {/* {hotel.map((article, i) => (
  //       <Cards key = {i} article={article}/>
  //     ))} */}


  //     <h1>{broj}</h1>
  //       <button style={{
  //         padding: "5px 10px",
  //         border:"none",
  //         borderRadius: 12,
  //         outline: "none",
  //         backgroundColor: "lightblue",
  //         color: "black",
  //         fontSize: 24,
  //         cursor: "pointer"
  //       }}
  //       onClick={(random)}
  //       // onClick={() => setBroj((prev) => prev + 1)}
  //       >
  //       Povecaj na 5
  //       </button>

  //       <div style={{
  //         height: 300,
  //         width: 300,
  //         border: "2px solid black",
  //         backgroundColor: broj % 2 === 0 ? "beige" : "lightpink",

  //       }}/>
  //   </div>
  // );

  /*
  const [temp, setTemp] = useState(0);
  function generateTemp() {
    const randomTemp = Math.floor(Math.random() * (60 - (-40 + 1))) + (-40);
    setTemp(randomTemp);
  }

    
  return(
    
  <div className='prognoza' style={{
    background: temp < 0 
        ? "linear-gradient(to bottom, blue, lightblue, white)" : temp >= 0 && temp < 20 ? "linear-gradient(to top, green,  white)" : "linear-gradient(to right, red, orange, yellow)" 
}}>
    <div className='prozor' 
    style={{
    backgroundImage: temp < 0 
    ? "url(https://prodajaslika.org/wp-content/uploads/nc/images/stories/virtuemart/product/Marija-Kondic-Duh-zime-35x50-2.jpg)" 
    : temp >= 0 && temp < 20 ? "url(https://plus.unsplash.com/premium_photo-1667126444822-94fb21279436?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV0dW1ufGVufDB8fDB8fHww)" 
    : "url(https://i.pinimg.com/736x/c7/bc/06/c7bc06e47e9e1c703dd899cf3c8b9775.jpg)"}}>

    <div className='temperatura'>
    
      <p>{temp} °C</p>

      <p style={{position:"relative", bottom:"20px"}}>{temp < -4 ? "Bas je hladno" : temp >= 0 && temp < 20 ? "" : "Bas je toplo"}</p>

    </div>

    <button style={{background: temp < 0 ? "linear-gradient(to right, blue, lightblue, white" : temp >= 0 && temp < 20 ? "linear-gradient(to right, green, lime, white)" : "linear-gradient(to right, red, orange, yellow"}}
    onClick={(generateTemp)}
     className='button'>Promeni Temperaturu</button>
    </div>    
    
    


  </div>
  )
}
  */
  // const [user, setUser] = useState({
  //   ime: "Aldin",
  //   prezime: "Halilovic"
  // });

  // const promeniIMeIPrezime = () =>

  //   setUser((prev) => ({...prev, ime: "Maid"}))
    // setUser((prev) => {
    //   return{
    //     ...prev,
    //     ime: "Abdulaziz"
    //   }
    // })
    // console.log(user);

//     const [voce, setVoce] = useState([
//       "Jabuka",
//       "Banana",
//       "Kruska",
//       "Jagoda",
//     ]);


//     const dodajVoce = () => {
//       const novoVoce = prompt("Unesi voce");

//       if(!novoVoce) return;

//       if(voce.find((vocka) => vocka.toLowerCase() === novoVoce.toLowerCase())) {
//         alert("Vec postoji to voce");
//       } else {
//         setVoce((prev) => [...prev, novoVoce]);
//         console.log("Nema voce");
        
//       }
//     }


//   return(
//     <div className='container' style={{gap: 50, flexDirection: "column"}}>
//       {/* <div style={{display: "flex", gap: 10}}>
//         <h1>{user.ime}</h1>
//         <h1>{user.prezime}</h1>
//       </div>
//       <button onClick={promeniIMeIPrezime}>
//         Promeni ime
//       </button> */}
//       <ol>
//         {voce.map((vocka) => (
//           <li key={vocka}>{vocka}</li>
//         ))}
//       </ol>

//       <button style={{padding:"10px"}}
//       onClick={dodajVoce}
//       >Dodaj Voce</button>

//     </div>
//   )
// }


// Sign IN FORMA
// function App() {
  
//   const [usersList, setUsersList] = useState([]);
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     age: "Age",
//     phone: "",
//     gender: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const [fetched, setfetched] = useState([]);
//   useEffect(() => {
//         setLoading(true);
//     // fetch('https://dummyjson.com/users')
//     fetch("https://dummyjson.com/users?limit=10")
//     .then(res => res.json())
//     .then((data) => setfetched(data.users))
//     // .then((data) => setUsersList(data.users))
//       .finally(() => setLoading(false));    
//       }, []);
      
      
      
      

  
  
//   const handleInputChange = (event) => {
//     const { name, value} = event.target;
//     setUser((prev) => ({...prev, [name]: value}))
//   };



//   const handleClick = () => {
//       // setUser((prev), ({...prev, gender=""}))
//       setUser((prevUser) => ({ ...prevUser, gender: "" }));

//     if(user.firstName && user.lastName && user.email && user.age && user.phone && user.gender){
      
//       if((user.age) < 18){
//         alert("Morate imati preko 18 godina.");

//       }else{

//         setUsersList([...usersList, user]);
//         setUser({ firstName: "", lastName: "", email: "", age: "Age", phone: "", gender: "" });    
//       }
      
//       } else {
//         alert("Molimo Vas unesite sve podatke!!!")
//       }};
    
  

//     const ageOptions = [12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27];
    

  
//   return( <div className='container'>
//     <div className='forma'>
//       <h1>Sign up</h1>

//       <div>

//       <input 
//       type='text' 
//       name='firstName' 
//       value={user.firstName} 
//       onChange={handleInputChange}
//       placeholder='Ime'>
//       </input>

//       <input 
//       type='text' 
//       name='lastName' 
//       value={user.lastName} 
//       onChange={handleInputChange}  
//       placeholder='Prezime'>
//       </input>

//       </div>

//       <input 
//       type='email' 
//       name='email' 
//       value={user.email} 
//       onChange={handleInputChange} 
//       placeholder='E-mail'>
//       </input>

//       <input
//       type='number' 
//       name='phone' 
//       value={user.phone} 
//       onChange={handleInputChange} 
//       placeholder='Phone'>
//       </input>




//     <div style={{display:"flex",justifyContent:"center", alignItems:"center", gap:"20px"}}>
//     <p>Enter you Age:</p>
//     <select 
//     name="age" 
//     value={user.age} 
//     onChange={handleInputChange} 
//     className="select">
      
//       <option value="Age" disabled>
//       Age
//       </option> 
        

//         {ageOptions.map(age => (
//         <option key={age} value={age}>
//           {age}
//         </option>
//         ))}
     
//      </select>

//       </div>


      
      
//       <div className='gender'>
//         <p>Gender:</p>

//       <label>
//       <input 
//       type="radio" 
//       name='gender' 
//       value="Male" 
//       onChange={handleInputChange} 
//       checked={user.gender === "Male"}
//       style={{marginBottom:"5px"}}/>
//       Male</label>


//       <label>
//       <input 
//       type="radio" 
//       name='gender' 
//       value="Female" 
//       onChange={handleInputChange} 
//       checked={user.gender === "Female"}
//       style={{marginBottom:"5px"}}/>
//       Female</label>

//       </div>


//       <button onClick={handleClick} className='signup'>Sign up</button>
//     </div>


//     <div className="cards">
//       {/* <div className='profil'>
//         <h2>Profil</h2>
//         <p>Name: Ibrahim</p>
//         <p>Last Name: Papic</p>
//         <p>E-mail: Ibrahmim@gmail.com</p>
//         <p>Phone: 062 1150 679</p>
//         <p>Age: 18</p>
//         <p>Gender: Male</p>
//       </div> */}
//         {usersList.map((user) => (
//           <div key={user.id} className="profil">
//             <h2>Profil</h2>
//             <p>Name: {user.firstName}</p>
//             <p>Last Name: {user.lastName}</p>
//             <p>E-mail: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//             <p>Age: {user.age}</p>
//             <p>Gender: {user.gender}</p>
//           </div>
//         ))}
//           {loading ? (
//             <h1 className='loading'>Fetcha podatke...</h1>
//           ) : (
//           fetched.map((user) => (
//           <div key={user.id} className="profil">
//             <h2>Profil</h2>
//             <p>Name: {user.firstName} {user.id}</p>
//             <p>Last Name: {user.lastName}</p>
//             <p style={{lineHeight:"10px"}}>E-mail: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//             <p>Age: {user.age}</p>
//             <p>Gender: {user.gender}</p>
//           </div>
//         )))}

        

      
//       </div>
    

//    </div> 
//   );

// }
// export default App;

// API pozivi
// function App(){

//   const [broj, setBroj] = useState(13);
//   const [zadaci, setZadaci] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://dummyjson.com/todos")
//     // fetch("https://dummyjson.com/todos"${broj})
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => data.todos)
//     .then((todos) => setZadaci(todos))
//     .finally(() => setLoading(false));    
//   }, []);

//   console.log(zadaci, "Zadaci");
//   return (
//     <div 
//     className='container'
//     style={{fontSize: 32, justifyContent: "space-evenly"}}
//     >
//       <div>
//         {loading ? (
//           <h1>Fetcha podatke...</h1>
//         ) : (
//           zadaci.map((zadatak) => (
//             <h3>
//               {zadatak.id} {zadatak.todo}.
//             </h3>
//           ))
//         )}
//         <button>Promeni</button>
//       </div>



//     </div>
//   )
// }
  

//   const [broj, setBroj] = useState(0);
//   const [zadaci, setZadaci] = useState([]);
//   const [totalQuotes, setTotalQuotes] = useState(0);
//   const [quotesPerPage, setQuotesPerPage] = useState(10);
//   const [quotesPerPageNew, setQuotesPerPageNew] = useState(quotesPerPage);


// function App(){
//   useEffect(() => {
//     axios
//   .get("")
//   .then((data) => {
//   })

//   }, [])




// }



// Pagination
// function App(){

//   const [broj, setBroj] = useState(0);
//   const [zadaci, setZadaci] = useState({});
//   const [totalQuotes, setTotalQuotes] = useState(0);
//   const [loading, setLoading] = useState(false)
//   const [quotesPerPage, setQuotesPerPage] = useState(10);
//   const [quotesPerPageNew, setQuotesPerPageNew] = useState(1);

//   useEffect(() => {
//     console.log("pre");
//     axios
//       .get(`https://dummyjson.com/quotes/${quotesPerPageNew}`)
//       .then((data) => {
//         console.log(data.data);
//         setTotalQuotes(data.data.total);
//         setZadaci(data.data);
//       });
//     console.log("posle");
//     setLoading(true);
//     fetch("https://dummyjson.com/todos")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => data.todos)
//       .then((todos) => setZadaci(todos))
//       .finally(() => setLoading(false));
//     axios.get("https://dummyjson.com/todos").then((response) => {
//       console.log(response);
//       if (response.statusText === "Bad request") {
//         alert("Nesot nje kako treba");
//       }
//       console.log(response.data);
//       setZadaci(response.data.todos);
//     });
//   }, [broj, quotesPerPage]);

//   return (
//     <div
//       className="container"
//       style={{ fontSize: 32, justifyContent: "space-evenly" }}
//     >
//       <div>
//         <h1>
//           {broj + 1} / {Math.ceil(totalQuotes / quotesPerPage)}
//         </h1>
//       </div>
//       <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
//         <button onClick={() => setBroj((prev) => prev + 1)}>
//           Promeni stranicu
//         </button>
//         <input
//           type="number"
//           value={quotesPerPageNew}
//           onChange={(event) => setQuotesPerPageNew(event.target.value)}
//         />
//         <button onClick={() => setQuotesPerPage(quotesPerPageNew)}>
//           Promeni broj quots-a
//         </button>
//       </div>
//       <div>
        
//         {zadaci.id}
//         {zadaci.quote}
//       </div>
//       </div>


// )
// }
// export default App;




function App() {
  
  const [kartica, setKartica] = useState([]);

  useEffect(() => {
    axios
    .get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=83d9e0d52b76473b8da947f92aa34ea1")
    .then((response) => {
    setKartica(response.data.articles)
    console.log(response.data);
    
  })

  }, [])





  return (
    <div>
      <div className='header'>
        <h1 className='logo'>TechCrunch</h1>
        <ul className='list'>
          <li>Latest</li>
          <li>Startups</li>
          <li>Venture</li>
          <li>Apple</li>
          <li>Security</li>
          <li>AI</li>
          <li>Apps</li>
        </ul>
        <p className='signUp'>Sign up</p>
      </div>
      <div className='baner'>
        <img 
        src={techCrunch}
        style={{width:"100%"}}
        />
      </div>

        {kartica.length > 0 ? (
        kartica.map((kartica) => (
          <div className='kartica'>

            <img 
            src={kartica.urlToImage}
            style={{width: 250}}
            />

            <div className='text'>
            <h1>{kartica.author}</h1>
            <p style={{marginTop:10}}>{kartica.description}</p>
            <p className='date'>{kartica.publishedAt}</p>
            <p>{kartica.title}</p>
            <a className='link' href={kartica.url}>{kartica.url}</a>
            </div>
            
          </div>
        ))  
      ) : (
        <p className='loading'>Loading...</p>
      )}
    </div>
    //next.js




  )


}
export default App;




