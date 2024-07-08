export default function MyInput(props){
    return(
        <input className="my_Input" type={props.type}  placeholder = {props.placeholder} label= {props.label} name={props.name}  maxlength="28" size="30" />
    )
}