import Button from '@mui/material/Button';
import styles from './styles.module.scss';

function Header () {
  const {header} = styles;

  return (
    <div className={header}>
      <h1>Hello World!</h1>
      <Button variant="contained">Button</Button>
    </div>
  );
}

export default Header;

