import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div
      style={{ zIndex: 5000 }}
      className="flex bg-white align-items-center gap-8 fixed top-0 left-0 h-full w-full"
    >
      <div
        className="align-self-center pt-2 pb-2"
        style={{
          width: "706px",
          minHeight: "calc(100% - 150px)",
          maxHeight: "100%",
        }}
      >
        <img src="" alt="connect" className="w-full h-full" />
      </div>

      <div className="flex align-items-center gap-3 p-3">
        <div style={{ width: "310px", height: "100%" }}>
          <img
            src=""
            alt="error"
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-column gap-3 flex-grow-1">
          <div className="text-6xl">accessDenied</div>
          <div className="text-2xl">unAuthorized</div>
          <div>
            <Button
              label={"Back"}
              type="button"
              severity="secondary"
              onClick={goBack}
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
