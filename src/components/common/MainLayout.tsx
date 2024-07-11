import { useEventListener } from "primereact/hooks";
import { Tooltip } from "primereact/tooltip";
import { classNames } from "primereact/utils";
import { useContext, useEffect, useRef } from "react";
import AppBreadCrumb from "./AppBreadCrumb";
import AppFooter from "./AppFooter";
import AppTopbar from "./AppTopbar";
import { Outlet } from "react-router-dom";
import { LayoutContext } from "../../contexts/LayoutContext";
import { DataProvider } from "../../contexts/DataContext";

const Layout = () => {
  const { layoutConfig, layoutState, setLayoutState } =
    useContext(LayoutContext);

  const topbarRef = useRef<any>(null);
  const sidebarRef = useRef<any>(null);
  const copyTooltipRef = useRef(null);

  const [bindMenuOutsideClickListener] = useEventListener({
    type: "click",
    listener: (event) => {
      const isOutsideClicked = !(
        sidebarRef.current.isSameNode(event.target) ||
        sidebarRef.current.contains(event.target) ||
        topbarRef.current.menubutton.isSameNode(event.target) ||
        topbarRef.current.menubutton.contains(event.target)
      );
      if (isOutsideClicked)
        setLayoutState((prevLayoutState: any) => ({
          ...prevLayoutState,
          staticMenuMobileActive: false,
        }));
    },
  });

  useEffect(() => {
    if (layoutState.staticMenuMobileActive) {
      bindMenuOutsideClickListener();
    }
  }, [layoutState.staticMenuMobileActive]);

  const containerClassName = classNames(
    "layout-wrapper",
    {
      "layout-static": layoutConfig.menuMode === "static",
      "layout-static-inactive":
        layoutState.staticMenuDesktopInactive &&
        layoutConfig.menuMode === "static",
      "layout-mobile-active": layoutState.staticMenuMobileActive,
    },
    layoutConfig.colorScheme === "light"
      ? "layout-sidebar-" + layoutConfig.menuTheme
      : ""
  );

  return (
    <DataProvider>
      <div className={containerClassName} data-theme={layoutConfig.colorScheme}>
        <Tooltip
          ref={copyTooltipRef}
          target=".block-action-copy"
          position="bottom"
          content="Copied to clipboard"
          event="focus"
        />

        <div className="layout-content-wrapper">
          <AppTopbar ref={topbarRef} sidebarRef={sidebarRef} />
          <div className="layout-content pl-4 pr-4">
            <AppBreadCrumb />

            <Outlet />
          </div>
          <AppFooter />
        </div>
        <div className="layout-mask"></div>
      </div>
    </DataProvider>
  );
};

export default Layout;
