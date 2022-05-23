
import { header } from './style.module.scss';

function Header() {
  console.log(header);

  return (
    <div className={header}>
      <h1>Hello, World!</h1>
      <button>Жамк</button>
    </div>
  );
}

export default Header;
