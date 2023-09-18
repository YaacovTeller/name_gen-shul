import React, { useEffect } from 'react';
import logo from './logo.svg';
import data from './countries_figures.json'
import './App.css';
import { useState } from 'react';

type infoList = {
  title: string;
  list: string[];
}    

const countries: infoList = {
  title: "COUNTRIES",
  list: data.countries
};
const figures: infoList = {
  title: "FIGURES",
  list: data.figures
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <ShulGen />

      </header>
    </div>
  );
}

export default App;

function ShulGen(){

  return (
    <>
      <button className='btn btn-lg btn-primary' onClick={() => ShulGen}>GENERATE</button>
      <button className='btn btn-sm btn-primary' onClick={() => SetNamePart}>NAME</button>
      <button className='btn btn-sm btn-primary' onClick={() => SetNamePart}>COUNTRY</button>

      <br />
      <div className="badge bg-secondary">
        <GetFromList obj={figures} />&nbsp;
        Minyan &nbsp;
        <GetFromList obj={countries} />
      </div>

    </>
  )
}

function RandomIndex(length: number) {
  return Math.floor(Math.random() * length);  
}
// function GenerateName(){
//   SetNamePart(figures, setChoice);
// }
// function GenerateCountry(){
//   SetNamePart(countries, setChoice);
// }

function SetNamePart(obj: infoList, choiceFunc: Function){
  var num = RandomIndex(obj.list.length)
  useEffect(()=>{
    choiceFunc(obj.list[num])
	}, [])
}

function GetFromList({obj}: {obj:infoList}) {
  const [choice, setChoice] = useState("");

  SetNamePart(obj, setChoice);

  return (
    <>
      {choice}
    </>
  )
}

// function ListAll(){
//   return(
//     <>
//     <ListItems obj={countries}/>
//     <ListItems obj={figures}/>
//     </>
//   )
// }

// function ListItems({obj}: {obj:infoList}) {
//   const UnorderedList = obj.list.map(x =>
//     <li>
//       {x}
//     </li>
//   );
  
//   return (
//     <>
//     <h1>{obj.title}</h1>
//     <ul>{UnorderedList}</ul>
//     </>
//   );
// }