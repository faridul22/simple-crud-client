import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h3>Users Are Available: {users.length}</h3>
            {
                users.map(user => <p key={user._id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;