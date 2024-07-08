import './myInputClasswork.css'



export default function MyInput(props) {
  console.log(props);
  return (
    <>
      <label className='label'>{props.label}</label>
      <input type={props.type} name={props.name} placeholder={props.placeholder} />
    </>
  );
}