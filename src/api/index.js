/**
 * 页面请求方式
 */
import { getKeyItem } from '@/utils/auth'
import request from '@/utils/request'
import qs from 'qs'
/**
 * 编辑巡检配置
 * @param params
 */
export function demo(params) {
  return request({
    url: 'https://www.tq-service.com/unity/apiapp.do?isVerification&deviceNum=D62427143',
    method: 'get',
    params: { ...params, ProjectCode: getKeyItem('projectCode'), function: getKeyItem('function') }
  })
}
/**
 * 应用详情
 * @param params
 */
export function demo1(data) {
  return request({
    url: 'http://smartwx-api.tq-service.com/auth/om-provider-skylog/skylog/statistical/countAppVisit',
    method: 'post',
    params: ({ ...data, ProjectCode: getKeyItem('projectCode'), function: getKeyItem('function') })
  })
}

