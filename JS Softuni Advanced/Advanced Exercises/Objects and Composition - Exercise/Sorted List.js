function createSortedList() {
    let result = {
        list: [],
        add(element) {
            this.list.push(element);
            this.size++;
            result.list.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size--;
            }

        },
        get(index) {
            return this.list[index];
        },
        size: 0,
    }
    
    return result;
}

let list = createSortedList();
list.add(9);
list.add(8);
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.get(3));
