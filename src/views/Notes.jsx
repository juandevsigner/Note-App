import { Divider } from "antd";
import { NotesList } from "../components";

export const Notes = () => {
  return (
    <>
      <Divider>
        <h1 className="container__heading">My Notes</h1>
      </Divider>
      <NotesList />
    </>
  );
};
