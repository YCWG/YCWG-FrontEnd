export interface createFormType extends Omit<Party, 'image' | 'now_member'> {
  image: FileList
}
