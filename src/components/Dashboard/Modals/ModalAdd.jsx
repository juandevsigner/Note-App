import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Input, Button, Alert } from "antd";
import { hiddenModalAction } from "../../../actions";
import { createNoteAction } from "../../../actions/notesActions";

export const ModalAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { TextArea } = Input;
  const { modalShow } = useSelector(state => state.dashboard);
  const { loading } = useSelector(state => state.notes);

  const handleOk = async () => {
    if ([title, description].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }
    const note = {
      title,
      description,
      featured: false,
      archived: false,
    };
    await dispatch(createNoteAction(note));
    dispatch(hiddenModalAction());
    setTitle("");
    setDescription("");
  };

  const handleCancel = () => {
    dispatch(hiddenModalAction());
  };

  return (
    <Modal
      title="Create Note"
      open={modalShow}
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
          Submit
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
