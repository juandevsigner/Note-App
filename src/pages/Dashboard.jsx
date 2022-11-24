import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getNotesAction } from "../actions/notesActions";
import { BtnFloat, ModalAdd, ModalEdit, Navbar } from "../components/Dashboard";
import { Sidebar } from "../components/Dashboard";
import { useSelector } from "react-redux";
import { Spin } from "antd";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.notes);

  useEffect(() => {
    const downloadNotes = () => dispatch(getNotesAction());
    downloadNotes();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="container">
        {loading ? <Spin className="spinner" size="large" /> : null}
        <Outlet />
      </main>
      <BtnFloat />
      <ModalAdd />
      <ModalEdit />
    </div>
  );
};
