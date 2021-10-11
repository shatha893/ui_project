function all(array,callback_fun)
{
    let result = array.filter(value=> callback_fun(value));
    if(result.length === array.length) return true;
    return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


function contains(obj, val){
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            return contains(obj[key], value);
        }

        if (obj[key] === val){
            return true;
        }
    }
    return false;
}