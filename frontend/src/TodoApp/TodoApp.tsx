import { useRef } from "react";

export const TodoApp = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (inputRef.current) {
      const newTaskTitle = inputRef.current.value;
      alert("submitted: " + newTaskTitle);
    }
  };

  return (
    <>
      <ul>
        <li>Buy groceries</li>
        <li>Clean up</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
        <button type="submit">Create</button>
      </form>
    </>
  );
};
