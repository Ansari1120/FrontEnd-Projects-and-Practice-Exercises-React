function Input(props){
    console.log(props)
    return <button onChange={props.change} className={props.change.length >= 1 ? props.className : "primary-button"}>{props.label}</button>
}

export default Input;