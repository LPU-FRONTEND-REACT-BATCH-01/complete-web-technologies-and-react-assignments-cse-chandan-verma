import React from "react"

const UserDetails = ({userDetail:{id,username,age,city}}) =>{
    // let {userDetail:{id,username,age,city}} = props     //destructuring
    return (
        <div className="userdetail">
            <h3>Id: {id}</h3>
            <h3>Username: {username}</h3>
            <h3>Age: {age}</h3>
            <h3>City: {city}</h3>
        </div>
    )
}

export default UserDetails