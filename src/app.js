function aaaa(n) {
    let res = []
    for(let i=0;i<n;i++){
        if(i==0){
            continue;
        }
        if((i%3==0)&&(i%5==0)){
            res.push('FizzBuzz')
        } else if(i%3==0){
            res.push('Fizz')
        } else if(i%5==0){
            res.push('Buzz')
        } else (
            res.push(String(i))
        )
    }
    return res
};
console.log(aaaa(5));