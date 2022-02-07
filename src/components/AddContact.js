import React from 'react';

//Class Component

//it inherits from the React Component 
class AddContact extends React.Component{
    //State  a Class Component

    state = {
        Name: "",
        LastName:"",
        Email:"",
        Phone:"", 
    }
  
    //function for our button
    add = (e)=>{
      e.preventDefault(); //preventDefault so that the page is not refreshed
      if(this.state.Name === "" || this.state.LastName=== ""){
       alert("All fields are required dude");
       return;

      }
        this.props.addContactHandler(this.state);
       //reset the state after form submit
        this.setState({Name: "" , LastName:"" ,Email:"", Phone:""});
       
    };
 
    //render function has JSX Code that
    //allows to write JavaScript that looks like html
    //the render functions returns a Virtual DOM
    //representation of the browsers DOM Elements
    render(){
        return(
            <div className='ui main'>
             <h1>Add Contacts</h1>
             
             <form className='ui form' onSubmit={this.add}>
                 <div className='field'>
                     <label>Name :</label>
                      {/* OnChange gets us the value input*/}
                     <input type="text"
                      name="name" 
                      placeholder="name" 
                      value={this.state.Name}
                      onChange={ (e)=> this.setState({Name:e.target.value})}/> 
                     
                 </div>  
                    {/* OnChange gets us the value input*/} 
                 <div className='field'>
                     <label>LastName:</label>
                     <input type="text" 
                     name="name" 
                     placeholder="Last Name" 
                     value={this.state.LastName}
                     onChange={ (e)=> this.setState({LastName:e.target.value})} />
                 </div>  
              
                 <div className='field'>
                     <label>Email:</label>
                     <input type="text" 
                     name="name" 
                     placeholder="Email"
                     value={this.state.Email}
                     onChange={(e)=> this.setState({Email:e.target.value})} />
                     
                 </div>   

                 <div className='field'>
                     <label>Contact No:</label>
                     <input type="text" 
                     name="name" 
                     placeholder="Contact" 
                     value={this.state.Phone}
                     onChange={ (e)=> this.setState({Phone:e.target.value})}/>
                     
                 </div>  
           

                     <button className="ui button blue">Submit</button> 
                     
                     <h1>Mpho's Acquittance</h1>


             </form>
            </div>
        );
    }

}

export default AddContact