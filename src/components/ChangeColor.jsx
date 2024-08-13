import { useDispatch } from "react-redux";
import { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" onChange={(event) =>{setColor(event.target.value)}} />
      <button onClick={()=>{
        dispatch(ChangeColor(color))
      }}>CHANGE COLOR</button>
    </div>
  );
};

export default ChangeColor;
