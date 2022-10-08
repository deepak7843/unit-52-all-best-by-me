///////// solution sent by sanket to di....



function run(n,arr){
    arr = arr.sort((a,b)=>a-b);
    let largest = arr.pop();
    function getAll(arr){
        if(arr.length==0) return ['']
        let char = arr[0];
        arr.shift();
        let res = getAll(arr);
        let ans = []
        
        for(let x of res){
            ans.push(x)
            ans.push(char+' ' + x);
            
        }
        return ans;
        
    }
    let resp = getAll(arr);
    resp = resp.map(a=>a.trim().split(' '));
    for(let x of resp){
        let tmp = x.map(a=>+a);
        let sum = 0;
        for(let f of tmp) sum+=f;
        if(sum==largest){
            console.log('Yes')
            return;
        }
    }
    console.log('No')
    return;
}
function runProgram(input){
    input = input.trim().split('\n');
    let tt = +input[0];
    i = 1;
    while(tt--){
        let size = input[i];
        i++;
        let arr = input[i].trim().split(' ').map(Number);
        i++;
        run(size,arr);
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read="";
process.stdin.on("data",function(input){
    read+=input;
});
process.stdin.on("end",function(){
    read=read.replace(/\n$/,"");
    read=read.replace(/\n$/,'');
    runProgram(read);
});