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
            let copyState = {...state};
            copyState.genders = action.data;
            copyState.isLoadingGender = false; 

            console.log('fire fetch gender success', copyState)

            return {
                ...copyState
        }
        case actionTypes.FETCH_GENDER_FAILED:
            console.log('fire fetch gender failed', action)

            return {
                ...state
        }
        default:
            return state;
    }
}

export default adminReducer;