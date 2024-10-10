import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.wrapper}>
          <nav>
            <Link to="/project/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/project/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/project/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/project/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/project/history" onClick={handleLinkClick}>
              History
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
