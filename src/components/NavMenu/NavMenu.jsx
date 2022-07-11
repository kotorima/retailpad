import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import routes from "../../routing/routes";
import styles from './styles.module.scss';

function NavMenu() {
  const {active, list, link} = styles;
  
    return (
      <div>
        <nav>
          <ul className={list}>
          {routes.map(({id, path, element}) => {
            let {title} = element.props;
            title = title !== 'Retail Pad' ? title : null;
            return (<li key={id} className={link}>
                <NavLink  to={path} className={({isActive}) => isActive ? active : undefined}>{title}</NavLink>
              </li>
          )
          })}
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  }

  export default NavMenu;