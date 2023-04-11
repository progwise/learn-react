interface AboutMeProps {
  name: string;
  age: number;
  children: React.ReactNode;
  hobbies: string[];
}

export const AboutMe = (props: AboutMeProps) => {
  return (
    <div>
      <h2>
        Hello, I'm {props.name} and I am {props.age} year old.
      </h2>
      Hobbies:
      <ul>
        {props.hobbies.map((hobby) => {
          return <li key={hobby}>{hobby}</li>;
        })}
      </ul>
      {props.children}
    </div>
  );
};
