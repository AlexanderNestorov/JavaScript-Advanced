function solve(arg1,arg2,arg3,arg4,arg5,arg6) {
    let number = Number(arg1);

    let commands =  new Array(arg2,arg3,arg4,arg5,arg6);



    for (let i = 0; i < commands.length; i++) {
        
        switch(commands[i]) {
            case 'chop':
                number /= 2;
            break;
            case 'dice':
                number = Math.sqrt(number);
            break;
            case 'spice':
                number++;
            break;
            case 'bake':
                number *= 3;
            break;
            case 'fillet':
                number *= 0.80;
            break;
        }
        console.log(number);
    }
    
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
