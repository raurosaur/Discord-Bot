module.exports = {
    name: 'role',
    description: 'add to \'general\' role',
    execute(reaction, user){
        addRole(reaction, user);
    }
}

var addRole = function (reaction, user){
    
}

var has = function(arr, el){
    for(let e of arr){
        if(el == e) return true;
    }
    return false;
}