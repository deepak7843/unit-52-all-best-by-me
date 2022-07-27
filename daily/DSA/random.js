let obj={

    1:35,
    4:67,
    a:54,
    b:"boy",
};

console.log(obj);

let d="k3", p=100 , e="k4", f="k5";
obj={...obj, d:p , e:56, [f]:23 }

console.log(obj);