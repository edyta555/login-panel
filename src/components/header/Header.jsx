import styles from "./header.module.scss";

const Header = ({ isLoggedIn, onLogOut }) => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <h3>A sample page</h3>
      </div>
      <nav className={styles.navigation}>
        {isLoggedIn && (
          <ul>
            <li>
              <a href="/">Profile</a>
            </li>
            <li>
              <button onClick={onLogOut}>Log Out</button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
