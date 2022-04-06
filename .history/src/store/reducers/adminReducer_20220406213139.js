import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            
            let copyState = {...state};
            copyState.isLoadingGender = true;
            console.log('fire fetch gender start', action)
            return {
                ...copyState
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false; 

            console.log('fire fetch gender success', action)

            return {
                ...state
        }
        case actionTypes.FETCH_GENDER_FAILED:
            console.log('fire fetch gender failed', action)
            state.isLoadingGender = false; 
            state.genders = [];
            return {
                ...state
        }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            return {
                ...state
        }
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = [];
            return {
                ...state
        }
        default:
            return state;
    }
}

export default adminReducer;