let num1 
let num2
console.log('Digite o primero numero');
process.stdin.once('data', function(data){
    let inp = Number(data)
    num1 = inp
    console.log('Digite o segundo numero');
    process.stdin.once('data', function(data) {
        let inp2 = Number(data)
        num2 = inp2
        
        let numMax = Math.max(num1, num2)
        let mmc = 0

        while (true) {
            if(numMax % num1 === 0 && numMax % num2 === 0){
                mmc = numMax
                    break;
            }
        numMax++
    }
    console.log(`${mmc}`);
    process.exit()
    })
})
