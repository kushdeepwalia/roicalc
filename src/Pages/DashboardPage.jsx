import Header from '../Components/Header'
import Body from '../Components/Body'
import SideBar from '../Components/SideBar'
const DashboardPage = () => {
    return <>
    <Header tbtn='Projects'/>
    <div className='flex'>
        <SideBar activate='dashboard' />
        <Body>
            <div className='w-[70%] p-6 flex flex-col items-center'>
                <p>🔆 Good Morning Arjun!</p>
                <h3>“Our role is to imagine products that don't exist and guide them to life.”</h3>
                <p>~ Christopher Stinger, Former Designer @ Apple</p>
            </div>
        </Body>
    </div>
    </>
}

export default DashboardPage