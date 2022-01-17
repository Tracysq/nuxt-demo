export default ({$axios}, inject) => {
  return inject('api', {
    todos: () => $axios.$get('/todos/2')
  })
}
