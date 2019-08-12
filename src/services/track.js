import musicProService from './music-pro'

const trackService = {

}

trackService.search = function (q) {
  const type = 'track'

  return musicProService.get('/search', {
    params: { q: q, type: type }
  })
    .then(res => res.data)
}

trackService.getById = function (id) {
  return musicProService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
