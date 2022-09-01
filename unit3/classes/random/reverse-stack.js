var st=[1,2,3]
var r= reverse()

console.log(r);

function reverse(){

    if(st.length>0){
        var x=st[st.length-1]
        st.pop
        reverse()
        insert(x)
    }
}

function insert(x){
    if(st.length===0){
        st.push(x)
    }
    else{
      var a=st[st.length-1]
      st.pop()
      insert(x)
      st.push(a)
    }
}

