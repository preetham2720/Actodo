function Card(props){
    return(
        <div className="p-10 border rounded-md text-center flex-grow" style={{"backgroundColor":props.bg}}>
            <h1 className="text-2x font-medium">{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Card