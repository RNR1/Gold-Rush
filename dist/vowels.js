const countVowels = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
    for (char of str) {
        vowels.includes(char.toLowerCase()) ? counter+= 1 : undefined
    }
    return counter
}

countVowels("") //?

const findMissingNumber = arr => {
    let MIN = 1
    let MAX = 10
    let found = -1
    for (i in arr) {
        if ()
    }
    return
}

findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10]) //?