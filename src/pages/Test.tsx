import { Party } from '@features/parties/components'
import Parties from '@features/parties/components/Parties'

const Test = () => {
  return (
    <div>
      <Parties />
      <Party
        title='묘미 분식에서 밥 드실분 ~'
        pos='광주광역시 광산구 송정동 712번지 1층'
        date={new Date()}
        imgUrl='https://shorturl.at/lGHY3'
        peopleNum={8}
        isCompleted
      />
    </div>
  )
}

export default Test
