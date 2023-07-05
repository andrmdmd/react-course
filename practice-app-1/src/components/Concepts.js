import Concept from "./Concept";
import './Concepts.css';

export default function Concepts(props) {
  return (
    <ul id="concepts">
      {props.data.map((item) => (
        <Concept data={item} />
      ))}
    </ul>
  );
}
