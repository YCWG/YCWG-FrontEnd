import createPartyApi from '@features/parties/services/createParty'
import { createFormType } from '@features/parties/type/createFormType'
import { useForm } from 'react-hook-form'

const useCreateParty = () => {
  const { register, handleSubmit } = useForm<createFormType>()
  const [create] = createPartyApi.useCreatePartyMutation()
  const [upload] = createPartyApi.useUploadImgMutation()

  const onSubmit = handleSubmit(async (form) => {
    const formData = new FormData()
    formData.append('image', form.image[0])
    const res = await upload(formData)
    if ('error' in res) return console.log(res.error)

    create({
      ...form,
      image: res.data.image,
    })
  })

  return { register, onSubmit }
}

export default useCreateParty
