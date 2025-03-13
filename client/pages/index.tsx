import React, {useEffect, useState} from 'react'

function index() {

  const[table, setTable] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then((data) => {
      // message = Loading 
      //once data retrieved 
      // message = data.message
      setTable(data.table);
    });
  }, []);

  //Table shows errors however the code functions as intended. Errors shown because the values do not exist in current script
  return (
    <div>
       {/* <div>{message}</div>
      {people.map((person, index) => (
          <div key={index}>
            {person}
          </div>
        ))}      */}

     <div> 
      <h4>Magic the Gathering</h4>
      <table border="1">
        <thead>
          <tr  style={{ padding: "10px", border: "1.5px solid #ddd", textAlign: "left" }}>
            <th>Name</th>
            <th>Mana_Symbols</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item, index) =>(
            <tr key = {index}>
             {Object.values(item).map((value,idx)=>(
              <td key={idx} style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>{value}</td>
             ))}
            </tr>
          ))}      
        </tbody>
      </table>
     </div>
    </div>
  );
}

export default index