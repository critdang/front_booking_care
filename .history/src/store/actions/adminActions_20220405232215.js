import actionTypes from './actionTypes';
import {getAllCodeService} from "../../services/userService";


// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// })
export const fetchGenderStart = async (dispatch, getState) => {
    try{
        let res = await getAllCodeService("GENDER");
        if(res &&res.erCode ===0) {
            fetchGenderSuccess(res.data)
        }
    }catch(e) {
        fetchGenderFailed();
        console.log('fetchGenderStart err',e)
    }
}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
})
// start doing end