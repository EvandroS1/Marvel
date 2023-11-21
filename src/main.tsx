import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Character from "./routes/Character";
import store from "./store/index.ts";
import { Provider } from "react-redux";
import SearchPage from "./routes/SearchPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "searchPage",
    element: <SearchPage />,
  },
  {
    path: "SearchPage/character/:id",
    element: <Character />,
  },
  {
    path: "/character/:id/character/:id",
    element: <Character />,
  },
  {
    path: "character/:id",
    element: <Character />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
