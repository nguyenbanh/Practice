import { MenuProvider } from "../../contexts/MenuContext";
import AppMenu from "./AppMenu";

const AppSidebar = (props: { sidebarRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <>
      <div ref={props.sidebarRef} className="layout-sidebar">
        <div className="sidebar-header">
          <img height={51} src="/images/mategroud_logo.svg" alt="" />
        </div>
        <div className="layout-menu-container">
          <MenuProvider>
            <AppMenu />
          </MenuProvider>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;
