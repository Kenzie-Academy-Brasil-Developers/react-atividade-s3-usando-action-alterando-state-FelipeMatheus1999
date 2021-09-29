import "./style.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);

  const handleClick = () => dispatch(changeName(newName));

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        onChange={(event) => setNewName(event.target.value)}
      />
      <button className="button" onClick={handleClick}>
        Change
      </button>
      <p className="p">Username: {name}</p>
    </div>
  );
};

export default UserCard;
