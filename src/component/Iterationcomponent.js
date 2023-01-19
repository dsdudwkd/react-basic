

const IterationComponent = () => {

    //1. 반복 처리
    const arr = [1, 2, 3, 4, 5];

    /* const newArr = arr.map(function(item,inde,arr) {
        return item*10;
    })
    console.log(newArr); */
    
    // 위의 내용 ES6로 작성
    /* const newArr = arr.map((item,index,arr)=> item*10);
    console.log(newArr); */

    //2. 반복처리(태그) - 리액트에서 반복 처리 시 key 키워드를 태그에 꼭 작성한다(key는 고유한 값)
    //key는 화면에서 렌더링할 때 변화를 감지하기 위해 참조하는 값 - 태그에 전달되는 props의 개념이기 때문에 화면에는 나오지 않음
    const newArr = arr.map((item,index)=> <li key={index}>{item}</li>); /* 태그가 하나의 컴포넌트라고 생각하면 됨 */
    console.log(newArr);
    
    return(
        <>
            <ul>
                {newArr}
                {/* {arr.map((item,index)=> <li key={index}>{item}</li>} */} {/* 위에 따로 만들지 않고 직접 넣을 수도 있음 */}
            </ul>
        </>
    )
}
export default IterationComponent;