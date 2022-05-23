import styles from './styles.module.scss';

export default function Header () {
  const {header} = styles;

  return (
    <div className={header}>
      <h1>Hello, World!</h1>
      <button>Жамк</button>
    </div>
  );
}

