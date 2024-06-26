import './App.css'

function App() {

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert("New user created successfully")
          form.reset()
        }

      })
  }
  return (
    <div>
      <h1>Simple CRUD Operations</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder='Your name' />
        <br />
        <input type="email" name="email" id="" placeholder='Your email' />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  )
}

export default App
