const SelectList=({style,optionclick})=>{
return(
    <>
    <select style={style} onChange={optionclick}>
        <option value=''>choose..</option>
        <option value='20'>Excellent (20%)</option>
        <option value='10'>Moderate (10%)</option>
        <option value='5'>Bad (5%)</option>
    </select>
    </>
)
}

export default SelectList;