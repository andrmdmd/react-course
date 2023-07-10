import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [data, setData] = useState([
    { name: "Alex", age: 15 },
    { name: "Alex", age: 15 },
  ]);
  const [error, setError] = useState();
  const addUser = (item) => setData([...data, item]);
  const deleteUser = (key) =>
    setData(data.filter((item, index) => index !== key));
  return (
    <div>
      <AddUser onSubmit={addUser} onError={(title, text) => setError({title: title, text: text})} />
      <UsersList data={data} onDelete={deleteUser} />
      {error && (
        <ErrorModal
          title={error.title}
          text={error.text}
          onDismiss={() => {
            setError();
          }}
        />
      )}
    </div>
  );
}

export default App;
