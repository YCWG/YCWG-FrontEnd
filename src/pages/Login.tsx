import { SigninForm } from '@features/auth'
import * as L from '@layouts'

const Login = () => {
  return (
    <L.DefaultLayout>
      <SigninForm />
    </L.DefaultLayout>
  )
}

export default Login
