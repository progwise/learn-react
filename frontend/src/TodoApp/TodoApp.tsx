import { useRef } from "react";

export const TodoApp = () => {
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputDescriptionRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const newTaskTitle = inputTitleRef.current?.value;
    const newTaskDescription = inputDescriptionRef.current?.value;

    alert("submitted: " + newTaskTitle + " " + newTaskDescription);
  };

  return (
    <>
      <ul>
        <li>Buy groceries</li>
        <li>Clean up</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input ref={inputTitleRef} />
        <input ref={inputDescriptionRef} />
        <button type="submit">Create</button>
      </form>
    </>
  );
};
