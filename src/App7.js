
import { Fragment } from 'react';

//css파일 경로 링크
import './css/App.css';

//css모듈 파일 링크
import styled from './css/App.module.css';

const App = () => {

    //책 261p 참조 - css 스타일링

    //직접 스타일링하는 것은 카멜표기법으로 변경해서 입력
    const myStyle = {
        color:"green",
        textAlign: "center"
    }

    return (
        <Fragment>
            <header style={{backgroundColor:"beige"}} className="app_header">
                <p style={myStyle}>헤더입니다 (직접 스타일링)</p>
            </header>

            <article className='app_article'>
                css파일로 디자인하기
            </article>

            <section className={styled.app_wrap}>
                <div className={styled.app_item}>
                    <p>CSS디자인</p>
                    <input type="text" className="input_control"/>
                    <input type="password" className="input_control"/>
                </div>
            </section>

        </Fragment>
    )
}
export default App;