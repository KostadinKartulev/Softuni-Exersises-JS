(function solve() {
    Array.prototype.last=function(){
        return this[this.length-1];
    }
    Array.prototype.skip=function(n){
        return this.slice(n);
    }
    Array.prototype.take=function(n){
        return this.slice(0,n);
    }
    Array.prototype.sum=function(n){
        let sum=this.reduce((previous, current) => {
            return previous+current;
        }, 0);
        return sum;
    }
    Array.prototype.average=function(){
        let average=this.reduce((previous, current) => {
            return previous+current;
        }, 0);
        average=average/this.length;
        return average;
    }
})();