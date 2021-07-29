const initalState = {
    email:''
};

export default (state = initalState, action) => {

    if(action.type === 'SET_EMAIL') {
        return { ...state, email:action.payload.email };
    }
        return state;
}