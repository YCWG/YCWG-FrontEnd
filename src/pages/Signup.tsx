import { SignupForm, Title } from '@features/auth'
import * as L from '@layouts'

const Signup = () => {
  return (
    <L.AuthLayout>
      <Title />
      <SignupForm />
    </L.AuthLayout>
  )
}

export default Signup
