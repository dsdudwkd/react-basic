import { useState } from "react";
import IterationComponentQ from "./IterationComponentQ"


const IterationComponentQ2 = () => {

    //1 - select 태그는 컴포넌트 반복으로 option 태그를 생성
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    const newArr = select.map((item, index) => <option key={index}>{item}</option>) /* key는 구분할 값으로 */


    //2 - data는 state로 관리하고 화면에 li태그로 반복
    const data = [
        { id: 1, type: 'Java', teacher: '이순신' },
        { id: 2, type: 'Java', teacher: '홍길자' },
        { id: 3, type: 'Javascript', teacher: '홍길동' },

        { id: 4, type: 'Oracle', teacher: '이순신' },
        { id: 5, type: 'Mysql', teacher: '이순신' },
        { id: 6, type: 'CSS', teacher: '박찬호' },
        { id: 7, type: 'HTML', teacher: 'coding404' },
    ];

    const [list, setList] = useState(data);

    const newList = list.map(item =>
        <li key={item.id}>
            {item.type}-{item.teacher}
        </li>);


    // 3 - select박스가 체인지 되면, 이벤트 객체를 활용해서 선택된 값만 필터링해서 보여주면 됩니다
    const handleChange = (e) => {
        //console.log(e.target.value);
        const newData = data.filter((result) => result.type == e.target.value);
        setList(newData);
       
    };

    //4. 숙제: 검색기능 -  대소문자를 구분하지 않고 teacher, type에 포함된 데이터만 필터링
    const [search, setSearch] = useState('');
    const searchChange = (e) => {
        setSearch(e.target.value);
    }
    
    //search - 사용자의 검색값
    //data객체에서 조회
    const searchClick = () => {
        let newList = data.filter(obj => obj.type.toLowerCase().includes(search) || obj.teacher.includes(search))

        setList(newList);
    }

    return (
        <>
            <h3>컴포넌트 반복 실습</h3>
            강의정보:  
            <select onChange={handleChange}>
                {newArr}
            </select>
            <ul>
                {newList}
            </ul>
        </>
    )
}
export default IterationComponentQ2;