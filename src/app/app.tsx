// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { RouterProvider } from 'react-router-dom';
import Router from './routes';

export function App() {
  return <RouterProvider router={Router} />;
}

export default App;
