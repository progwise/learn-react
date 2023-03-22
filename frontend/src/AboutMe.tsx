import styled from "@emotion/styled";
import "./AboutMe.css";
import classes from "./AboutMe.module.css";

interface AboutMeProps {
  name: string;
  techStack: string[];
  hobbies: string[];
}

const StyledUl = styled.ul<{ small?: boolean }>`
  list-style: none;
  font-size: ${(props) =>
    props.small ? props.theme.fontSizes.small : props.theme.fontSizes.big};

  & li {
    padding: 30px;
  }
`;

const StyledUl2 = styled(StyledUl)`
  font-family: "Comic Sans";
`;

export const AboutMe = ({ name, techStack, hobbies }: AboutMeProps) => {
  return (
    <div
      className="about-me"
      // style={{
      //   backgroundColor: "#ffcbcb",
      //   padding: "20px",
      //   borderRadius: "20px",
      // }}
    >
      Ich bin {name} und ich kann {techStack.join(", ")}!
      <ul className={classes.List}>
        {techStack.map((technology) => {
          return <li key={technology}>{technology}</li>;
        })}
      </ul>
      <StyledUl>
        {hobbies.map((hobby) => {
          return <li key={hobby}>{hobby}</li>;
        })}
      </StyledUl>
      <StyledUl small>
        <li>Eintrag 1</li>
        <li>Eintrag 2</li>
      </StyledUl>
      <StyledUl2>
        <li>Eintrag 1</li>
        <li>Eintrag 2</li>
      </StyledUl2>
    </div>
  );
};
