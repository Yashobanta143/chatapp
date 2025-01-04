import React, { useState } from 'react';

const UserProfile = ({selectedChat}) => {

    return (
        <div className='user-profile'>
            <h1>{selectedChat.name}</h1>
            <img src={selectedChat.img}/>
            <button>Call</button>
            <button>Video</button>
            <h2>Information</h2>
            <p>Phone: {selectedChat.ph}</p>
            <p>Email: {selectedChat.email}</p>
        </div>
    )

};


export default UserProfile;