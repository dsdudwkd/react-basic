


const myReducer = (state, action) => {

    //action은 객체
    /* console.log(state); //{value: 0} - 초기값
    console.log(action); //{type:'increase'} - 변화를 감지한 값 */
    if (action.type === 'increase') {
        state = { value: state.value + 1 };
    } else if (action.type === 'decrease') {
        state = { value: state.value - 1 };
    } else if (action.type === 'reset') {
        state = { value: 0 };
    }
    return state; //변화된 값에 대해 반환한다
}

//기본 디포트 모형
export { myReducer };


const nameReducer = (state, action) => {

    state = { ...state, [action.name]: action.value };

    return state;
}
//기본 디포트 모형
export { nameReducer };