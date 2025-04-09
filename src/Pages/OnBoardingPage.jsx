import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Modal from 'react-modal';

import Header from '../Components/Header';
import Body from '../Components/Body';
import Button from '../Components/Button';

import Picture from '../assets/Onboarding.svg'
import LogoutPicture from '../assets/Logout.svg'

// Next line is needed for accesiibility reason so that screen readers can function properly
Modal.setAppElement('#root')

const OnBoardingPage = () => {

    const [ModalisOpen, setModalIsOpen] = useState(false)
    const OpenModal = () => {
        setModalIsOpen(true)
    }
    const CloseModal = () =>{
        setModalIsOpen(false)
    }

    const navigate = useNavigate()
    const nextBtnClick = () => {
        navigate('/dashboard')
    }

    const LogOut = () => {
        navigate('/')
    }

    return <>
    <Header tbtn='Log out' btnClick={OpenModal}/>
    <Body>
        <div className='flex justify-items-center content-center w-[60%]'>
            <div className='w-[50%]'>
                <img src={Picture}/>
            </div>
            <div className='bg-slate-200 w-[50%] flex-col'>
                <div>
                    <p>Hi User,</p>
                    <h2>Welcome to AppName</h2>
                    <p>Everything you need to deliver strategic, impactful UX — in one powerful suite.</p>
                </div>
                <div>
                    <p>To get started, let's create your first project</p>
                    <input id='project-name' className='border-2 border-black' type='text' placeholder='Enter the name of your prohect'/>
                </div>
                <Button onClick={nextBtnClick}>Next</Button>
            </div>
        </div>
        <Modal isOpen={ModalisOpen} onRequestClose={CloseModal} className='w-[50%] h-[50%] relative top-[25%] left-[25%] border-2 border-black rounded-[8px] bg-white p-6'>
            <div className='flex flex-col w-[100%] h-[100%] items-center'>
                <img src={LogoutPicture} className='w-[200px] h-[200px]'/>
                <h5>Hey there, are you sure you want to log out?</h5>
                <p className='text-center'>Logging out will end your current session, but don't worry, you can always sign in again and start your project.</p>
                <div className='flex items-center justify-between gap-6'>
                    <Button onClick={LogOut}>Yep, log me out</Button>
                    <Button onClick={CloseModal}>Oops, not now</Button>
                </div>
            </div>
        </Modal>
    </Body>
    </>
}

export default OnBoardingPage