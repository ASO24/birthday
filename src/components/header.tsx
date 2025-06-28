import { Link } from 'react-router-dom'
import '../index.css' 

const Header =()=>{
    return(
        <div className="flex flex-col justify-center h-52 bg-[#bd6725]">
            <p className='text-4xl self-center great-vibes-regular'>
                <Link to='/Mensajes'>
                    ¡ Feliz Cumpleaños !
                </Link>
            </p>
        </div>
    )
}
export default Header