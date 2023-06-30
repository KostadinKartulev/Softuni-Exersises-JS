function parseCats(arr) {
    class Cat{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats=[];
    for (let i = 0; i < arr.length; i++) {
        
        let arrInfo=arr[i].split(" ");
        let cat=new Cat(arrInfo[0],Number(arrInfo[1]));
        cats.push(cat);
        
    }
    for (let cat of cats) {
        cat.meow();
    }
    
}
parseCats(['Mellow 2', 'Tom 5']);
parseCats(['Candy 1', 'Poppy 3', 'Nyx 2']);