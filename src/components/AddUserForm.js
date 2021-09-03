import React, { useState } from 'react'

const AddUserForm = ({ addUser }) => {
    const initialState = { id: 0, name: '', userName: '' }
    const [ user, setUser ] = useState( initialState )
    const [ error, setError ] = useState( false )

    const handleInputChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setUser({ ...user, [ name ]: value })
    }

    const formHandler = e => {
        e.preventDefault()

        if ( user.name.trim() === '' || user.userName.trim() === '' ) {
            setError( true )
            return
        }

        addUser( user )
        setError( false )
        setUser( initialState )
    }

    return (
        <>
            <h2 className="mb-4">Add User</h2>

            <p>Please fill out all fields to proceed</p>

            { error && 
                <div className="alert alert-danger" role="alert">
                    Oops, one or more fields are empty.
                </div> 
            }

            <form onSubmit={ formHandler }>
                <div className="form-group">
                    <label htmlFor="user-name">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="user-name" 
                        placeholder="Enter name"
                        name="name"
                        value={ user.name }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="user-username">User Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="user-username" 
                        placeholder="Enter username"
                        name="userName"
                        value={ user.userName }
                        onChange={ handleInputChange }
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AddUserForm
