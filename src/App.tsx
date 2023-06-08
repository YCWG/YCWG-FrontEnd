import * as P from '@pages'
import * as L from '@layouts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      element: <L.DefaultLayout />,
      children: [
        {
          path: '/signin',
          element: <P.Signin />,
        },
        {
          path: '/signup',
          element: <P.Signup />,
        },
        {
          path: '/parties',
          element: <P.Parties />,
        },
        {
          path: '/test',
          element: <P.Test />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
