const Button = (props) => {
    return <>
    <button className={'border-2 border-black' + ' ' + props.className} onClick={props.onClick}>{props.children}</button>
    </>
}

export default Button