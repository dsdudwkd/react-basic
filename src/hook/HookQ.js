import { useEffect, useRef, useState } from "react";


const HookQ = () => {

    /* 
    1. 컴포넌트가 마운트된 이후 한 번만 id 태그에 포커스를 준다
    2. id, pw는 state로 관리
    로그인 버튼 클릭 시 공백이라면 공백인 태그에 포커스를 주세요
    로그인 버튼 클릭 시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요
    */

    const [login, setLogin] = useState({id:'', pw:''});
    const inputTag1 = useRef(null);
    const inputTag2 = useRef(null);
    
    useEffect(()=>{
        console.log("진짜 모르겠는데?");
        
        inputTag1.current.focus(); //처음 마운트 이후 id태그에 포커싱
       
    },[]);

    //input태그의 핸들링
    const handleChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value});
    }


    const handleClick = () => {
        if(inputTag1.current.value === ""){
            inputTag1.current.focus();
        } else if(inputTag2.current.value === ""){
            inputTag2.current.focus();
        } else {
            alert(`id는 ${login.id}이고 pw는 ${login.pw} 입니다.`);
        }
    }
  
    return(
        <>
        <div>
            <h3>Hook 실습</h3>
            <input type="text" name="id" placeholder="아이디" ref={inputTag1} onChange={handleChange}/><br/>
            <input type="password" name="pw" placeholder="비밀번호" ref={inputTag2} onChange={handleChange}/><br/>
            <button onClick={handleClick} >로그인</button>
            
            
        </div>
        </>
    );
}
export default HookQ;