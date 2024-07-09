import "./myInputClasswork.css";

export default function MyInputClasswork({label, name, type, placeholder}) {

  return (
    <>
      <label className='label'>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </>
  );
}