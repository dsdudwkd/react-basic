import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";

const App = () => {

    return (
        <Fragment>
            <h3>나의 App.JS</h3>
            {/* props - 값을 표현할 땐 중괄호 사용 */}
           <MyComponent name={"홍길동"} age={20} email={"aaa@naver.com"}/> {/* 함수형 컴포넌트 */}
          
           <MyComponent2 name={"이순신"}/> {/* 함수형 컴포넌트 */}
           <MyComponent2 name={"홍길자"}/> {/* 함수형 컴포넌트 */}

            {/* 클래스형 props - 값을 주는 쪽은 똑같이 */}
           <MyComponent3 name={"강감찬"}/> {/* 클래스형 컴포넌트 */}
        </Fragment>
    )
}
export default App; //내보내기