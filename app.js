var reinitializePermutation = function(n) {
    let steps = 0
    let perm = createArray(n)

    do{
        const arr = []
        for(let i=0; i < perm.length; i++){
            arr[i] = perm[i % 2 === 0 ? i/2 : n/2 + (i-1)/2]
        }
        steps++
        perm = arr
    } while(perm[1] !== 1)
    return steps
};

function createArray(n){
    const arr = []
    for(let i=0; i < n; i++){
        arr[i] = i
    }
    return arr
}