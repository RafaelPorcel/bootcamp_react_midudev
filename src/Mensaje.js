function Mensaje (props) {
    // console.log(props);
    return <h4 style={{color : props.color}}>{props.message}</h4>;
}

export default Mensaje; 