import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('api/login', { email, password });
}
const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`);
}
const createNewUserService = (data) => {
    console.log('check add data from service', data);
    return axios.post('/api/create-new-user',data);
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data:{
        id: userId
    }
    });
    
}
const editUserService = (inputData) => {
    return axios.put('/api/edit-user',inputData);
}

const getAllCodeService = (inputData) => {
    return axios.get(`/api/allcode?type=${inputData}`);
}
export { handleLoginApi, getAllUsers, createNewUserService,deleteUserService,editUserService,getAllCodeService};