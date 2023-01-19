import { Component } from "react";


class MyComponent3 extends Component {

    /* 
    <클래스형 state 규칙>
    state는 생성자 안에서 초기화를 한다
    state의 접근은 this.state를 이용해 접근한다
    state는 반드시 객체 모형이어야 한다

    클래스형에서는 생성자를 작성할 때 반드시 props를 받고, super를 통해 부모 컴포넌트에 연결해야 함 
    */
    
    constructor(props) {
        super(props);
        /* this.state는 MyComponent3 */
        this.state = {
            a:1,
            b:props.name //부모로부터 전달받은 name
        }
    }

    //클래스형 컴포넌트 render함수 안에서 return문 작성
    //Component가 제공해주는 함수: render
    render() {

        let {name} = this.props; //props
        console.log(name);

        return(
            <>
                <div>나의 클래스형 컴포넌트</div>
                state값은 {this.state.a}<br/>
                state name값은 {this.state.b}<br/>
            </>
        )
    }
}
export default MyComponent3;