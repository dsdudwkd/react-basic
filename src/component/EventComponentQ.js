import { useState } from "react";


const EventComponentQ = () => {

    const [menu, setMenu] = useState('치킨');   

    //셀렉트 태그에서는 value값을 입력하지 않아도 option태그가 기본 value가 된다
    const handleSelect = (e) => {
        setMenu(e.target.value);
    }
    return(
        <>
        <h3>셀렉트 태그 핸들링(실습)</h3>
        <div>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</div>
        <select onChange={handleSelect}>
            <option>치킨</option>
            <option>피자</option>
            <option>햄버거</option>
        </select>
        <h3>선택한 결과</h3>
        <div>{menu}</div>
        </>
    )
}
export default EventComponentQ;