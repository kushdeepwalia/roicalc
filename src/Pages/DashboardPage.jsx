import Header from '../Components/Header'
import Body from '../Components/Body'
import SideBar from '../Components/SideBar'
const DashboardPage = () => {
    return <>
    <Header />
    <div className='flex-col'>
        <SideBar />
        <Body>
            <h1>DashBoard</h1>
        </Body>
    </div>
    </>
}

export default DashboardPage