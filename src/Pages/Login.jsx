import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"

function Login(props){
    const navigate = useNavigate()
    const user = props.user
    const [ename,setname] = useState("");
    const [epass,setpass] = useState("");
    const [login,setlogin] = useState(true);

    function handlename(e){
        setname(e.target.value)
    }

    function handlepass(e){
        setpass(e.target.value)
    }

    var userfound = false

    function checklogin(){
        user.forEach((item) => {
            if(item.username === ename && item.password === epass){
                navigate("/home",{state:{user:ename}})
                userfound = true
            }
        })

        if(!userfound){
            setlogin(false)

        }
    }
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {login?<p>I help you manage your activities after you login :)</p>:<p className="text-red-500">Please Sign Up before you login</p>}

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

                    <button 
                    onClick={checklogin}
                    className="bg-[#8272DA] w-24 p-1 rounded-md">Login</button>

                    <p>Don't have an account? <Link className="underline" to={"/signup"}>Sign Up</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Login