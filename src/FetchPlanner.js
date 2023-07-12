import axios from "axios";

const getPlanner = (setPlanner) => { 
    axios.get ("http://localhost:5000")
    .then(({data}) => {console.log(data)
    setPlanner(data);
})
}

const addPlanner = (name, setName, setPlanner ) => {
    axios.post("http://localhost:5000/savePlanner", {name})
    .then ((data) =>{
        console.log(data);
        setName("");
        getPlanner(setPlanner)
    })
}

const editPlanner = (plannerId, name , setName, setPlanner, setEditing) => {
    axios.put("http://localhost:5000/editPlanner", {_id:plannerId, name})
    .then ((data) =>{
        console.log(data);
        setName("");
        setEditing(false);
        getPlanner(setPlanner)
    })
}

const deletePlanner = (_id, setPlanner) => {
    axios.post("http://localhost:5000/deletePlanner" , {_id})
    .then( (data) => {
        console.log(data);
        getPlanner(setPlanner)
    })
}




export {getPlanner, addPlanner,editPlanner, deletePlanner};