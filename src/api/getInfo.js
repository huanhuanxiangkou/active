import {
  baseAxios
} from '@/config/axios-instance'

/**
 * 登录
 */
export const userLogin = (password, username, role) => baseAxios.get('/user/login/' + password + '/' + username + '/' + role)

/**
 * 注册
 */
export const userRegister = data => baseAxios.post('/user/operation', data)

/**
 * admin
 */
export const adminUserRegister = data => baseAxios.post('/user/admin/operation', data)
/**
 * 查询单个用户
 */
export const getUserById = id => baseAxios.get('/user/findOne/' + id)
/**
 * 活动发布
 */
export const userpublish = data => baseAxios.post('/activity/operation', data)

/**
 * 获取活动列表
 */
export const getAllActivitys = data => baseAxios.get('/activity/getActivitys', data)

/**
 * 对对对
 */
export const editStuatus = (id, status) => baseAxios.get('/activity/editStuatus/' + id + '/' + status)

/**
 * 对对对
 */
export const editHold = (id) => baseAxios.get('/activity/editHold/' + id + '/' + status)

/**
 * 查询单条活动
 */
export const findOne = (id) => baseAxios.get('/activity/findOne/' + id)

/**
 * 根据关键字查询活动
 */
export const findActivityByKey = (name) => baseAxios.get('/activity/findTypeByName/' + name)
/**
 * 收藏活动
 */
export const collectionActivity = (data) => baseAxios.post('/collection/operation', data)
/**
 * 取消收藏
 */
export const cancelCollection = (activityId) => baseAxios.delete('/collection/operation', {
  params: {
    id: activityId
  }
})

/**
 * 查询用户收藏的活动
 */
export const getCollectionActivitys = (userId) => baseAxios.get('/collection/findByUser', {
  params: {
    user_id: userId
  }
})

/**
 * 修改和审批评论
 */
export const commentUpdate = (data) => baseAxios.post('/comment/operation/', data)

/**
 * 获取收藏的状态
 */
export const getCommentsByUser = (status) => baseAxios.get('/comment/findByStatus/', {
  params: {
    status: status
  }
})

/**
 * 活动报名
 */
export const activitySignup = (data) => baseAxios.post('/signup/operation', data)

/**
 * 查看用户报名的活动
 */
export const getSignupActivitys = (userID) => baseAxios.get('/signup/findByUser', {
  params: {
    user_id: userID
  }
})
