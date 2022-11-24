import { useEffect, useState } from "react";
import { Modal, Input, Button, Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { hiddenModalActionEdit, editNoteAction } from "../../../actions";

export const ModalEdit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const { modalShowEdit } = useSelector(state => state.dashboard);
  const { loading, noteEdit } = useSelector(state => state.notes);
  const { TextArea } = Input;
  const dispatch = useDispatch();

  const handleOk = async () => {
    if ([title, description].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }
    const { id, featured, archived } = noteEdit;

    const noteNew = {
      title,
      description,
      id,
      featured,
      archived,
    };
    await dispatch(editNoteAction(noteNew));
    dispatch(hiddenModalActionEdit());
  };

  const handleCancel = () => {
    dispatch(hiddenModalActionEdit());
  };

  useEffect(() => {
    const getNoteToEdit = () => {
      if (noteEdit) {
        const { title, description } = noteEdit;
        setTitle(title);
        setDescription(description);
      }
    };
    getNoteToEdit();
  }, [noteEdit]);

  return (
    <Modal
      title="Edit Note"
      open={modalShowEdit}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ top: "30%" }}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Update Note
        </Button>,
      ]}
    >
      <form>
        {error ? (
          <Alert
            style={{ marginBottom: 15 }}
            message="All fields are required"
            type="error"
            showIcon
          />
        ) : null}

        <Input
          style={{ marginBottom: 15 }}
          size="large"
          placeholder="Put a title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextArea
          size="large"
          placeholder="Put a description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </form>
    </Modal>
  );
};
