import Header from '../Components/Header'
import Body from '../Components/Body'
import SideBar from '../Components/SideBar'
const RoiPage = () => {
    return <>
    <Header />
    <div className='flex'>
        <SideBar activate='roi'/>
        <Body>
            <h1>ROI</h1>
        </Body>
    </div>
    </>
}

export default RoiPage