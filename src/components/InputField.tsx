import React, { FormEvent, useRef } from "react";
import "./styles.css";

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  return (
    <form className="input" onSubmit={(e)=> {
      handleAdd(e);
      inputRef.current?.blur(); //When you click the go button automatically reverse to light bakcground
      }}>
      <input ref={inputRef} value={todo} onChange={(e)=> setTodo(e.target.value)} 
      type="input" placeholder="Enter a task" className="input_box" />
      <button className="input_submit">Go</button>
    </form>
  );
};

export default InputField;
