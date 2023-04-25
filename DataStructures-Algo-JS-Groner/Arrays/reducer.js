const nums = [1,2,3,4,5,6,7,8]

// O reducer serve para fazer uma redução do array 
// E para fazer transformações Array => number,string,obj...

// Acc é o valor RETORNADO anteriormente
// Item é o valor atual
const sum = nums.reduce((sum,item) => {
    if (item < sum) {
        return item
    }

    return sum
},0)

console.log('SOMA: ', sum);

const jojos = [
    {
        name: 'Jonanthan',
        type: 'Hamon'
    },
    {
        name: 'Joseph',
        type: 'Hamon'
    },
    {
        name: 'Jotaro',
        type: 'Stand'
    },
    {
        name: 'Josuke',
        type: 'Stand'
    },
    {
        name: 'Giorno',
        type: 'Requien'
    },
    {
        name: 'Jolyne',
        type: 'Stand'
    },
]

const jojosPerType = jojos.reduce((jojosPerType, jojo) => {
    jojosPerType[jojo.type] = jojosPerType[jojo.type] ?? []

    jojosPerType[jojo.type].push(jojo.name)
    
    return jojosPerType
}, {})

console.log(jojosPerType)