import { Header } from '@components'
import GatherPartyChip from '@components/GatherPartyChip'
import Title from '@components/Title'
import Parties from '@features/parties/components/Parties'
import * as L from '@layouts'

const PartiesPage = () => {
  return (
    <>
      <Header left={<Title>진행 중인 파티</Title>} />
      <L.PartiesLayout>
        <Parties />
      </L.PartiesLayout>
      <GatherPartyChip />
    </>
  )
}

export default PartiesPage
