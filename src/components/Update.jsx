import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
    const user = useLoaderData();
    const { _id, name, email, password } = user;

    const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const upUserInfo = { name, email, password }
        console.log(upUserInfo)

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upUserInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <h3>Update:
                <small>
                    <i>
                        <mark>
                            {name}
                        </mark>
                    </i>
                </small>
            </h3>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={name ? name : ''} id="" />
                <br />
                <input type="email" name="email" defaultValue={email ? email : ''} id="" />
                <br />
                <input type="password" name="password" defaultValue={password ? password : ''} id="" />
                <br />
                <input type="submit" value="Click for Update" />
            </form>
            <Link to='/users'><button>View Users</button></Link>
        </div>
    );
};

export default Update;