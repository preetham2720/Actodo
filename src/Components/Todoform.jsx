import { useState } from "react"
function Todoform(props){
    var arraylist = props.arraylist  
    var setarraylist = props.setarraylist

    const [actval,setactval] = useState("")

    function changehandler(e){
        setactval(e.target.value)
    }

    function addactivity(){
        setarraylist([...arraylist,{id:arraylist.length+1,activity:actval}])
        setactval("")
    }

    return(
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activites</h1>
            <div>
                <input value={actval} onChange={changehandler} type="text" className="border border-black p-1 bg-transparent" placeholder="manage activities"/>
                <button onClick={addactivity} className="border border-black p-1 text-white bg-black">Add</button>
            </div>
        </div>
    )
}

export default Todoform