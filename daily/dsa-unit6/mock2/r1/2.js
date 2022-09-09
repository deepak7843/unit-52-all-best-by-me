function check(n,a){
    //  console.log(n,a)
    let s=[]
    for(let i=0;i<n;i++){
     if(a[i]=="b" || a[i]=="g" || a[i]=="s"){
        s.push(a[i])
     }
     else if(a[i]=="B"){
        if(s.includes("b")){
            s.push("B")
        }
     }
     else if(a[i]=="G"){
        if(s.includes("g")){
            s.push("G")
        }
     }
     else if(a[i]=="S"){
        if(s.includes("s")){
            s.push("S")
        }
     }
    }

    if(s.length==n){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
    
}
