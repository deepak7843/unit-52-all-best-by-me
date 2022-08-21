const getLocalData=(key)=>{
    if(key){
        const data= localStorage.getItem(key)
        // console.log(typeof(data));
        // console.log(data);
        return data
    }
}

const saveLocalData= (key, value)=>{
    if(key && value){
        localStorage.setItem(key, value)
    }
}

export {getLocalData, saveLocalData}