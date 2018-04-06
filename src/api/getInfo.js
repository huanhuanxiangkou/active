import { baseAxios } from '@/config/axios-instance'

/**
 * 登录
 */
export const userLogin = (password, username) => baseAxios.get('/user/login/' + password + '/' + username)

/**
 * 注册
 */
export const userRegister = data => baseAxios.get('user/operation', data)