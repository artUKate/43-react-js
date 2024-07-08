import './ProfileCard.css'

export default function ProfileCard(){
    return(
    <div className='profile'>
        <h3>Name: Kateryna</h3>
        <h3>Last Name: Ushenko</h3>
        <img className="kate" src="photo_2024-07-03_18-15-51.jpg" alt="Photo" />
        
        <h4>Occupation: Developer </h4>
        <div className='list_container'> 
        <h4 id='hobby'>Hobbies: </h4>
        <ul className='listHobbies'>
            <li>Reading</li>
            <li>Drawing</li>
            <li>Travels</li>
            
        </ul>
        </div>
    </div>)
}