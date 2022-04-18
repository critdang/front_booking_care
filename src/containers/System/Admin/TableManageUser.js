import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';

import * as actions from "../../../store/actions";

class TableManageUser extends Component {

    constructor(props) {
        // check constructor đầu tiên(hàm tạo) . khởi tạo state(biến) dùng trong  
        super(props);
        this.state = {
            // lưu giá trị của biến component thông qua state, hứng giá trị từ redux trả về
            usersRedux:[]
        }
    }
    componentDidMount() {
        this.props.fetchUsersRedux();
    }
    componentDidUpdate(prevProps,prevState,snapshot) {
        if(prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }
    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id);
    }

    handleEditUser= (user) => {
        console.log('user edit: ', user)
        this.props.handleEditUserFromParentKey('data from child')
        this.props.handleEditUserFromParentKey(user)

    }
    render() {
            console.log('check all user',this.props.listUsers);
            console.log('check state',this.state.usersRedux)
            let arrUsers = this.state.usersRedux;
        return (
            <table id="TableManageUser">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                        {arrUsers && arrUsers.length > 0 && 
                        arrUsers.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        
                                        <button 
                                            onClick = {() => this.handleEditUser(item)}
                                            className= "btn-edit" cursor="pointer" ><i className="fas fa-pencil-alt"></i></button>
                                        <button 
                                            onClick={()=> this.handleDeleteUser(item)}
                                            className= "btn-delete" cursor="pointer" ><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    
                </tbody>
            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
