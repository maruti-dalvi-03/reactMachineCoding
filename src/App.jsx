import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CounterDoc from "./pages/CounterDoc";
import TodoDoc from "./pages/TodoDoc";
import StarRatingDoc from "./pages/StarRatingDoc";
import PaginationDoc from "./pages/PaginationDoc";
import DebounceSearchDoc from "./pages/DebounceSearchDoc";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/counter" />} />
            <Route path="/counter" element={<CounterDoc />} />
            <Route path="/todo" element={<TodoDoc />} />
            <Route path="/star-ratings" element={<StarRatingDoc />} />
            <Route path="/pagination" element={<PaginationDoc />} />
            <Route path="/debounce-search" element={<DebounceSearchDoc />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
