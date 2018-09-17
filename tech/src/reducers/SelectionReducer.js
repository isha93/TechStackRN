let states = null

export default (state = states, action) =>{
    switch (action.type){
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};