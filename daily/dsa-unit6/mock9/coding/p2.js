function check(n,str){
    var c=0
    for(var i=0;i<n;i++){
        if(str[i]>str[i+1]) c++
    }
    console.log(c)
}