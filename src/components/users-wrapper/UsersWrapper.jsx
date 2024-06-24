import React, { memo, useState } from "react";
import "../productwrapper/index.css";
import { useDeleteUserMutation } from "../../context/api/UserApi";
import EditModle from "../edit-modle/EditModle";

const UsersWrapper = ({ users, isAdmin }) => {
  const [editUser, setEditUser] = useState(null);

  let [deleteUser, { isLoading }] = useDeleteUserMutation();

  let userItems = users?.map((user) => (
    <div key={user.id} className="product__cart">
      <div className="product__img">
        <img src={user.avatar} alt={user.name} />
      </div>
      <div className="product__title">
        <h2 className="pr__title">{user.name}</h2>
        <p>{user.age}</p>
      </div>
      <p className="pr__text">
        There are many things are needed to start the Fast Food Business.
      </p>
      <div className="product__btn">
        {isAdmin ? (
          <div className="pr__edit">
            <button className="product__edit" onClick={() => setEditUser(user)}>
              edit
            </button>
            <button
              className="product__edit"
              onClick={() => deleteUser(user.id)}
            >
              delete
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>


  ));

  return (
    <div>
      <section className="container">
        <div className="menu__wrapper">
          <div className="menu">
            <h2 className="menu__title">User</h2>
            <h3 className="menu__text">Food Full of treaty Love</h3>
            <p className="menu_long__text">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers,
            </p>
          </div>
          <div className="pr__cart">{userItems}</div>
        </div>
      </section>
      {editUser ? <EditModle data={editUser} setData={setEditUser}/> : <></>}
    </div>
  );
};

export default memo(UsersWrapper);
