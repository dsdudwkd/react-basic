import { useRef, useState } from "react";


const HookRef = () => {

    //사용자 입력 값 data, 화면에 출력 값 result
    const [form, setForm] = useState({data:'' , result:''})

    //input 태그 값
    const handleChange = (e) => {
        setForm({...form, ['data']: e.target.value});

    }
    /* console.log(form); */

    //등록 버튼 
    const handleClick = (e) => {
        setForm({data:'', result: form.data});

        //Ref의 사용 - 태그를 직접 핸들링해야 되는 경우에만 권장, 무분별적인 사용은 안 좋고 state로 핸들링하는게 좋음
        //console.log(inputTag);
        //console.log(inputTag.current); //input태그
        console.log(inputTag.current.value); //input태그에 입력한 값
        inputTag.current.focus();
    }

    //특정 태그에 이름달기 useRef() - 고유하게 식별할 태그
    //반환된 이름을 사용할 태그에 ref 속성에 넣는다
    const inputTag = useRef();
    
    return(
        <>
            내용: <input type="text" onChange={handleChange} value={form.data} ref={inputTag} />
            <button onClick={handleClick}>등록하기</button>
            <br/>
            결과: {form.result}
        </>
    )
}
export default HookRef;