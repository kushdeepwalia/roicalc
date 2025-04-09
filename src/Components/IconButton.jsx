import { useNavigate } from "react-router-dom"

const IconButton = (props) => {

    const navigate = useNavigate()
    const nav = () => {
        navigate(props.to)
    }

    return <>
        <div onClick={nav} className="w-[52px] h-[52px] bg-[#EFF0F2] rounded-[4px] cursor-pointer flex items-center justify-center">
            <img src={props.icon}></img>
        </div>
    </>
}

export default IconButton