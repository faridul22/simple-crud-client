import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h1>There are {users.length} Users</h1>
            <div>
                {
                    users.map(user => <div
                        key={user._id}
                    >Name: {user.name}
                        <br />
                        Email: {user.email}
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;