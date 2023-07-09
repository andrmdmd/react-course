import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [data, setData] = useState([
    { name: "Alex", age: 15 },
    { name: "Alex", age: 15 },
  ]);
  const addUser = (item) => setData([...data, item]);
  return (
    <div>
      <AddUser onSubmit={addUser} />
      <UsersList data={data} />
    </div>
  );
}

export default App;
