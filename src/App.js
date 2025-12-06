import React, { Suspense, lazy } from "react";
import "./App.css";

const LoaderComponent = lazy(() => import("./components/Loader/Loader"));
const Home = lazy(() => import("./pages/home/home"));

function App() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <Home />
    </Suspense>
  );
}

export default App;
