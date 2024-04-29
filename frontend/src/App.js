import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import NewServiceInnerContent from "./components/ServiceInnerContents/NewServiceInnerContent";
import PageNotFound from "./components/NotFound/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewServiceInnerContent />}>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<MovieList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
