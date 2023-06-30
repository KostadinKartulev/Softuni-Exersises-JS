function furniture(arrInput) {
   
    let pattern=/>>([A-Z]+[a-z]*)<<(\d+\.*\d*)!(\d+)/;
    
    let totalMoneySpend=0;
    let arrFurniture=[];

    

    for (let line of arrInput) {
        if (line=="Purchase") {
            break;
        }
        let match=pattern.exec(line);
        if (match!==null) {
            arrFurniture.push(match[1]);
            totalMoneySpend+=Number(match[2])*Number(match[3]);
            
        }
    }

    console.log("Bought furniture:");
    for (let item of arrFurniture) {
        console.log(item);
    }
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);

}

furniture(
['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);
furniture(
['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
);
furniture(
['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
);