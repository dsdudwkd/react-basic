import { useState } from "react"


const StateComponentQ = () => {


    // let [count, setCount] = useState(0);
    
    //const타입 에서 ++count로 state를 직접 수정하면 안된다
    /* 선생님 */
    const[count, setCount] = useState(0);


    return(

        <>
        <h2>실습</h2>
        <h3>카운트: {count}</h3>
        {/* <button onClick={()=>{setCount(++count)}}>증가</button>
        <button onClick={()=>{setCount(--count)}}>감소</button>
        <button onClick={()=>{setCount(0)}}>초기화</button> */}
        
        {/* 선생님 */}
        <button onClick={()=>{setCount(count+1)}}>증가</button>
        <button onClick={()=>{setCount(count-1)}}>감소</button>
        <button onClick={()=>{setCount(0)}}>초기화</button>
        </>
    )

}
export default StateComponentQ;