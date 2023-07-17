import { useState } from "react";

const Form = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  }

  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
            <select className="border" name="cars" id="cars">
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="opel">3</option>
                <option value="audi">4</option>
              </select>
              <input
                // eslint-disable-next-line react/no-unknown-property
                description = "list"
                onChange={(e)=>setItem(e.target.value)}
                
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 ml-4 text-grey-darker"
                placeholder="Add Todo"
              />
              <button onClick={addToList} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
