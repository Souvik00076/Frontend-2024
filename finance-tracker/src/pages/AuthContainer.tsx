import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ImageAuthBackgroundIcon } from "../constants/image-index";
export const AuthContainer: FC = () => {
  return (
    <div className="h-screen flex ">
      <div className="flex-1">
        <img
          src={ImageAuthBackgroundIcon}
          alt="Auth background"
          className="h-full"
        />
      </div>
      <div
        className="flex-1
      h-full
      container
      mx-auto
      flex-col
      "
      >
        <Outlet />
      </div>
    </div>
  );
};
