export const PUT_USER = 'PUT_USER'
export const REMOVE_USER = 'REMOVE_USER'
export let putUser = user => ({
  type: PUT_USER,
  user
})
export let removeUser = () => ({
  type: REMOVE_USER
})