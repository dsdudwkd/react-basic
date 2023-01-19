import { useState } from "react";


const StateComponent = () => {

    /* 
    p.103
    state란 컴포넌트에서 변화하는 값을 의미
    state가 변경되면 컴포넌트 리렌더링 시킨다
    함수형 컴포넌트에서는 useState()를 사용한다

    */


    //1.
    /* let data = useState('초기값');
    console.log(data);
    let a = data[0];
    let b = data[1]; */

    //2nd
    let [data, setData] = useState('초기값');
    //console.log(data); //state값
    //console.log(setData); //state setter함수

    let func = () => setData("변경");
    let enter = () => setData("입장");
    let exit = () => setData("퇴장");

    //state는 여러 개 가능
    let [color, setColor] = useState("black");

    console.log(color);

    return (
        <>
            <h3 style={{'color': color}}>state값: {data}</h3>{/* 왼쪽 color는 style의 속성, 오른쪽 color는 위의 변수명 */}
            <button onClick= {func}>값 변경하기</button>
            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>

            <hr/>
            <button onClick={()=>setColor("red")}>붉은색</button>
            <button onClick={()=>setColor("green")}>푸른색</button>
            <button onClick={()=>setColor("orange")}>그 사이 3초 그 짧은 색</button>
        </>
    )
}
export default StateComponent;