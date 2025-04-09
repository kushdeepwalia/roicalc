import Header from '../Components/Header'
import Body from '../Components/Body'
import SideBar from '../Components/SideBar'

import roiImage from '../assets/ROi-images/ROI-image.svg'
import Button from '../Components/Button'

const RoiPage = () => {
    return <>
    <Header tbtn='Projects'/>
    <div className='flex'>
        <SideBar activate='roi'/>
        <Body>
            <div className='flex flex-col items-center w-[70%]'>
                <h2>Return on Investment Calculator</h2>
                <div className='flex flex-col items-center w-[100%]'>
                    <img src={roiImage} className='w-[300px] h-[300px]'/>
                    <h3>Show Your Impact. Back It with Numbers.</h3>
                    <p className='text-center'>ROIx helps you quantify the business impact of your UX work with clarity and confidence.<br />Let’s turn insight into influence.</p>
                    <Button>Let's Calculate</Button>
                </div>
            </div>
        </Body>
    </div>
    </>
}

export default RoiPage