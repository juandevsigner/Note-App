import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleArchivedAction, toggleFeaturedAction } from "../actions/notesActions";


export const useToggleNote =(note)=>{

    const dispatch = useDispatch();
   const { id, title, description, featured, archived } = note;
    const [featuredToggle, setFeaturedToggle] = useState(!featured);
    const [archivedToggle, setArchivedToggle] = useState(!archived);

  const handleFeatured = async () => {

    setFeaturedToggle(!featuredToggle);
    const changeFeatured = {
      id,
      title,
      description,
      featured: featuredToggle,
      archived
    };
    await dispatch(toggleFeaturedAction(changeFeatured));
  };

   const handleArchived = async () => {

    setArchivedToggle(!archivedToggle);
    const changeArchived = {
      id,
      title,
      description,
      featured : false,
      archived: archivedToggle
    };
    await dispatch(toggleArchivedAction(changeArchived));
  };

  return{
    handleFeatured,
    handleArchived
  }
}