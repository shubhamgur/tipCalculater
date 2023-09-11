const CostomerList=({list,style})=>{
    const listOfCustomer=list.map((ele,ind)=>(<li key={ind} >{ele}</li>))
    return(
        <ul style={style}>
          {listOfCustomer}
        </ul>
    )
}

export default CostomerList;