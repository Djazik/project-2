import React, { useEffect } from "react";
import ".//editModle.css";
import { usePutUserMutation } from "../../context/api/UserApi";

const EditModle = ({ setData, data }) => {
    let [updateUser, { isLoading,isSuccess}] = usePutUserMutation()

    useEffect(()=>{
        if(isSuccess){
            setData(null)
        }
    },[isSuccess])

    const handleUpdateUser = e => {
        e.preventDefault()
        let user = {
            name: data.name,
            age: data.age
        }
        updateUser({id: data.id, body: user})
        console.log(user)
    }
  return (
    <>
      <div onClick={() => setData(null)} className="edit__overlay"></div>
      <form onSubmit={handleUpdateUser} className="edit__wrapper">
        <h2>Update user</h2>
        <input
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
        />
        <input
          value={data.age}
          onChange={(e) =>
            setData((prev) => ({ ...prev, age: e.target.value }))
          }
          type="number"
        />
        <button disabled={isLoading}>{isLoading ? "...Loading": "Save"}</button>
        <button type="button"  onClick={() => setData(null)}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditModle;
