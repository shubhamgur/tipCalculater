const Button=({btntext,style,clickhandler,isdiseble})=>{
    return(
        <button style={style} onClick={clickhandler} disabled={isdiseble}>{btntext}</button>
    )
}

export default Button;