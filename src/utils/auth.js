import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setItem(value) {
  sessionStorage.setItem(TokenKey, value)
}
export function setKeyItem(key, value) {
  sessionStorage.setItem(key, value)
}

export function getKeyItem(key) {
  return sessionStorage.getItem(key)
}

export function getItem() {
  return sessionStorage.getItem(TokenKey)
}

/**
 * 链接参数
 * @param variable
 * @returns {string|boolean}
 */
export function getRequest(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] === variable) {
      return pair[1]
    }
  }
  return (false)
}
