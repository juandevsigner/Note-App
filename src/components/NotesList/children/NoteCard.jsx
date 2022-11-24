import { useDispatch } from "react-redux";
import { Card, Tooltip } from "antd";
import { useLocation } from "react-router-dom";
import {
  StarOutlined,
  EditOutlined,
  DeleteOutlined,
  FolderOpenOutlined,
  StarFilled,
} from "@ant-design/icons";
import { useToggleNote } from "../../../hooks/useToggleNote";
import {
  deleteNoteAction,
  loadNoteAction,
} from "../../../actions/notesActions";
import { showModalActionEdit } from "../../../actions";

export const NoteCard = ({ note }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id, title, description, featured } = note;
  const { handleFeatured, handleArchived } = useToggleNote(note);

  const handleDelete = async () => {
    await dispatch(deleteNoteAction(id));
  };

  const handleEdit = () => {
    dispatch(showModalActionEdit());
    dispatch(loadNoteAction(note));
  };

  return (
    <Card
      size="medium"
      title={title}
      className="noteslist__card"
      extra={
        <button
          onClick={handleFeatured}
          className={`noteslist__star ${
            location.pathname === "/archived" ? "hidden" : ""
          }`}
        >
          {featured ? <StarFilled /> : <StarOutlined />}
        </button>
      }
      actions={[
        <Tooltip title="Edit Note" placement="bottom">
          <button onClick={handleEdit}>
            <EditOutlined key="edit" />
          </button>
        </Tooltip>,
        <Tooltip
          title={
            location.pathname === "/archived"
              ? "Unarchived Note"
              : "Archived Note"
          }
          placement="bottom"
        >
          <button onClick={handleArchived}>
            <FolderOpenOutlined key="archived" />
          </button>
        </Tooltip>,

        <Tooltip title="Delete Note" placement="bottom">
          <button onClick={handleDelete}>
            <DeleteOutlined key="delete" />
          </button>
        </Tooltip>,
      ]}
    >
      <p className="noteslist__text">{description}</p>
    </Card>
  );
};
