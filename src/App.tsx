import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MessageBoard from './MessageBoard';
import AllPosts from './AllPosts';
import PostView from './PostView';
import Welcome from './Welcome';
import NavBar from './NavBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MessageBoard />,
        children: [
          {
            path: ':pageNumber',
            element: <AllPosts />,
          },
          {
            path: 'post/:postId',
            element: <PostView />,
          },
        ],
      },
      {
        path: 'welcome',
        element: <Welcome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
