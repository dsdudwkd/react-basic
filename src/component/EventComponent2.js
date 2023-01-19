import { useState } from "react";


const EventComponent2 = () => {

    //state를 객체로 관리
    const [data, setData] = useState({name:"", topic:""});


    const handleChange = (e) => {
        //setData(e.target.value); //state의 객체를 지워버리고 value값을 넣는 형태
        //console.log(data); //{name: '', topic: ''}

        //객체 안에서 key를 바꾸는 방법["키"]: 값
        /* const copy = {...data, ["name"]: e.target.value }; //데이터 복사 */
        const copy = {...data, [e.target.name]: e.target.value}
        console.log(copy);
        setData(copy); //state 변경
    }

    /* const handleTopic = (e) => {
        const copy = {...data, ["topic"] : e.target.value};//데이터 복사
        setData(copy);
    } */

    const handleClick = () => {
        alert(`${data.name}님 할 일: ${data.topic}`);
        setData({name:'', topic:''}); //state 초기화
    }
    return(
        <>
            <h3>리액트 이벤트 핸들링(객체로 묶기)</h3>

            <input type="text" name="name" onChange={handleChange} value={data.name}/><br/>
            <h3>결과: {data.name}</h3> {/* data안에 있는 name값 */}
            {/* <input type="text" name="topic" onChange={handleTopic} value= {data.topic}/> */}
            <input type="text" name="topic" onChange={handleChange} value= {data.topic}/>
            <h3>결과: {data.topic}</h3>
            
            <button type="button" onClick={handleClick}>click me</button>
        </>
    )
}
export default EventComponent2;