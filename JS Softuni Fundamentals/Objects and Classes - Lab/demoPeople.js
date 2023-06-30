function peopleInfo(arr) {
    let people = {};
    for (let i = 0; i < arr.length; i+=2) {
       
           people[arr[i]]=arr[i+1];
        
    }
    console.log(people);
}
bogi(["bogi", 15, "kostadin", 14, "Shefket", 12]);