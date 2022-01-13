export function jsonParse(data = '', defaultValue?: any) {
  try {
    return JSON.parse(data)
  } catch (e) {
    console.warn('[jsonParse]', e)

    // 默认传递 undefined 的值
    return defaultValue
  }
}

export function jsonStringify(data: any): string {
  try {
    // 当 stringify 值为 undefined 时，返回空字符串
    return JSON.stringify(data) || ''
  } catch (e) {
    console.warn('[jsonStringify]', e)

    // 出现异常时返回空字符串
    return ''
  }
}
