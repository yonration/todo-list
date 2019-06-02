export let SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export let VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export let setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})