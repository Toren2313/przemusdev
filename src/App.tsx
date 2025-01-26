import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main.page";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/przemusdev/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
