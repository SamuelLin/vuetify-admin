import request from '@/utils/request'

export function getExample() {
  return request.get('/example')
}
