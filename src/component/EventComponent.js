import { useState } from "react";


const EventComponent = () => {

    //name을 지정할 useState
    const[name, setName] = useState('');

    //이벤트 함수의 첫 번째 매개변수에 이벤트에 대한 정보를 넣는다
    const handleName = (e) => {
        //console.log(1);
        //console.log(e);
        //console.log(e.target.value); //사용자가 입력한 값
        setName(e.target.value); //state체인지
    }

    const [topic, setTopic] = useState('');

    const handleTopic = (e) => {
        setTopic(e.target.value);
    }

    const handleClick = (e) => {
        alert(`${name}님의 주제는 ${topic} 입니다!`); //현재 가리키고 있는 state 값
        setName(''); //input데이터의 초기화
        setTopic(''); //input데이터의 초기화
    }

    const handlePress = (e) => {
        //console.log(e);
        if(e.keyCode ==13){ //엔터값 (엔터 눌렀을 때)
            handleClick(); //클릭이벤트 호출
        }
    }

    //엔터키의 처리

    return(
        <>
            <h3>react의 이벤트 핸들링(input데이터)</h3>
            <input type="text" name="name" onChange={handleName} value={name} /> {/* 클래스형에서는 value값이 input태그에 값이 안 나옴 */}
            <div>체인지된 결과 :{name}</div>
            
            <input type="text" name="topic" onChange={handleTopic} onKeyUp={handlePress} value={topic}  />
            <div>체인지된 결과: {topic} </div>

            <button typr='button' onClick={handleClick}>click me</button>
        </>
    )
}
export default EventComponent;