import * as P from '@pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
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
