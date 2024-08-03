import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToastNotifier() {
    return <ToastContainer autoClose={3000} newestOnTop={true} />;
}
