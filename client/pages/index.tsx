import React, {useEffect, useState} from 'react'

function index() {

  const[message, setMessage] = useState("Loading");
  const[people, setPeople] = useState([]);
  const[table, setTable] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then((data) => {
      // message = Loading 
      //once data retrieved 
      // message = data.message
      setMessage(data.message);
      setPeople(data.people);
      setTable(data.table);
    });
  }, []);

  //Table shows errors however the code functions as intended. Errors shown because the values do not exist in current script
  return (
    <div>
      <div>{message}</div>
      {people.map((person, index) => (
          <div key={index}>
            {person}
          </div>
        ))}     

     <div>
     {table.map((item, index) =>(
          <div key = {index}>
            {item.name}
            {item.cost}
            {item.mana_symbols}
            {item.type}
          </div>
      ))};
     </div>

    </div>
  );
}

export default index