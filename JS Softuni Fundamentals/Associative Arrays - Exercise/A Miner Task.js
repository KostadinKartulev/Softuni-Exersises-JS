function minerTask(arrInput) {
  
    let resources={};
    for (let i = 0; i < arrInput.length; i+=2) {
        let resourceName=arrInput[i];
        let resourceQuantity=Number(arrInput[i+1]);

        if (resources.hasOwnProperty(resourceName)) {
            resources[resourceName]+=resourceQuantity;
        } else {
            resources[resourceName]=resourceQuantity;
        }
        
    }

    for (let resourceName in resources) {
       console.log(resourceName,"->",resources[resourceName]);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );