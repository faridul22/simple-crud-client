import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("user delete successfully")
                    const remaining = users.filter(user => user._id !== _id)
                    setUsers(remaining)
                }
            })
    }
    return (
        <div>
            <h1>There are {users.length} Users</h1>
            <div>
                {
                    users.map(user => <div
                        key={user._id}>
                        {user.name}
                        {user.email}
                        {user._id}
                        <Link to={`/update/${user._id}`}>
                            <button>Update</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(user._id)}
                        >X</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;