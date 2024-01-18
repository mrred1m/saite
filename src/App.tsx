import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Components/layout/DefaultLayout";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
