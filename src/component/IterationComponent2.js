import { useState } from "react";

const IterationComponent2 = () => {

    //1. 반복할 데이터 (state로 관리)
    const arr = [
        {id: 1, topic: "hello"},
        {id: 2, topic: "bye"},
        {id:3, topic:"take care"}
    ];

    const [list, setList] = useState(arr);

    //2. map함수를 이용해서 li태그로 생성
    const newList = list.map(item=>
    <li key={item.id} onDoubleClick = {() => handleRemove(item.id)}> {/* 함수 안에서 함수 호출 */}
        {item.topic}
    </li>) /* item = 하나의 객체 요소, 매개변수가 하나면 괄호 생략 */

    //3. input데이터 관리 - input태그 데이터에 대한 값이 data에 저장
    const [data, setData] = useState('');
    const handleChange = (e) => {
        setData(e.target.value);
        
    }

    //4. 추가하기 버튼 클릭 시 input의 값을 list의 마지막에 추가
    const handleClick = () => {
        let obj = {id: list[list.length-1].id +1, topic: data}

        // list.push(obj) //state를 직접 변경x
        let newArr = list.concat(obj); //원본 list를 수정한게 아니고 obj가 합쳐져 새로운 list 반환
        setList(newArr); //state 변경
        setData(''); //input 값 초기화(비우기)
    }

    //5. 삭제 기능
    /* 
    화살표 함수는 익명함수이기 때문에 호이스팅이 불가
    이벤트 안에서 함수를 호출로 연결하는 방법
    onclick = {() => 함수호출()}
    */
    const handleRemove = (a) => {
        //console.log(a); //키
        //filter - 콜백의 리턴이 true인 값을 가지고 새로운 배열생성
        const newList = list.fiter(item => item.id !== a);
        setList(newList); 
    }


    return(
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange}/* 함수를 연결하는 것 뿐 호출하는 것이x */ value={data}/>
            <button type="button" onClick={handleClick}>추가하기</button>
            <ul>
                {newList}
            </ul>
            
        </>
    )
}
export default IterationComponent2;