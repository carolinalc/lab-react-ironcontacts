import './App.css';
import contacts from "./contacts.json";
import {useState} from "react"

function App() {

  const [ contactssList, setcontactsList] = useState(contacts.slice(0, 6))

  //SACAR LA COPITA DEL COPON
 

  //añadir famoso random
  const handleContactRandom = () => {
   const randomIndex =  Math.floor(Math.random() * contacts.length)
   
   const randomFamoso = contacts[randomIndex]
    //REDUCIDISIMO
    setcontactsList([...contactssList, randomFamoso])

}

//ordenar por nombre
const handlePorNombre = () => {
  
  const copiaContacts = [...contactssList]

  copiaContacts.sort((elem1, elem2) => {
     return elem1.name.localeCompare(elem2.name)
  })

  setcontactsList(copiaContacts)
}

//ordenar por popularidad
const handlePopularity = () => {
  
  const copiaContacts2 = [...contactssList]

  copiaContacts2.sort((elem1, elem2) => {
    if(elem1.popularity >elem2.popularity){
     return -1 
    }else{
    return 1
    }
  })

  setcontactsList(copiaContacts2)
}

const handleDelete = (idBorrar) => {

  const arrayBorrar = contactssList.filter((eachFamoso) => {

      return eachFamoso.id !== idBorrar
  })


  setcontactsList(arrayBorrar)

}


  return (
    <>
    
<div className="App">
    <h1>IronContacts</h1>

    <button onClick={handleContactRandom}>Add Random Contact</button>
    <button onClick={handlePorNombre}>Ordenar por nombre</button>
    <button onClick={handlePopularity}>Ordenar por popularidad</button>
 
    <table className="table">
      <tr>
        <th>Picture</th><br />
        <th>Name</th><br />
        <th>Popularity</th> <br />
        <th>Won Oscar</th> <br />
        <th>Won Emmy</th>
        <th>Action</th>
      </tr> <br /> 
    {
      
      
    contactssList.map((elem) => {
      return(
    
        
      <tr>
        <td><img src={elem.pictureUrl} alt="foto" style={{width: "50px"}}/></td> <br />
        <td>{elem.name}</td> <br />
        <td>{elem.popularity.toFixed(2)}</td> <br />
        <td>{elem.wonOscar === true ? "✨🏆" : "😨"} </td> <br />
        <td>{elem.wonEmmy === true ? "🏆✨" : "😭"}</td>
        <div key={elem.id}>
        <td>
          <button onClick={ () => handleDelete(elem.id) }>Delete</button>
        </td>
        </div>
      </tr>
    
    
     
      )
     })

    }</table>

  
  </div>
  </>

  )  
}


export default App;
