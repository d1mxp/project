import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link to="/project/beans">Beans</Link>
      <Link to="/project/facts">Facts</Link>
      <Link to="/project/recipes">Recipes</Link>
      <Link to="/project/combinations">Combinations</Link>
      <Link to="/project/history">History</Link>
    </nav>
  );
};
