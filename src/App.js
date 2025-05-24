import AppRoute from "./routes/AppRoute";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import AppLayout from './layouts/AppLayout';
import './App.css';

function App() {
  return (
    <div className="main-app-container">
      <AppLayout />
      <AppRoute />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="onex-toast"
      />
    </div>
  );
}

export default App;
