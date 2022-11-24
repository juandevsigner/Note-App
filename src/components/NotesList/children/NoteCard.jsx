import { Card, Tooltip } from "antd";
import {
  StarOutlined,
  EditOutlined,
  DeleteOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

export const NoteCard = () => {
  return (
    <Card
      size="medium"
      title="Note Tittle"
      className="noteslist__card"
      extra={
        <button className="noteslist__star">
          <StarOutlined />
        </button>
      }
      actions={[
        <Tooltip title="Edit Note" placement="bottom">
          <button onClick={() => console.log("edit")}>
            <EditOutlined key="edit" />
          </button>
        </Tooltip>,
        <Tooltip title="Archived Note" placement="bottom">
          <button onClick={() => console.log("archived")}>
            <FolderOpenOutlined key="archived" />
          </button>
        </Tooltip>,

        <Tooltip title="Delete Note" placement="bottom">
          <button onClick={() => console.log("delete")}>
            <DeleteOutlined key="delete" />
          </button>
        </Tooltip>,
      ]}
    >
      <p className="noteslist__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to{" "}
      </p>
    </Card>
  );
};
