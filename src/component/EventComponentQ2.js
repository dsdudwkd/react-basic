import { useState } from "react";


const EventComponentQ2 = () => {

   /*  const [data, setData] = useState({ "name": '', "topic":'' });
   
    const handleChange = (e) => {
        
        setData({...data, [e.target.name]:e.target.value});
        
        
    }
    const handleClick = (e) => {
        setData({name:"", topic:data.name});
       
    }

    return (
        <>
            <h3>input데이터 핸들링(실습)</h3>
            <div>클릭 시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</div>

            <input type="text" name="name" onChange={handleChange} value={data.name} />
           
            <button type="button" onClick={handleClick}>변경하기</button>
            <h3>결과</h3>
            <div>{data.topic}</div>
        </>
    ) */

    const [data, setData] = useState(''); //인풋데이터
    const [result, setResult] = useState(''); //결과데이터
   
    const handleChange = (e) => {
        
        setData(e.target.value); //내부적으로 비동기적으로 변경
        //console.log(data); //이전 값이 출력된다(정상)
    }

    const handleClick = (e) => {
        setResult(data);
        setData('');
    }
   

    return (
        <>
            <h3>input데이터 핸들링(실습)</h3>
            <div>클릭 시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</div>

            <input type="text" name="name" onChange={handleChange} value={data}/* input값 */ />
        
            <button type="button" onClick={handleClick} >변경하기</button>
            <h3>결과</h3>
            <div>{result}</div>
        </>
    ) 

}
export default EventComponentQ2;