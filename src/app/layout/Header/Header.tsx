import profileImage from '@/assets/profile.png';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <a href="/">
        <h1>Bookstore</h1>
      </a>
      <img className={classes.profileImage} src={profileImage}></img>
    </header>
  );
}

export default Header;
