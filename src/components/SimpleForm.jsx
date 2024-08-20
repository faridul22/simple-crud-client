
const SimpleForm = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const userInfo = { name, email, password }
        console.log(userInfo)

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("User created successfully")
            })
    }
    return (
        <div>
            <h1>Add A New Users</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder="Your name" id="" />
                <br />
                <input type="email" name="email" placeholder="Your email" id="" />
                <br />
                <input type="password" name="password" placeholder="Your password" id="" />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default SimpleForm;