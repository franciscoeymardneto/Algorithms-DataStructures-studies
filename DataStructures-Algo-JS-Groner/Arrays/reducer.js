const nums = [1,2,3,4,5,6,7,8]

// Acc é o valor RETORNADO anteriormente
// Item é o valor atual
const sum = nums.reduce((acc,item) => {
    if (item < acc) {
        return item
    }

    return acc
},0)

console.log(sum);