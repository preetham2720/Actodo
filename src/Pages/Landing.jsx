import Card from "../Components/Card"
import Header from "../Components/Header"
import Todocontainer from "../Components/Todocontainer"
import { useLocation } from "react-router-dom"

function Landing(){
  const data = useLocation();
    return (
    <>
      <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <Header user={data.state.user}/>
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bg={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
            <Card bg={"#FD6663"} title={"November"} subtitle={"18:30:00"}/>
            <Card bg={"#FCA201"} title={"Build Using"} subtitle={"React"}/>
          </div>
          <Todocontainer />
        </div>
      </div>
    </>
  )
}

export default Landing