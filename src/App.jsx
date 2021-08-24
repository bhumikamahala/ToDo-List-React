import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {

const [inputList, setInputList] = useState("");
const [Items , setItems ] = useState([]);

 const itemEvent = (event) => {
   setInputList(event.target.value);
 };

 const listOfItems = ( ) => {
   setItems((oldItems) => {
     return [... oldItems, inputList];
   });

   setInputList("");
 };
  
 const deleteItems= (id) =>{
//console.log("deleted");

 setItems((oldItems) => {
  return oldItems.filter((arrElem , index) => {
   return index !== id ;
  });
 });
};

  return (
    <div>
      <div className ="main_div">
        <div className ="center_div">
          <br />
          <h1> ToDo List</h1>
          <br/>
          <input type = "text " placeholder="Add a item" value= {inputList} onChange = {itemEvent}></input>
          <button onClick = {listOfItems}> + </button>

          <ol> 

            { /* <li> {inputList} </li> */}
      
          { Items.map( (itemval , index ) => {
           return  <ToDoLists 
           key = {index} 
           text = {itemval} 
           id = {index}
           onSelect = {deleteItems} />;
           })}

          </ol>
        </div>
      </div>
    </div>
  )
}

export default App;
