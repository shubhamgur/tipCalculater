const Input=({style,type,placeholder,inputHandler, value})=>{
    return(
<>
<input type={type} style={style} placeholder={placeholder} onChange={inputHandler} value={value}/>
</>
    )
}

export default Input;