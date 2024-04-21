import plusLogo from '@assets/plus.svg';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <a href="/">
        <h1>Bookstore</h1>
      </a>
      <button>
        <img src={plusLogo} alt="plus logo" />
        <span>Add a Book</span>
      </button>
    </header>
  );
}

export default Header;
