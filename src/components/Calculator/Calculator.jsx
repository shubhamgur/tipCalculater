import { useState } from "react";
import Button from "../Button/Button";
import CostomerList from "../CostomerList/CostomerList";
import Footer from "../Footer/Footer";
import Heder from "../Heder/Heder";
import Input from "../Input/Input";
import SelectList from "../SelectList/SelectList";
import Table from "../Table/Table";

const Calculator=()=>{

    const [number,setNumber]=useState('');
    const [text,setText]=useState('');
    const [option,setOption]=useState('');
    const [list,setList]=useState([]);
    const [tip,setTip]=useState([]);
    const[totaltip,setTotaltip]=useState('0');
    const [costomer,setCostomer]=useState('0');

const tipp=[];

const numberInputHandler=(e)=>{
    setNumber (e.target.value)
}

const textInputHandler=(e)=>{
    setText(e.target.value)
}

const optionClick=(e)=>{
    setOption(e.target.value)
}

const btnclick=()=>{
    const tipp=number*option/100;
    setTip([...tip,tipp]);
    const listitem=`${text} offering a tip of ${tipp} rupee`;
    setList([...list,listitem])
    setNumber('');
    setText('')
    setCostomer('0');
    setTotaltip('0');
}

const tipBtnClickhandler=()=>{
    const tipp=number*option/100;
    setTip([...tip,tipp]);
    let totalTip=0;
    let c=list.length;
    for(let i=0;i<tip.length;i++){
totalTip+=tip[i];
    }
    setTotaltip(totalTip);
setCostomer(c);
}

const lineStyle={ marginTop:'50px',border:'2px solid LightGray'};
const selectListStyle={borderColor:'skyblue',height:'30px',border:'3px solid skyblue',marginRight:'20px'};
const listBtnStyle={marginLeft:'10px',color:'white',backgroundColor:'blue',height:'25px'};
const tipBtnStyle={backgroundColor:'green',color:'white',height:'30px',marginBottom:'10px'};


return(
    <>
    <Heder/>
    <h3>Enter your bill amount</h3>
    <Input style={{width:'1000px'}} type='number' inputHandler={numberInputHandler} value={number}/>
    <p style={lineStyle}></p>
    <label>How was the service  :-</label>
    <SelectList optionclick={optionClick} style={selectListStyle}/>
    <Input value={text} type='text' placeholder='Customer Name' inputHandler={textInputHandler}/>
    <Button isdiseble={!number || !text || !option} clickhandler={btnclick} btntext='Add Customer' style={listBtnStyle}/><br></br><br></br>
    <h3>Customer List</h3>
    <p style={{border:'1px solid LightGray'}}></p>
    <div style={{textAlign:'left'}}>
    <CostomerList list={list} style={{height:'100px',overflow:'scroll'}}/>
    </div>
    <Button btntext='Calculate Tip & Customer' clickhandler={tipBtnClickhandler} style={tipBtnStyle}/>
    <Table total={totaltip} totalCustomer={costomer} />
    <Footer/>
    </>
)
}

export default Calculator;