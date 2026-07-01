import { type FC } from "react";
import { UserPanelUI } from "./ui/UserPanel";
import { useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";

export interface UserPanelProps {
  className?: string;
}

export const UserPanel: FC<UserPanelProps> = ({ className }) => {
  const userName = useAppSelector((state) => state.user.name);
  const userAvatar = useAppSelector((state) => state.user.avatar);
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/profile')
  };

  const handleCheckStats = () => {
    navigate('/stats');
  };

  return (
    <UserPanelUI
      userName={userName}
      userAvatar={userAvatar}
      className={className}
      onEditProfile={handleEditProfile}
      onCheckStats={handleCheckStats}
    />
  );
};
