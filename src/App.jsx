import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
      <BrowserRouter>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh]">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;