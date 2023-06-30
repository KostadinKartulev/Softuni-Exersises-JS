function Sequence2kplus1(input){
    let endnum=Number(input[0]);
    let i=1;
    let num=1
    while (true) {
        if (num>endnum) {
            break;
        }
        console.log(num)
        num=(num*2)+1;
    }
}
Sequence2kplus1(["8"]);

