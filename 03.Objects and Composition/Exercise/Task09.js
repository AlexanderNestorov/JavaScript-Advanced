function sortedList() {
    return {
      list: [],
      size: 0,
      add: function (element) {
        this.list.push(element);
        this.size++;
        this.list.sort((a, b) => a - b);
      },
      remove: function (index) {
        if (this.size > index && index >= 0) {
          this.size--;
          this.list.splice(index, 1);
        }
      },
      get: function (index) {
        if (this.size > index && index >= 0) {
          return this.list[index];
        }
      }
    };
  }

  let list = sortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));