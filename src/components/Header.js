import PropTypes from "prop-types";
import Button from "./Button";

const Header = () => {
    const onClick = () => {
console.log('Click')
    }
  return (
    <header className="header">
      <h1>Tast Tracker</h1>
      <Button color="green" text="Hello" onClick={onClick}/>
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
