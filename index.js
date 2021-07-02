// Code your solutions in this file
function writeCards(names, adj) {
    let answer =[]
    for (let i = 0; i < names.length; i++){
        console.log(`Thank you, ${names[i]}, for the wonderful ${adj} gift!`)
        answer.push(`Thank you, ${names[i]}, for the wonderful ${adj} gift!`)
    }
    return answer
}

function forcountDown(number) {
    for (let i = number; i>=0; i--){
        console.log(i)
    }
}

function countDown(number){
    let i = number;
    while (i >= 0){
        console.log(i--)

    }
}

