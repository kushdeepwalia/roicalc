import Logo from '../assets/IITLogo.svg'
import Button from './Button'

const Header = (props) => {
    return <>
    <header className="bg-slate-400 h-[68px] flex justify-between">
        <img src={Logo}/>
        <Button>{props.tbtn}</Button>
    </header>
    </>
}

export default Header