import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <a href="/">
        <h1>Bookstore</h1>
      </a>
      <button>Add a Book</button>
    </header>
  );
}

export default Header;
