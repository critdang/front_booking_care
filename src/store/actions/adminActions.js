import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers, deleteUserService, editUserService } from "../../services/userService";
import {toast} from "react-toastify";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// })
export const fetchGenderStart =  () => {
    return async (dispatch, getState) => {
        try{
            dispatch({type: actionTypes.FETCH_GENDER_START})
            let res = await getAllCodeService("GENDER");
            if(res && res.errCode ===0) {
                dispatch(fetchGenderSuccess(res.data))
            }else {
                dispatch(fetchGenderFailed());
            }
        }catch(e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart err',e)
        }
    }
    
}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
})
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
})
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
})
export const fetchPositionStart =  () => {
    return async (dispatch, getState) => {
        try{
            let res = await getAllCodeService("POSITION");
            if(res &&res.errCode ===0) {
                dispatch(fetchPositionSuccess(res.data))
            }else {
                dispatch(fetchPositionFailed());
            }
        }catch(e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionFailed err',e)
        }
    }
    
}
export const fetchRoleStart =  () => {
    return async (dispatch, getState) => {
        try{
            let res = await getAllCodeService("ROLE");
            if(res && res.errCode ===0) {
                dispatch(fetchRoleSuccess(res.data))
                console.log(res.data)
            }else {
                dispatch(fetchRoleFailed());
            }
        }catch(e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleFailed err',e)
        }
    }
}
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try{
            let res =  await createNewUserService(data);
            console.log('check create user redux', res);
            console.log('check save user', data)
            if(res && res.errCode ===0) {
                toast.success("Create a new user succeed!")
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart())
            }else {
                dispatch(saveUserFailed());
            }
        }catch(e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed err',e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: 'CREATE_USER_SUCCESS',
})

export const saveUserFailed = () => ({
    type: 'CREATE_USER_FAILED'
})
// start doing end

export const fetchAllUsersStart =  () => {
    return async (dispatch, getState) => {
        try{
            let res = await getAllUsers("ALL");
            if(res && res.errCode ===0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            }else {
                toast.error("Fetch all users error!")
                dispatch(fetchAllUsersFailed());
            }
        }catch(e) {
            toast.error("Fetch all users error!")
            dispatch(fetchAllUsersFailed());
            console.log('fetchAllUsersFailed err',e)
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try{
            let res =  await deleteUserService(userId);
            console.log('check create user redux', res);
            if(res && res.errCode ===0) {
                toast.success("Delete the user succeed!")
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart())
            }else {
                toast.error("Delete the user succeed!")
                dispatch(saveUserFailed());
            }
        }catch(e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed err',e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try{
            let res =  await editUserService(data);
            if(res && res.errCode ===0) {
                toast.success("Update the user succeed!")
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart())
            }else {
                toast.error("Update the user failed!")
                dispatch(editUserFailed());
            }
        }catch(e) {
            toast.error("Update the user error!")
            dispatch(editUserFailed());
            console.log('editUserFailed err',e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})