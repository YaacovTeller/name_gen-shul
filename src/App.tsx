import React, { useEffect } from 'react';
// import logo from './logo.svg';
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
        <div style={{width: '80%'}}>
          Sometimes, something about a local shul will be bothering you, but you can't quite put your finger on what it is.
          Chances are, it's because it doesn't have a handy acronym to call it by.
          With this shul name generator, you can eliminate your discomfort by easily assigning one with a click, 
          using a clever blend of interesting figures from Tanach with current autocracies and despotic governments.
        </div>
          <ShulGen />
      </header>
    </div>
  );
}
//
export default App;

function ShulGen(){
  const [Name, setFigure] = useState("");
  const [Country, setCountry] = useState("");
  const [Acronym, setAcronym] = useState("");

  useEffect(() => {
    calcAcronym();
  }, [Name,Country]);

  function SetNamePart(obj: infoList, choiceFunc: React.Dispatch<React.SetStateAction<string>>){
    let num = RandomIndex(obj.list.length)
      choiceFunc(obj.list[num] )
  }

  function SetWholeName(){
    SetNamePart(figures, setFigure)
    SetNamePart(countries, setCountry)
  }
  function calcAcronym(){
    let str:string = "";
    str += calcPartAcronym(Name);
    str += "M";
    str += calcPartAcronym(Country);
    setAcronym(str);
  }
  function calcPartAcronym(str:string){
    let arr = str.split(" ");
    str = arr.length > 1 ? multipleWords(arr) : getFirstLetters(arr[0]);
    return str
  }
  function getFirstLetters(str:string){
    return str.slice(0, 2)
  }
  function multipleWords(arr: Array<string>){
    let str:string = "";
    arr.forEach(el => {
      if (["of","and"].includes(el)) return
      str += getFirstLetters(el)
    });
    return str;
  }

  return (
    <>
      <button className='btn btn-lg btn-primary' onClick={() => SetWholeName()}>GENERATE</button>
      <div>
      {Name.length > 0 &&
        <button className='btn btn-sm btn-primary' onClick={() => SetNamePart(figures, setFigure)}>reroll name</button>
      }
      {Country.length > 0 &&
        <button className='btn btn-sm btn-primary' onClick={() => SetNamePart(countries, setCountry)}>reroll country</button>
      }
      </div>

      <br />
      {Name.length > 0 &&
        <>
          <div className="badge bg-secondary">
            {Name}
            &nbsp;
            {"minyan"}
            &nbsp;
            {Country}
          </div>
          <br/>
          <div className="badge bg-secondary">
            {Acronym}
          </div>
        </>
      }
    </>
  )
}

function RandomIndex(length: number) {
  return Math.floor(Math.random() * length);  
}
// function GenerateName(){
//   SetNamePart(figures, setName);
// }
// function GenerateCountry(){
//   SetNamePart(countries, setCountry);
// }


// function GetFromList({obj}: {obj:infoList}) {
//   const [choice, setChoice] = useState("");
//   SetNamePart(obj, setChoice);

//   return (
//     <>
//       {choice}
//     </>
//   )
// }




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