import { useEffect, useState } from 'react';
import './App.css';
import { getPlanner, addPlanner, editPlanner, deletePlanner } from './FetchPlanner';
import { MyPlanner } from './MyPlanner';

function App() {

  const [myPlan, setPlanner] = useState([]);
  const[name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [plannerId, setPlannerId] = useState ("");

  useEffect ( () => {
    getPlanner (setPlanner)
  }, [])

  const updatingInput = (_id, name) =>{
    setEditing(true)
    setName(name)
    setPlannerId(_id)
  }

  return (
    
  <div>

    <div className='App'>
    <h1> Plan your day</h1>
    </div>

    <div className="grid">
      <div className='day'>
        <h2>To do list:</h2>
        <input
          type="text"
          placeholder='add your errands ...'
          value = {name}
          onChange = {(e) => setName(e.target.value)}
        />

          <button 
          disabled={!name}
          onClick=
            {editing ? () => editPlanner (plannerId, name, setName, setPlanner,  setEditing) : () => addPlanner(name, setName, setPlanner)} > 
            {editing ? " Edit" : "Add"}
          </button>

          {/* <MyPlanner text="We got here!"/> */}
          {myPlan.map((planner) => <MyPlanner text={planner.name} key={planner._id}
          updatingInput={() => updatingInput (planner._id, planner.name)}
          deletePlanner ={() => deletePlanner(planner._id, setPlanner)}/>
          
          )}

        </div>

    </div>
  </div>
  );
}

export default App;
