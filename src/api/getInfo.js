import { baseAxios } from '@/config/axios-instance'

/**
 * 登录
 */
export const userLogin = (password, username, role) => baseAxios.get('/user/login/' + password + '/' + username + '/' + role)

/**
 * 注册
 */
export const userRegister = data => baseAxios.post('user/operation', data)

// 发布活动

export const editStuatus = (id, status ) => baseAxios.get('activity/editStuatus/' + id + '/' + status)

export const editHold = (id) => baseAxios.get('activity/editStuatus/' + id)

export const findOne = (id) => baseAxios.get('activity/findOne/' + id)

export const userpublish = data => baseAxios.post('activity/operation ', data)
