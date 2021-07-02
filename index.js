// Code your solutions in this file
function writeCards(names, adj) {
    let answer =[]
    for (let i = 0; i < names.length; i++){
        console.log(`Thank you, ${names[i]}, for the wonderful ${adj} gift!`)
        answer.push(`Thank you, ${names[i]}, for the wonderful ${adj} gift!`)
    }
    return answer
}

function countDown(number) {
    for (let i = number; i>=0; i--){
        console.log(i)
    }
}

