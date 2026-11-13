import Todoform from "./Todoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer(){
    const [arraylist,setarraylist] = useState([
        {
            "id": 1,
            "activity": "Go for a Walk"
        },
        {
            "id": 2,
            "activity": "Have Breakfast"
        },
        {
            "id": 3,
            "activity": "Go for a nap"
        }
    ])

    return(
        <div className="flex gap-5 flex-wrap">
           <Todoform arraylist={arraylist} setarraylist={setarraylist}/>
           <Todolist arraylist={arraylist} setarraylist={setarraylist}/>
        </div>
    )
}

export default Todocontainer