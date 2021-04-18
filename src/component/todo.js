
import React, { Component } from 'react'
import "./todo.css";
export default class todo extends Component {
   state={
       input: "",
       items:[] 
       };
 handleChange=(event)=>{
     this.setState({
         input:event.target.value
     });
   
 };

 deleteItems=(key)=>{
     
     const allItems=this.state.items;
     allItems.splice(key,1);
     this.setState({
       items: allItems
     });
    
 };

 storeItems = (event) =>{
     event.preventDefault();
     const { input}=this.state;
     const allItems=this.state.items;
     allItems.push(input);
     this.setState({
         items: allItems,
         input: ""
     });
     
 };




    render() {
        const{ input,items}=this.state;
        console.log(items);
        return (
            <div className="todo-container">
                <h1><u>TO DO APP</u></h1>
              <form className="input-section" onSubmit={this.storeItems}>
               
               
                   <input type="text" value={input} onChange={this.handleChange}></input>
                   </form>
                   
                   <ul>
                       {items.map((data, index) => (
                           <li key={index}>
                               {data} <i class="fas fa-trash" onClick={() => this.deleteItems(index)}></i>
                           </li>
                       ))}
                   </ul>
                
            </div>
        )
    }
}
