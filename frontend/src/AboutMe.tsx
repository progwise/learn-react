interface AboutMeProps {
  name: string;
  age: number;
}

export const AboutMe = (props: AboutMeProps) => {
  return (
    <div>
      <h2>
        Hello, I'm {props.name} and I am {props.age} year old.
      </h2>
      Hobbies:
      <ul>
        <li>Sailing</li>
        <li>Coding</li>
      </ul>
    </div>
  );
};
