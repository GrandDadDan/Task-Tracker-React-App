import PropTypes from "prop-types";
import Button from "./Button";

const Header = () => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>Tast Tracker</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
export default Header;
