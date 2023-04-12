import { useRef } from "react";

export const DemoForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!titleRef.current) {
      return;
    }

    const title = titleRef.current.value;

    console.log(title);

    titleRef.current.value = "";
  };

  console.log("titleRef", titleRef);

  return (
    <>
      <h1>Demo Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" ref={titleRef} />{" "}
        <button type="submit">Create</button>
      </form>
    </>
  );
};
