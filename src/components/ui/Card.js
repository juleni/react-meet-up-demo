import classes from "./Card.module.css";

// wrapper component for Items
function Card(props) {
  return (
    <div className={classes.card}>
      {/* just pass JSX content from children's components */}
      {props.children}
    </div>
  );
}

export default Card;