const _ = require('lodash')

const arr = [1,[2,3],4,[9,0]]

const newArr = _.flatten(arr)
console.log(newArr)