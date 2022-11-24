import { Divider } from "antd";
import { NotesList } from "../components";

export const NoteArchived = () => {
  return (
    <>
      <Divider>
        <h1 className="container__heading">Notes Archived</h1>
      </Divider>
      <NotesList />
    </>
  );
};
