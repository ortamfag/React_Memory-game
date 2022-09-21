const defaultState = {
    gameNumbers: [2,6,8,3,1,4,2,6,8,3,1,4]
}

const SET_GAME_NUMBERS = 'SET_GAME_NUMBERS';

export const setNumbers = (state = defaultState, action) => {
    switch (action.type) {
        case SET_GAME_NUMBERS: 
            return {...state, gameNumbers: action.payload};
        
        default: 
            return state;
    }
}

export const writeNewNumbers = (payload) => ({type: SET_GAME_NUMBERS, payload})