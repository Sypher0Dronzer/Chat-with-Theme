import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import ThemeSwitcher from "../ThemeSwitcher";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <div className="flex justify-between">
          <div className=" btn" onClick={logout}>
            <BiLogOut className="size-6  cursor-pointer" />
            <p>logout</p>
          </div>
          <ThemeSwitcher position={"dropdown-top dropdown-end"} visibility={'visible'}/>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
