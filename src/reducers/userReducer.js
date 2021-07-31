const initalState = {
    email:''
};

const Reducers = (state = initalState, action) => {

    if(action.type === 'SET_EMAIL') {
        return { ...state, email:action.payload.email };
    }
        return state;
}

export default Reducers