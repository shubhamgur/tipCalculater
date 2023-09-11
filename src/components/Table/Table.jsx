import style from './Table.module.css'

const Table=({total,totalCustomer})=>{
return(
    <>
    <table>
        <thead>
            <tr>
            <th>Total Customer</th>
            <th >Tip</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{totalCustomer}</td>
                <td>{total}</td>
            </tr>
        </tbody>
    </table>
    </>
)
}

export default Table;