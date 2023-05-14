import * as P from '@pages'
import * as L from '@layouts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      element: <L.DefaultLayout />,
      children: [
        {
          path: '/login',
          element: <P.Login />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
