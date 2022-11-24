import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Dashboard } from "../pages/Dashboard";
import { NoteArchived, NoteFeatured, Notes } from "../views";
import store from "../store";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Notes />} />
            <Route path="featured" element={<NoteFeatured />} />
            <Route path="archived" element={<NoteArchived />} />
            <Route path="/*" element={<Notes />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
