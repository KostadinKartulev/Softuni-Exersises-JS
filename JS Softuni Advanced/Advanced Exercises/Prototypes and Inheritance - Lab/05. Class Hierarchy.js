function returnClasses() {
    class Figure{
        constructor(units='cm'){
            this.units=units;
        }
        get area(){

        }
        convertUnits(valueToConvert){
            if (this.units==='cm') {
                return valueToConvert
            }else if(this.units==='mm'){
                return valueToConvert*10;
            }else if(this.units==='m'){
                return valueToConvert/100;
            }
        }
        changeUnits(value){
            this.units=value;
        }
        toString(){
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure{
        constructor(radius,units){
            super(units);
            this._radius=radius;
        }
        get area(){
            this.radius=this.convertUnits(this._radius);
                return Math.PI*(this.radius**2);
        }
        toString(){
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        #height;
        #width;
        constructor(width,height,units){
            super(units);
            this.#height=height;
            this.#width=width;
        }
        get area(){
            this.height=this.convertUnits(this.#height);
            this.width=this.convertUnits(this.#width);
            return this.width*this.height;
        }
        toString(){
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let objWithClasses=returnClasses();
let c = new objWithClasses.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new objWithClasses.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
