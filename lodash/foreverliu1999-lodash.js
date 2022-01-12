// var foreverliu1999 = {
//   // chunk
//   chunk: (array, size) => {
//     // 如果ary小于size的长，则直接返回array
//     if (array.length <= size) {
//       return array;
//     }
//     let result = [];
//     let temp = [];
//     for (let i = 0; i < array.length; i++) {
//       temp.push(array[i]);
//       // 如果一旦temp长度达到size了，就把temppush进result里，并创建下一个temp空数组
//       if (temp.length == size) {
//         result.push(temp);
//         temp = [];
//       }
//     }
//     // array已经被全遍历完一遍了,把temp二号push进去就行了
//     if (temp.length !== 0) {
//       result.push(temp);
//     }
//     return result;
//   }
// }

// // compact
// compact: (array) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       result.push(array[i]);
//     }
//     return result;
//   }

//   // drop
//   drop: (array, number) => {
//     let result = [];
//     if (array.length <= number) {
//       return result;
//     }
//     else if (array.length > number) {
//       for (i = number; i < array.length; i++) {
//         result.push(array[i]);
//       }
//     }
//     return result;
//   }
// }

var foreverliu1999 = {
  chunk: function chunk(array, size) {
    var rns = [],
      temp = [],
      n = array.length
    for (var i = 0; i < n; i++) {
      temp.push(array[i])
      if (temp.length == size) {
        rns.push(temp)
        temp = []
      }
    }
    if (temp.length != 0) {
      rns.push(temp)
    }
    return rns
  },
  compact: function compact(array) {
    var rns = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        rns.push(array[i])
      }
    }
    return rns
  },
  drop: function drop(array, number = 1) {
    if (number == 0) {
      return array
    }
    if (array.length < number) {
      return []
    }
    let n = array.length
    let rns = []
    for (let i = number; i < n; i++) {
      rns.push(array[i])
    }
    return rns
  },
  dropRight: function dropRight(array, number = 1) {
    if (number == 0) {
      return array
    }
    if (array.length < number) {
      return []
    }
    let n = array.length
    let m = n - number
    let rns = []
    for (let i = 0; i < m; i++) {
      rns.push(array[i])
    }
    return rns
  },
  dropRightWhile: function dropRightWhile(array) {},
  dropWhile: function dropWhile(array) {},
  fill: function fill(array, value, start = 0, end = array.length) {
    for (i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  findindext: function findindext() {},
  findLastIndex: function findLastIndex() {},
  flatten: function flatten(array) {
    let rns = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (let j = 0; j < array[i].length; j++) {
          rns.push(array[i][j])
        }
      } else {
        rns.push(array[i])
      }
    }
    return rns
  },
  flattenDeep: function flattenDeep(array) {
    let rns = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (let j = 0; j < array[i].length; j++) {
          rns.push(array[i][j])
        }
      } else {
        rns.push(array[i])
      }
    }
    for (let i = 0; i < rns.length; i++) {
      if (Array.isArray(rns[i])) {
        rns = flattenDeep(rns)
      }
    }
    return rns
  },
  fromPairs: function fromPairs(pairs) {
    let ans = {}
    for (let i = 0; i < pairs.length; i++) {
      for (let j = 0; j < pairs[i].length; i++) {
        ans[pairs[i][j]] = ans[[i][j + 1]]
      }
    }
    return ans
  },
  head: function head(array) {
    if (array.length == 0) {
      return undefined
    } else {
      return array[0]
    }
  },
  indexOF: function indexOF(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },
  reverse: function reverse(array) {
    let rns = []
    for (let i = 0; i < array.length; i++) {
      rns.unshift(array[i])
    }
    return rns
  },
  uniq: function uniq(array) {
    let rns = []
    for (let i = 0; i < array.length; i++) {
      if (!rns.includes(array[i])) {
        rns.push(array[i])
      } else {
        break
      }
    }
    return rns
  },
  uniqBy: function uniqBy(array) {},
  without: function without(array, ...value) {
    let rns = []
    for (let i = 0; i < array.length; i++) {
      if (!array.includes(value[i])) {
        rns.push(value[i])
      }
    }
    return rns
  },
}