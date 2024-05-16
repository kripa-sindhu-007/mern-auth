import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className=' bg-gradient-to-r from-purple-500 to-indigo-600'>
        <div className=' underline-animation flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold '>Authtication App</h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to='/'>
                <li className='underline-animation'>Home</li>
                </Link>
                <Link to='/about'>
                <li className='underline-animation'>About</li>
                </Link>
                <Link to='/sign-in'>
                <li className='underline-animation'>Sign In</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
