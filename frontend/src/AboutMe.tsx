interface AboutMeProps {
  name: string;
  techStack: string[];
}

export const AboutMe = ({ name, techStack }: AboutMeProps) => {
  return (
    <div>
      Ich bin {name} und ich kann {techStack.join(", ")}!
      <ul>
        {techStack.map((technology) => {
          return <li key={technology}>{technology}</li>;
        })}
      </ul>
    </div>
  );
};
