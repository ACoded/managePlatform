import { getParams } from '@/libs/util'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avator: 'http://10.32.3.11:9081/file/yhtx/ed35092b-edfe-417e-9266-e52008f9b93d_fkyjImgUpload.jpg'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avator: 'http://10.32.3.11:9081/file/yhtx/ed35092b-edfe-417e-9266-e52008f9b93d_fkyjImgUpload.jpg'
  }
}

export const login = req => {
  req = JSON.parse(req.body)
  return { token: USER_MAP[req.userName].token }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}
