import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {

  const name = "홍길동"; //변수
  const age = 20;

  const myStyle = {color: 'red', backgroundColor:'yellow', fontSize:15};
  return (
    <Fragment>
      <ul>
        <li>1. 주석 alt + shift + a { /* 주석 */}</li>
        <li>2. return 구문은 반드시 1개여야 합니다. 반드시 하나의 태그를 리턴해야 함</li>
        <li>3. div태그를 사용하고 싶지 않으면 Fragment 컴포넌트를 사용</li>
        <li>4. 함수 안에서 변수를 만들고 사용하고 싶으면 {name}를 사용</li>
        <li>5. if문 대신에 3항 연산자 사용</li>
        <li>6. 화면에 그리고 싶은 내용이 없다면 null을 반환합니다</li>
        <li>7. undefined를 반환하는 상황을 만들면 안된다(렌더링은 가능)</li>
        <li>8. DOM에 직접 스타일을 하고싶은 경우에는 객체로 묶고 속성은 카멜표기법 사용 (단위 생략 시 px로 적용)</li>
        <li>9. class속성 대신에 className을 사용</li>
        <li>10. 홀로 사용하는 태그는 반드시 닫는 태그({/* < />) */})를 꼭! 작성해야 함(br, input, img)</li>
      </ul>
      <div className = "App" style={myStyle}> {/* {color:'red', backgroundColor:'yellow'} */}
       {name === '홍길동' ? '홍길동 입니다':'홍길동이 아닙니다'}
       {name === '이순신' ? <h3>이순신입니다</h3> : <h3>이순신이 아닙니다</h3>} {/* 3항 연산자 안에 태그 사용 가능 */}
       {age === 30 ? <h3>20입니다</h3> : null} {/* 반환 결과가 null이면 화면에 아무것도 안 나옴 */}
        </div> 

        {<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          우하하하하하하하하하
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>}
    </Fragment>
    /*    
      하나의 태그만 가능
      <div>
      안녕하세요!
        </div> 
    */

    /* {<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>} */
  );
}

export default App;
