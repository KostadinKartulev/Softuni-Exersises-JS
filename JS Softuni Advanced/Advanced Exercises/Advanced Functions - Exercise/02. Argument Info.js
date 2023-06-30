function outputInfoOfArguments(...arguments) {
   let types={};
   for (let arg of arguments) {
    let type=typeof(arg);
    if (types.hasOwnProperty(type)) {
        types[type]+=1;
    }else{
        types[type]=1;
    }
    console.log(`${type}: ${arg}`);
   }
   let sorted=Object.entries(types).sort((a,b)=>b[1]-a[1]);
   sorted.forEach(x=>console.log(`${x[0]} = ${x[1]}`));

}
outputInfoOfArguments('cat', 42, function () { console.log('Hello world!'); });
console.log('-----------------------');
outputInfoOfArguments({ name: 'bob'}, 3.333, 9.999);
