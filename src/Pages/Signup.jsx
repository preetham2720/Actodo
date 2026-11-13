import { useState } from "react"
import { Link } from "react-router-dom"

function Signup(props){
    const user = props.user
    const setuser = props.setuser

    const [ename,setname] = useState("")
    const [epass,setpass] = useState("")

    function handlename(e){
        setname(e.target.value)
    }

    function handlepass(e){
        setpass(e.target.value)
    }

    function signup(){
        setuser([...user,{username:ename,password:epass}])
    }

    return(
         <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input 
                    onChange={handlename}
                    value={ename}
                    type="text"
                    className="w-52 border border-black rounded-md bg-transparent p-1" 
                    placeholder="Username"/>

                    <input 
                    onChange={handlepass}
                    value={epass}
                    type="text"
                    className="w-52 border border-black rounded-md bg-transparent p-1" 
                    placeholder="Password"/>

                    <input 
                    type="text"
                    className="w-52 border border-black rounded-md bg-transparent p-1" 
                    placeholder="Confirm Password"/>

                    <button onClick={signup} className="bg-[#FCA201] w-24 p-1 rounded-md">Sign Up</button>

                    <p>Already have an account? <Link className="underline" to={"/"}>Login</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Signup