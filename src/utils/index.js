/**
 * 将树形结构数据转换为平行结构数据
 * @param tree
 * @returns {Array}
 */
export function treeToList(tree) {
  let queen = []
  const out = []
  queen = queen.concat(tree)
  while (queen.length) {
    var first = queen.shift()
    if (first.children) {
      queen = queen.concat(first.children)
      delete first['children']
    }

    out.push(first)
  }
  return out
}
