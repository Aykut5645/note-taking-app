import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout.tsx';
import Home from './pages/Home.tsx';
import AddNote from "./pages/AddNote.tsx";
import NoteDetails from "./pages/NoteDetails.tsx";
import EditNote from "./pages/EditNote.tsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: Error Page,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/note/:id',
        element: <NoteDetails />,
      },
      {
        path: '/add-note',
        element: <AddNote />,
      },
      {
        path: '/edit-note/:id',
        element: <EditNote />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;