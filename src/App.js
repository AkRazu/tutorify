import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
