import { Divider } from "antd";
import { NotesList } from "../components";

export const NoteFeatured = () => {
  return (
    <>
      <Divider>
        <h1 className="container__heading">Notes Featured</h1>
      </Divider>
      <NotesList />
    </>
  );
};
