import { type FC } from "react";
import { UserPanelUI } from "./ui/UserPanel";
import { useAppSelector } from "../../hooks/hooks";

export interface UserPanelProps {
  className?: string;
}

export const UserPanel: FC<UserPanelProps> = ({ className }) => {
  const userName = useAppSelector((state) => state.user.name);
  const userAvatar = useAppSelector((state) => state.user.avatar);

  const handleEditProfile = () => {
    // TODO: открыть модалку редактирования профиля
    console.log("Edit profile clicked");
  };

  const handleCheckStats = () => {
    // TODO: открыть модалку статистики профиля
    console.log("Stats clicked");
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
