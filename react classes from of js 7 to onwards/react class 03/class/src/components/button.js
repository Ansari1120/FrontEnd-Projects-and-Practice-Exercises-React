function Button(props) {

    console.log(props)
    return <button onClick={props.click} className={props.className ? props.className : "primary-button"}>{props.label}</button>
}

export default Button;


// can export multiple things through simple export
// default export means only one thing will be exported.



//those things use frequently at multiple modules we placed it into component and frequently use it


