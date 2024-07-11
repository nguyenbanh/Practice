import { Fragment, ReactNode, useContext } from "react";
import { ROLES_ENUM } from "../../constants/accountConstant";
import { AuthContext, AuthContextType } from "../../contexts/AuthContext";
import Unauthorized from "./UnAuthorized";
import { ROUTER } from "../../routers/router";

type AuthorizeProps = {
  children?: ReactNode;
  mode?: "view" | "access";
  hasPermission?: boolean;
};
const Authorize = ({ children, mode, hasPermission }: AuthorizeProps) => {
  const { user } = useContext<AuthContextType>(AuthContext);

  const isSupperAdmin = user?.role?.includes(ROLES_ENUM.SUPER_ADMIN);

  let check = false;

  if (hasPermission && isSupperAdmin) {
    check = true;
  }

  if (!hasPermission && user) {
    check = true;
  }

  if (check) {
    return <Fragment>{children}</Fragment>;
  } else if (mode === "access") {
    if (!user) {
      window.location.href = ROUTER.LOGIN;
    } else {
      return <Unauthorized />;
    }
  } else {
    return null;
  }
};

export default Authorize;
