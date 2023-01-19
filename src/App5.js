import { Fragment } from "react"
import IterationComponent from "./component/Iterationcomponent";
import IterationComponent2 from "./component/IterationComponent2";
import IterationComponentQ from "./component/IterationComponentQ";
import IterationComponentQ2 from "./component/IterationComponentQ2";



const App = () => {

    /* 
    책 180P 참조
    컴포넌트 반복하기
    MAP(콜백(item, index, arr))
    */

    return (
        <Fragment>
            <IterationComponent/>
            <hr/>
            <IterationComponent2/>
            <hr/>
            <IterationComponentQ/>
            <hr/>
            <IterationComponentQ2/>
        </Fragment>
    )
}
export default App;