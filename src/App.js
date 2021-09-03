
import { useState } from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import data from './constants/users'

function App() {
  const initialState = { id: 0, name: '', userName: '' }
  const [ users, setUsers ] = useState( data )
  const [ editMode, setEditMode ] = useState( false )
  const [ currentUser, setCurrentUser ] = useState( initialState )

  const addUser = user => {
    const lastUser = users[ users.length - 1 ]
    user.id = lastUser ? lastUser.id + 1 : 0
    setUsers([ ...users, user ])
  }

  const deleteUser = id => {
    setUsers(users.filter( user => user.id !== id ))
    setEditMode( false )
  }

  const editUser = user => {
    setEditMode( true )
    setCurrentUser( user )
  }

  const updateUser = updatedUser => {
    setUsers(users.map( user => user.id === updatedUser.id ? updatedUser : user))
    setEditMode( false )
    setCurrentUser( initialState )
  }

  return (
    <div className="min-vh-100 bg-dark">
      <div className="container py-5 align-items-center">
        <h1 className="mb-4 text-light">Admin panel</h1>
        <div className="row">
          <section className="col-md-6 border p-4 bg-light">
            { editMode &&
              <EditUserForm
                updateUser={ updateUser } 
                currentUser={ currentUser }
                setEditMode={ setEditMode }
              />
            }
            { ! editMode && 
              <AddUserForm addUser={ addUser } />
            }
          </section>
          <section className="col-md-6 border p-4 bg-light">
            <UserTable 
                users={ users } 
                editUser={ editUser }
                deleteUser={ deleteUser }
              />
          </section>
        </div>
        
      </div>
    </div>
  )
}

export default App;
