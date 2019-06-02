export let getId = type => {
  return `${type}_${Math.random().toString(36).slice(2, 9)}`
}
export let getTime = () => {
  return (new Date()).getTime()
}