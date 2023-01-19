
/* 
책 87p 참조
컴포넌트 선언 방법은 크게 2가지 (함수형, 클래스)
컴포넌트는 여러 개 일 수 있다

모듈 내보내기 export  default
모듈 가져오기 import ~~ from 경로

96p 참조(props)
1. 상위 컴포넌트에서 하위 컴포넌트로 전달하는 매개 변수
2. 객체 형태로 전달되기 때문에 {} 로 값을 받는다
3. props는 읽기 전용으로, 값은 부모에서 바꿔서 전달해야 함
*/

import { Fragment } from "react";
import PropTypes from 'prop-types'; //props 타입지정, 직접 import해야함 (PropTypes는 내장객체)


const MyComponent = (/* props */ {name, age, email, addr}) => { //3rd

    //1st
   /*  console.log(props);
    const a = props.name;
    const b = props.age;
    const c = props.email; */

    //2nd
    /* const {name, age, email} = props; */

    return (
        <Fragment>
        <div>나의 첫번째 컴포넌트</div>
        <div>props값: {name}</div>
        <div>props값: {age}</div>
        <div>props값: {email}</div>
        <div>default props값: {addr}</div>
        </Fragment>
    )

}

/* props의 기본값 지정하기 - 컴포넌트명.defaultProps={} */
MyComponent.defaultProps = {
    name: "이름없음",
    age: 0,
    email: "지정안됨",
    addr: "서울시" //addr은 전달되지 않지만 기본값

}

/* props의 타입 지정 - 컴포넌트명.propTypes={} */
MyComponent.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string.isRequired
    
}
export default MyComponent;