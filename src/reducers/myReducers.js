const myReducer = (state = { sent: -1, rcvd: -1 }, action) => {
    console.log(`myReducer called for action:${action.type}`);
    if (action.type === 'UPDATE_SENT') {
        state.sent = state.sent + 1;
    }
    return {...state};
}

export default myReducer