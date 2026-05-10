import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, Project, Experience, ContactUs } from "../Pages";
import RootLayout from "./RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Project" element={<Project />} />
      <Route path="Experience" element={<Experience />} />
      <Route path="contact" element={<ContactUs />} />
    </Route>,
  ),
);

function Routers() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Routers;
