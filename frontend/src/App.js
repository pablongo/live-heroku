import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/users")
      .then((result) => result.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(users);
  return (
    <div>
      {users?.map((user) => (
        <div>
          <h2>{user.username}</h2>
          <h3>{user.developer}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
