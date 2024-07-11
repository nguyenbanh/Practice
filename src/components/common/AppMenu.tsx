import { ROUTER } from "../../routers/router";
import { MenuModal } from "../../types/layoutType";
import AppSubMenu from "./AppSubMenu";

const AppMenu = () => {
  const model: MenuModal[] = [
    {
      label: "",
      items: [
        {
          label: "Trang chủ   ",
          icon: "pi pi-fw pi-home",
          to: ROUTER.HOME,
        },
      ],
    },
    { separator: true },
    {
      label: "Quản lý sản phẩm",
      items: [
        {
          label: "Danh sách sản phẩm",
          icon: "pi pi-fw pi-users",
          to: ROUTER.PRODUCT_MANAGEMENT,
        },
        {
          label: "Thêm sản phẩm",
          icon: "pi pi-fw pi-users",
          to: ROUTER.NEW_PRODUCT,
        },
      ],
    },
    { separator: true },
    {
      label: "Quản lý đơn hàng",
      items: [
        {
          label: "Danh sách đơn hàng",
          icon: "pi pi-fw pi-users",
          to: ROUTER.ORDER_MANAGEMENT,
        },
       
      ],
    },


  ];

  return <AppSubMenu model={model} />;
};

export default AppMenu;
