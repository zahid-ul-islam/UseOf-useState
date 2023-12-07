import { useState } from "react";

import "./App.css";
import Form from "./components/Form";

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const setToItem = (e) => {
    setItem(e.target.value);
  };
  const addToList = () => {
    
       list.push(item);
      setList([...list]);
      
     

  };
  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);

  };

  return (
    <>
      <h1>my app</h1>
      <table>
        {list.length !== 0 ? (
          list.map((element, index) => {
            return (
              <tr>
                <td>{element}</td>
                <td>{index}</td>
                <button onClick={() => removeItem(index)}>Remove</button>
              </tr>
            );
          })
        ) : (
          <tr>nothing to show</tr>
        )}
      </table>

      <input onChange={setToItem} type="text" placeholder="add item" />
      <button onClick={addToList}>Add</button>
      <Form />
    </>
  );
}

export default App;
