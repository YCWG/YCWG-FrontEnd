import { SigninForm, Title } from '@features/auth'
import * as L from '@layouts'

const Signin = () => {
  return (
    <L.AuthLayout>
      <Title />
      <SigninForm />
    </L.AuthLayout>
  )
}

export default Signin
