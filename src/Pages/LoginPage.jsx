import { useNavigate } from 'react-router-dom'

import Header from '../Components/Header'
import Body from '../Components/Body'
import picture from '../assets/login-image.svg'
import Button from '../Components/Button'
import IconButton from '../Components/IconButton'

const LoginPage = () => {

    const navigate = useNavigate()
    const loginBtnClick = () => {
        navigate('/on-boarding')
    }

    return <>
    <Header tbtn='Go Back'/>
    <Body>
        <div className='flex-col justify-items-center content-center w-[70%] bg-slate-200 min-h-[50%]'>
            <img src={picture} />
            <div className='flex-col justify-items-center'>
                <h2>Log In to Get Started</h2>
                <p>Get access to your UX toolkit — A strategic suite, made for professionals who lead with insight.</p>
            </div>
            <Button className='border-2 border-black' onClick={loginBtnClick}>Continue with Google</Button>
        </div>
    </Body>
    </>
}

export default LoginPage