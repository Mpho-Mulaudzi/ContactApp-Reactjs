import React, {useState, useEffect} from  "react"; //useState React Hooks
import './App.css';                     //useEffect hook for local storage 
import Header from "./Header";
import {BrowserRouter as Router,Switch ,Route} from "react-router-dom";
import AddContact from "./AddContact";
import ContactList from "./ContactList";



function App() {

  //Value for localStorage Key

      const Local_Key = "contacts";


   //we use Hooks in our Function Component  
  const [contacts, setContacts]= useState([]);

  //Function as a prop

  const addContactHandler = (contact)=> {

    console.log(contacts);
    //use REST operators to set the state
    setContacts([...contacts,contact ]);  
  }
  

//get data from local host
useEffect(() => {
 const retrive= JSON.parse(localStorage.getItem(Local_Key));
 if(retrive)setContacts(retrive);
}, [])




//set Local Storage for CRUD

   useEffect(() => {
      localStorage.setItem(Local_Key, JSON.stringify(contacts));
   }, [contacts])



    //Props pass Data from Child to parent
  return (
      //JSX code
      //Adding props to contact list
    <div className="ui container">
       {/*Nested Components */}
       <Header/> 
       {/*Parse data from a child to the Parent (Handler) */}
       <AddContact addContactHandler ={addContactHandler}/>
       
       {/*Parse the array or a function as a prop */}
       <ContactList contacts={contacts}/>
      
      
    </div>
  );
}
export default App;
