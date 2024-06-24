import React, { useEffect, useState } from "react";
import { usePostUserMutation } from "../../../context/api/UserApi";

const initialState = {
  name: "",
  age: "",
};

const CreateUser = () => {
  const [createUser, { isLoading, isSuccess }] = usePostUserMutation();

  const [newUser, setNewUser] = useState(initialState);

  useEffect(() => {
    if (isSuccess) {
      setNewUser(initialState);
    }
  }, [isSuccess]);

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(newUser);
  };

  return (
  <div className="pr__body">
      <div className="product__wrapper">
      <h2>Create User</h2>
      <form className="create__form" onSubmit={handleCreateUser}>
        <input
        className="create__input"
          type="text"
          value={newUser.name}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="Name"
        />
        <input
        className="create__input"
          type="number"
          value={newUser.age}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, age: e.target.value }))
          }
          placeholder="Age"
        />
        <button className="create__btn" type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  </div>
  );
};

export default CreateUser;
