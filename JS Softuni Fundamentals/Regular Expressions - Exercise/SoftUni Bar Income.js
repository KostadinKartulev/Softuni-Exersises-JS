function softUniBarIncome(arrInput) {
    
    let totalIncome=0;
    let pattern=/%(?<name>[A-Z]+[a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.1-9]*(?<price>\d+(?:\.\d+)?)\$/;

    for (let line of arrInput) {
        
        if (line=="end of shift") {
            break;
        }
        let validOrder=pattern.exec(line);
        if (validOrder!==null) {
            let totalPrice=Number(validOrder.groups.price)*Number(validOrder.groups.count);
            totalIncome+=totalPrice;
            console.log(`${validOrder.groups.name}: ${validOrder.groups.product} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(
['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);
softUniBarIncome(
['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
);