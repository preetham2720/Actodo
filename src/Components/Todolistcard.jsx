function Todolistcard(props){
    var arraylist = props.arraylist  
    var setarraylist = props.setarraylist

    function handledelete(Id){
        var temparr = arraylist.filter((item) => {
            if(item.id === Id){
                return false
            }
            return true
        })

        setarraylist(temparr)
    }

    return(
        <div className="flex justify-between">
            <p>{props.index}.{props.activity}</p>
            <button className="text-red-500" onClick={() => {handledelete(props.id)}}>Delete</button>
        </div>
    )
}

export default Todolistcard