import "./styles.css";
import { InlineStyle } from "./components/InlineStyle";
import { ClassModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledCompopnets } from "./components/StyledCompopnets";
import { Emotion } from "./components/Emotion";
export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <ClassModules />
      <StyledJsx />
      <StyledCompopnets />
      <Emotion />
    </div>
  );
}
