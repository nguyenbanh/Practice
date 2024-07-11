import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";
import { useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppMenuItemProps } from "../../types/layoutType";
import { LayoutContext } from "../../contexts/LayoutContext";
import { MenuContext } from "../../contexts/MenuContext";

const AppMenuitem = (props: AppMenuItemProps) => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);
  const { isDesktop, setLayoutState } = useContext(LayoutContext);
  const { pathname } = useLocation();
  const submenuRef = useRef(null);
  const menuitemRef = useRef<any>(null);
  const item: any = props.item;
  const key = props.parentKey
    ? props.parentKey + "-" + props.index
    : String(props.index);
  const isActiveRoute = item.to && pathname === item.to;
  const active =
    activeMenu === key || !!(activeMenu && activeMenu.startsWith(key + "-"));

  const itemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    //avoid processing disabled items
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    //execute command
    if (item.command) {
      item.command({ originalEvent: event, item: item });
    }

    if (item.items) {
      setActiveMenu(active ? props.parentKey || "" : key);
    } else if (!isDesktop()) {
      setLayoutState((prevLayoutState: any) => ({
        ...prevLayoutState,
        staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive,
      }));
    }
  };

  const subMenu =
    item.items && item.visible !== false ? (
      <ul ref={submenuRef}>
        {item.items.map((child: any, i: any) => {
          return (
            <AppMenuitem
              item={child}
              index={i}
              className={child.badgeClass}
              parentKey={key}
              key={child.label}
            />
          );
        })}
      </ul>
    ) : null;

  return (
    <li
      ref={menuitemRef}
      className={classNames({
        "layout-root-menuitem": props.root,
        "active-menuitem": active,
      })}
    >
      {props.root && item.visible !== false && item.label && (
        <div className="layout-menuitem-root-text">{item.label}</div>
      )}
      {(!item.to || item.items) && item.visible !== false ? (
        <>
          <a
            href={item.url}
            onClick={(e) => itemClick(e)}
            className={classNames(item.class, "p-ripple")}
            target={item.target}
            data-pr-tooltip={item.label}
            tabIndex={0}
          >
            <i className={classNames("layout-menuitem-icon", item.icon)}></i>
            <span className="layout-menuitem-text">{item.label}</span>
            {item.items && (
              <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
            )}
            <Ripple />
          </a>
        </>
      ) : null}

      {item.to && !item.items && item.visible !== false ? (
        <>
          <Link
            to={item.to}
            // href={item.to}
            // replace={item.replaceUrl}
            onClick={(e) => itemClick(e)}
            className={classNames(item.class, "p-ripple ", {
              "active-route": isActiveRoute,
            })}
            tabIndex={0}
          >
            <i className={classNames("layout-menuitem-icon", item.icon)}></i>
            <span className="layout-menuitem-text">{item.label}</span>
            {item.items && (
              <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
            )}
            <Ripple />
          </Link>
        </>
      ) : null}
      {subMenu}
    </li>
  );
};

export default AppMenuitem;
