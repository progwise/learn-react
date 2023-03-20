interface AboutMeProps {
  name: string;
  techStack: string[];
  hobbies: string[];
}

export const AboutMe = ({ name, techStack, hobbies }: AboutMeProps) => {
  return (
    <div>
      Ich bin {name} und ich kann {techStack.join(", ")}!
      <ul>
        {techStack.map((technology) => {
          return <li key={technology}>{technology}</li>;
        })}
      </ul>
      <ul>
        {hobbies.map((hobby) => {
          return <li key={hobby}>{hobby}</li>;
        })}
      </ul>
    </div>
  );
};
