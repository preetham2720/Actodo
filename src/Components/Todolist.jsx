import Todolistcard from "./Todolistcard"

function Todolist(props){
    var arraylist = props.arraylist  
    var setarraylist = props.setarraylist

    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {arraylist.length === 0?<p>You haven't added any activity yet</p>:""}
            {
               arraylist.map((item,index) => {
                return <Todolistcard index={index+1} activity={item.activity} id={item.id} arraylist={arraylist} setarraylist={setarraylist}/>
               }) 
            }
        </div>
    )
}

export default Todolist