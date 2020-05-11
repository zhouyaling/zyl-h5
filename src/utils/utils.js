/**
 * 基本数据判断
 */

/**
 * 手机号判断
 * @param str
 * @returns {boolean}
 */
export function isPhone(str) {
  const re = /^1[345789]\d{9}$/
  if (re.test(str)) {
    return false
  } else {
    return true
  }
}

export function isEmail(str) {
  const re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  if (re.test(str)) {
    return false
  } else {
    return true
  }
}

/**
 *  时间格式话
 * @param str  Apr 12, 2019 10:42:47 AM
 * @returns {string}
 */

export function tiemFormat(str) {
  const timeStamp = new Date(str + '')
  const date = new Date(timeStamp)
  const date_value = date.getFullYear() + '-' + ten((date.getMonth() + 1)) + '-' + ten(date.getDate()) + ' ' + ten(date.getHours()) + ':' + ten(date.getMinutes()) + ':' + ten(date.getSeconds())
  return date_value
}

/**
 * 时间戳转化成标准时间 长度：13
 * @returns {string}
 */
export function toDate(number) {
  const n = number
  const date = new Date(n)
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const h = date.getHours() + ':'
  const m = date.getMinutes() + ':'
  const s = date.getSeconds()
  return (Y + M + D + ' ' + ten(h) + ten(m) + ten(s))
}

function ten(str) {
  return parseInt(str) < 10 ? '0' + str : str
}

/**
 * 长度：10
 * @param AddDayCount
 * @returns {string}
 * @constructor
 */
export const GetDateStr = function(AddDayCount, isYear) {
  const dd = new Date()
  dd.setDate(dd.getDate() + AddDayCount)
  const y = dd.getFullYear()
  const m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1)
  const d = dd.getDate()
  if (isYear) {
    return y + '-' + m + '-' + ten(d)
  } else {
    return m + '-' + ten(d)
  }
}

export const getDay = (day) => {
  const today = new Date()
  const targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day
  return toDate(targetday_milliseconds)
  // var tYear = today.getFullYear()
  // var tMonth = today.getMonth()
  // var tDate = today.getDate()
  // tMonth = GetDateStr(tMonth + 1)
  // tDate = GetDateStr(tDate)
  // console.log(tYear)
  // console.log(tMonth)
  // console.log(tDate)
  // // return tYear + '-' + tMonth + '-' + tDate
  // return '00'
}
