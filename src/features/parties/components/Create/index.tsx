import { Button, Input } from '@components'
import useCreateParty from '@features/parties/hooks/useCreateParty'
import FoodKind from '@features/parties/components/FoodKind'
import Textarea from '@features/parties/components/Textarea'
import Image from '@components/Image'
import * as S from './style'

const Create = () => {
  const { onSubmit, register } = useCreateParty()

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <div>
        <Image {...register('image', { required: true })} />
      </div>
      <Input
        placeholder='파티 이름 입력'
        {...register('title', { required: true })}
      />
      <S.FoodAndDate>
        <FoodKind {...register('category')} />
        <Input
          type='date'
          placeholder='모임 날짜'
          {...register('date', { required: true })}
        />
      </S.FoodAndDate>
      <Input
        placeholder='모임 장소 입력'
        {...register('place', { required: true })}
      />
      <Input
        type='number'
        placeholder='최대 인원 수'
        {...register('member_limit', { required: true })}
      />
      <Textarea
        placeholder='파티 설명을 적어주세요 ~ (생략 가능합니다!)'
        {...register('description')}
      />
      <input
        type='number'
        hidden
        readOnly
        defaultValue={342}
        {...register('latitude', { required: true })}
      />
      <input
        type='number'
        hidden
        readOnly
        defaultValue={234}
        {...register('longitude', { required: true })}
      />

      <Button type='submit'>파티 생성</Button>
    </S.Wrapper>
  )
}

export default Create
