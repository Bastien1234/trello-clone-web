import React, { useState } from 'react';

import axios from 'axios';

import constants from '../../constants/constants';

import trelloLogo from './../../assets/images/trello-logo.png';

import './signup.scss';

const backendUrl = `${constants.URL}/api/v1/users/testServer`;

const Signup = () => {

    // States for creating use
    const [newUser,setNewUser] = useState({
        email : "",
        lastName: "",
        firstName: "",
        password: "",
        confirmPassword: ""
    })
    const [bottomMessage, setBottomMessage] = useState("");
    const [isLoading, setisLoading] = useState(false);

    const signUp = async () => {
        try {
            const response = await axios.get(backendUrl);
            console.log(response)
            if (response.data.status === "ok") {
                console.log("Ok to route")
            }
        } catch(e) {
            console.log("error : ", e.message)
            setBottomMessage(e.message);
        }
    }

  return (
    <div className='signup-main'>

        <img className='signup-logo' src={trelloLogo}/>      
        

      {/* Main body */}
      <div className='signup-container'>
        <h1 className='signup-title'>Créer un compte</h1>
        <input 
            placeholder='Email'
            value={newUser.email}
            onChange={t => {
                setNewUser({...newUser, email : t.target.value})
                console.log(newUser)
            }}
        />

        <input 
            placeholder='Last Name'
            value={newUser.lastName}
            onChange={t => {
                setNewUser({...newUser, lastName : t.target.value})
                console.log(newUser)
            }}
        />

        <input 
            placeholder='First Name'
            value={newUser.firstName}
            onChange={t => {
                setNewUser({...newUser, firstName : t.target.value})
                console.log(newUser)
            }}
        />

        <input 
            placeholder='Password'
            value={newUser.password}
            onChange={t => {
                setNewUser({...newUser, password : t.target.value})
                console.log(newUser)
            }}
        />

        <input 
            placeholder='Confirm Password'
            value={newUser.confirmPassword}
            onChange={t => {
                setNewUser({...newUser, confirmPassword : t.target.value})
                console.log(newUser)
            }}
        />

        <button onClick={() => signUp()}>S'enregistrer</button>
      </div>

      

      <p>{bottomMessage}</p>
    </div>
  )
}

export default Signup