import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import { IUser } from "./types";

export default function ProfileContainer() {
  const navigate = useNavigate();
  const user = useSelector(
    (state: RootState) => state.Authentication.user
  ) as IUser;

  useEffect(() => {
    if (!user) navigate("/unauthorized");
  }, []);

  return (
    <div className="mt-[120px] h-full">
      <UserDashboard role={user?.role} />
    </div>
  );
}
