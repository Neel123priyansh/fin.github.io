import { BrowserRouter } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import ApplyInterceptor from './ApplyInterceptor'
import { ToastContainer } from 'react-toastify';
import RootRoutes from './routes/RootRoutes';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <ApplyInterceptor />
        <RootRoutes/>
        <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
