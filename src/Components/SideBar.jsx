import IconButton from "./IconButton"
import roiIcon from '../assets/side-bar-icons/roi.svg'
import bridgeIcon from '../assets/side-bar-icons/Bridge.svg'
import emoteIcon from '../assets/side-bar-icons/Emote.svg'
import libraryIcon from '../assets/side-bar-icons/library.svg'
import vizIcon from '../assets/side-bar-icons/viz.svg'

const SideBar = (props) => {
    return <>
    <div className="w-[100px] h-[calc(100vh_-_68px)] border-r-2 border-black flex flex-col items-center gap-[24px] pt-6 pb-6">
        <div className="inline-flex flex-col gap-[16px] items-center w-[100%]">
            <IconButton to='/dashboard' active={props.activate == 'dashboard' ? true : false}/>
            <IconButton to='/roi' icon={roiIcon} active={props.activate == 'roi' ? true : false}/>
            <IconButton to='/' icon={emoteIcon}/>
            <IconButton to='/' icon={vizIcon}/>
            <IconButton to='/' icon={vizIcon}/>
            <IconButton to='/' icon={bridgeIcon}/>
            <IconButton to='/' icon={libraryIcon}/>
        </div>
        <hr />
        <img className="w-[52px] h-[52px]" src=''/>
        <div></div>
    </div>
    </>
}

export default SideBar