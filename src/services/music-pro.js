import trae from 'trae'
import configService from './config'

const musicProService = trae.create({
  baseUrl: configService.apiUrl
})

export default musicProService
