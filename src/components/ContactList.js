import React from 'react';
import ContactCard from './ContactCard';
//function component

const Contactlist =(props)=> { //access the contacts array via props
    const renderContactList = props.contacts.map((contact)=> {
        //parse our JSX
        return(
            <ContactCard contact={contact}></ContactCard>
        );
    });
  return<div className ="ui celled list">{renderContactList}</div>
};
export default Contactlist