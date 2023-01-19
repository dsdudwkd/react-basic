import { useEffect, useState } from "react";


const HookEffect = () => {

    //1. useState
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    //클래스형의 componentDidUpdate() 대체
    //2-1. useEffect(함수); - useState로 값이 변경될 때마다 렌더링이 그 때 그때 일어난 후 useEffect가 실행됨(화면이 mount된 후에 실행) 
    /* useEffect(() => {
        console.log(`렌더링 완료. state값${name}`); 
    })
    //console.log(1); */

    //2-2. useEffect(함수, []); - 화면이 첫 번째 mount에서만 실행 (중요!)
   /*  useEffect(()=>{
        console.log("처음만 실행됨");
    },[]);
 */

    //2-3. useEffect(함수, [state]) - 특정 값이 렌더링 될 때만 실행
   /*  useEffect(()=>{
        console.log('age가 변경될 때 실행');
    },[age]); */

   /*  useEffect(()=>{
        console.log('age or name이 변경될 때 실행');
    },[age, name]); */

    //2.4 컴포넌트가 unmount될 때 실행 (컴포넌트가 사라질 때 실행)
    useEffect(() => {
        console.log("name이 변경될 때 render 됩니다")
        
        return() => {
            console.log(`unmount 됩니다`); //렌더링이 그려지면, 기존화면이 지워지고 재렌더링
            console.log(`update전 값:${name}`); //state는 직전 값이 나온다
        }
    },[name]); /* name값이 변경될 때만 실행 */

    return(
        <>
            이름:<input type="text" onChange={handleName}/><br/>
            나이:<input  type="number" onChange={handleAge}/><br/>

            이름: {name}, 나이{age}
        </>
    )

    //useEffect는 여러 개여도 된다
}
export default HookEffect;