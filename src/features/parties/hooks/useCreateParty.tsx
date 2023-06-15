import createPartyApi from '@features/parties/services/createParty'
import { createFormType } from '@features/parties/type/createFormType'
import env from '@lib/env'
import storage from '@storage'
import { InputFile } from 'node-appwrite'
import { useForm } from 'react-hook-form'

const useCreateParty = () => {
  const { register, handleSubmit } = useForm<createFormType>()
  const [create] = createPartyApi.useCreatePartyMutation()

  const onSubmit = handleSubmit(async (form) => {
    const image = await storage.createFile(
      env.VITE_BUCKET_ID,
      'hello',
      InputFile.fromBlob(form.image[0], form.image[0].name)
    )
    console.log(image)

    // create({
    //   ...form,
    //   image: res.data.image,
    // })
  })

  return { register, onSubmit }
}

export default useCreateParty
