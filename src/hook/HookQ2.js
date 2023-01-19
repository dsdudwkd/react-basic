import { useRef, useState } from "react";


const HookQ2 = () => {

    /* 
    실습 (할 일 목록 만들기)
    1. state는 {todo: '', list:[]} 고 관리하세요
    2. 할 일 목록을 작성하고 클릭 시, list에 인풋에 입력 값을 추가하고 map을 통해서 화면을 그린다
    3. 등록버튼 클릭 이후에는 ref를 활용해서 input태그에 포커싱을 준다
    */

    const [form, setForm] = useState({ todo: '', list: [] });

    //인풋데이터 핸들링
    const handleChange = (e) => {
        setForm({ ...form /* -> 기존값 가져오기 */, todo: e.target.value /* -> todo값만 바꾸기 */});
        console.log(e.target.value);
    }

    //클릭 데이터 핸들링
    const handleClick = (e) => {
        let newList = form.list.concat(form.todo); //기존 list는 유지, 새롭게 합쳐진 리스트를 반환, todo에 입력된 값에 list가 들어간 새로운 배열
        setForm({ todo: '', list: newList }); //setForm으로 list값 변경, todo는 공백으로 초기화
        buttonTag.current.focus();
    }

    const handleKey = (e) => {
        if (e.keyCode === 13) {
            handleClick();          
        }
    }
    
    const newArr = form.list.map((item,index) => <li key={index}>{item}</li>);
    

    const buttonTag = useRef();

    return (
        <>
            <div>
                <h3>ref로 할 일 목록 만들기</h3>
                <input type="text" name="todo" placeholder="할일목록" onChange={handleChange} value={form.todo}/* state에 맞춰 값 변경됨 */ ref={buttonTag} onKeyUp={handleKey} />
                <button onClick={handleClick} >등록하기</button>
                <ul>
                    {newArr}
                </ul>
            </div>
        </>
    )
}
export default HookQ2;