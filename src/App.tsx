import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import * as P from '@/pages'

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
