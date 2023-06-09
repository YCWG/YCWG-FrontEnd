import { Header } from '@components'
import { Create } from '@features/parties/components'
import * as L from '@layouts'
import * as SVG from '@assets/svg'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header
        center='파티모집'
        right={
          <div onClick={() => navigate(-1)}>
            <SVG.Xmark />
          </div>
        }
      />
      <L.PartiesLayout>
        <Create />
      </L.PartiesLayout>
    </>
  )
}

export default CreatePage
