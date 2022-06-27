import "../styles.css";

export default function Block(props) {
  const { index, children } = props;

  return (
    <div className="Block" style={{ "--i": index }}>
      <a href="#/">{children}</a>
    </div>
  );
}
