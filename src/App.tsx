import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';

import AppLayout from './ui/AppLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import NoteDetailsPage from './pages/NoteDetailsPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import NotesContextProvider from './store/notes-context/NotesContextProvider.tsx';
import NoteManagerPage from './pages/NoteManagerPage.tsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: (
      <ErrorPage
        status={404}
        title="Page not found."
        subTitle="Please check the URL and try again."
      />
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/notes" replace />,
      },
      {
        path: '/notes',
        element: <HomePage />,
      },
      {
        path: '/notes/:page',
        element: <HomePage />,
      },
      {
        path: '/note/:id',
        element: <NoteDetailsPage />,
      },
      {
        path: '/add-note',
        element: <NoteManagerPage />,
      },
      {
        path: '/add-note/:id',
        element: <NoteManagerPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <NotesContextProvider>
      <RouterProvider router={router} />
    </NotesContextProvider>
  );
};

export default App;
