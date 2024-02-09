import MainNavigation from "../components/navbar/MainNavigation";
import { Outlet } from "react-router-dom";
import Modal from "../components/modal/Modal";
import { useSelector } from "react-redux";
import FavModal from "../components/modal/favmodal/FavModel";
export default function RootLayout() {
  const { open, favOpen } = useSelector((state) => state.modal);

  return (
    <>
      <MainNavigation />
      {open && <Modal />}
      {favOpen && <FavModal />}
      <Outlet />
    </>
  );
}
