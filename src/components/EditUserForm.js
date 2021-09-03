import React, { useState, useEffect } from 'react'

const EditUserForm = ({ updateUser, currentUser, setEditMode }) => {
    const [ user, setUser ] = useState( currentUser )
    const [ error, setError ] = useState( false )

    useEffect(() => {
        setUser( currentUser )
    }, [ currentUser ])
    
    const handleInputChange = e => {
        const target = e.target
        const { name, value } = target
        setUser({ ...user, [ name ]: value })
    }

    const formHandler = e => {
        e.preventDefault()

        if ( user.name.trim() === '' || user.userName.trim() === '' ) {
            setError( true )
            return
        }

        setError( false )
        updateUser( user )
    }

    return (
        <>
            <h2 className="mb-4">Edit User</h2>
            
            <p>Please fill out all fields to proceed</p>

            { error && 
                <div className="alert alert-danger" role="alert">
                    Oops, one or more fields are empty.
                </div> 
            }

            <form onSubmit={ formHandler }>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        name="name"
                        value={ user.name }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        name="userName"
                        value={ user.userName }
                        onChange={ handleInputChange }
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit
                </button>
                <button 
                    type="button" 
                    onClick={ () => setEditMode( false ) } 
                    className="btn btn-secondary ml-3"
                >
                    Cancel
                </button>
            </form>
        </>
    )
}

export default EditUserForm
