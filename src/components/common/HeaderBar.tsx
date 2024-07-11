import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Ripple } from "primereact/ripple";
import { Sidebar } from "primereact/sidebar";
import { StyleClass } from "primereact/styleclass";
import { forwardRef, useContext, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "../../contexts/AuthContext";
import { USER_ROUTE } from "../../routers/router";
import { DataContext } from "../../contexts/DataContext";

const HeaderBar = forwardRef(() => {
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const { addUser } = useContext<AuthContextType>(AuthContext);
  const [openedRightSidebar, setOpenedRightSidebar] = useState(false);
  const { carts = [] } = useContext(DataContext); 

  const navigate = useNavigate();

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Ống hút", code: "NY" },
    { name: "Cốc mate", code: "RM" },
    { name: "Trà", code: "LDN" },
  ];
  

  return (
    <>
      <div className="layout-topbar ml-0 w-full h-auto">
        <div className="topbar-left">
          <Link to={USER_ROUTE.HOME}>
            <img
              id="logo-horizontal"
              src="/images/mategroud_logo.svg"
              alt="diamond-layout"
            />
          </Link>

          <Button
            label="Sản phẩm"
            severity="warning"
            outlined
            onClick={() => navigate(USER_ROUTE.PRODUCT)}
          />
        </div>

        <div className="topbar-right">
          <ul className="topbar-menu">
            <li className="right-sidebar-item">
              <a onClick={() => setOpenedRightSidebar(true)}>
                <i className="pi pi-align-right"></i>
              </a>
            </li>
            <li>
              <IconField iconPosition="right">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search" className="h-3rem" />
              </IconField>
            </li>

            <li className="hidden md:block">
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Chọn loại"
                className="w-full md:w-14rem"
              />
            </li>
            <li
              className="static sm:relative"
              onClick={() => navigate(USER_ROUTE.MY_CART)}
            >
              <StyleClass
                nodeRef={btnRef1}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="fadeout"
                hideOnOutsideClick
              >
                <a tabIndex={0} ref={btnRef1}>
                  <i className="pi pi-shopping-cart"></i>
                  <span className="topbar-badge">{carts.length}</span>
                </a>
              </StyleClass>
            </li>

            <li className="profile-item static hidden md:block">
              <StyleClass
                nodeRef={btnRef2}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="fadeout"
                hideOnOutsideClick={true}
              >
                <a tabIndex={1} ref={btnRef2}>
                  <img
                    src={`/demo/images/avatar/profile.jpg`}
                    alt="diamond-layout"
                    className="profile-image"
                  />
                  <span className="profile-name">TanNC</span>
                </a>
              </StyleClass>
              <ul className="list-none p-3 m-0 border-round shadow-2 absolute surface-overlay hidden origin-top w-full sm:w-19rem mt-2 right-0 z-5 top-auto">
                <li
                  onClick={() => {
                    navigate(USER_ROUTE.HOME);
                    addUser({ role: ["ADMIN"] });
                  }}
                >
                  <a className="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer">
                    <i className="pi pi-user mr-3"></i>
                    <span className="flex flex-column">
                      <span className="font-semibold">Admin</span>
                    </span>
                    <Ripple />
                  </a>
                </li>
                <li
                  onClick={() => {
                    navigate(USER_ROUTE.MY_ORDER);
                  }}
                >
                  <a className="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer">
                    <i className="pi pi-user mr-3"></i>
                    <span className="flex flex-column">
                      <span className="font-semibold">Lịch sử mua hàng</span>
                    </span>
                    <Ripple />
                  </a>
                </li>
                <li
                  onClick={() => {
                    navigate(USER_ROUTE.ORDER_SUMMARY);
                  }}
                >
                  <a className="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer">
                    <i className="pi pi-user mr-3"></i>
                    <span className="flex flex-column">
                      <span className="font-semibold">Giỏ hàng</span>
                    </span>
                    <Ripple />
                  </a>
                </li>
                <li
                  onClick={() => {
                    navigate(USER_ROUTE.ORDER_SUMMARY);
                  }}
                >
                  <a className="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer">
                    <i className="pi pi-user mr-3"></i>
                    <span className="flex flex-column">
                      <span className="font-semibold">Đăng xuât</span>
                    </span>
                    <Ripple />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
      <Sidebar
        visible={openedRightSidebar}
        onHide={() => setOpenedRightSidebar(false)}
        content={({ closeIconRef, hide }) => (
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
              style={{ width: "280px" }}
            >
              <div className="flex flex-column h-full">
                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                  <img
                    id="logo-horizontal"
                    src="/images/mategroud_logo.svg"
                    alt="diamond-layout"
                    className="cursor-pointer"
                    onClick={() => {
                      navigate(USER_ROUTE.HOME);
                      setOpenedRightSidebar(false);
                    }}
                  />
                </div>

                <div className="overflow-y-auto">
                  <ul className="list-none p-3 m-0">
                    <li>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li
                          onClick={() => {
                            navigate(USER_ROUTE.HOME);
                            setOpenedRightSidebar(false);
                          }}
                        >
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Trang chủ</span>
                            <Ripple />
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            navigate(USER_ROUTE.PRODUCT);
                            setOpenedRightSidebar(false);
                          }}
                        >
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-bookmark mr-2"></i>
                            <span className="font-medium">Sản phẩm</span>
                            <Ripple />
                          </a>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef2}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef2}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-chart-line mr-2"></i>
                              <span className="font-medium">Loại</span>
                              <i className="pi pi-chevron-down ml-auto mr-1"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Trà mate</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Cốc mate</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Ống hút</span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef1}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef1}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-chart-line mr-2"></i>
                              <span className="font-medium">Cá nhân</span>
                              <i className="pi pi-chevron-down ml-auto mr-1"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li
                              onClick={() => {
                                navigate(USER_ROUTE.MY_CART);
                                setOpenedRightSidebar(false);
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Giỏ hàng</span>
                                <span
                                  className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                  style={{
                                    minWidth: "1.5rem",
                                    height: "1.5rem",
                                  }}
                                >
                                  3
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                navigate(USER_ROUTE.MY_ORDER);
                                setOpenedRightSidebar(false);
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">
                                  Lịch sử mua hàng
                                </span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Đăng xuất</span>
                            <Ripple />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    </>
  );
});

export default HeaderBar;

HeaderBar.displayName = "HeaderBar";
