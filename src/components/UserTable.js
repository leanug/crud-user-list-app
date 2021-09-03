import React from 'react'
import { FaTrash, FaUserEdit } from 'react-icons/fa'

const UserTable = ({ users, deleteUser, editUser }) => {
    return (
        <>
            <h2 className="mb-4">User list</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map( item => {
                        return (
                            <tr key={ item.id }>
                                <td>{ item.name }</td>
                                <td>{ item.userName }</td>
                                <td>
                                    <button className="btn btn-secondary mr-3" onClick={ () => editUser( item )}>
                                        <FaUserEdit />
                                    </button>
                                    <button className="btn btn-warning" onClick={ () => deleteUser( item.id )}>
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default UserTable
