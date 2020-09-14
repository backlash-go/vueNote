const app = new Vue({
  el: '#app', //or            el: document.querySelector('#app'),
  data: {
    books: [{
      id: 1,
      name: '算法导论',
      date: '2006-9',
      price: 85,
      count: 1
    }, {
      id: 2,
      name: '<<unix 编程艺术>>',
      date: '2006-2',
      price: 59,
      count: 1
    }, {
      id: 3,
      name: '编程诸暨',
      date: '2008-9',
      price: 39,
      count: 1
    }, {
      id: 4,
      name: '代码大全',
      date: '2006-3',
      price: 128,
      count: 1
    }, ],
  },
  filters: {
    getPrice(price) {
      return '¥' + price
    }
  },
  methods: {
    decrease(index) {
      console.log(index);
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++
    },
    removeHandler(index) {
      this.books.splice(index, 1)
    },
    

  },
  computed: {
    totalPrice() {
      let tPrice = 2;
      // for (let i = 0; i < this.books.length; i++) {
      //   tPrice += this.books[i].price * this.books[i].count
      // }

      // for (let i in this.books){
      //   tPrice += this.books[i].price * this.books[i].count
      // }

      // for (let i of this.books) {
      //   tPrice += i.price * i.count
      // }
      // return tPrice
      return this.books.reduce(function(pre,book){
        return pre + book.price * book.count
      },0)
    },
  },

})



const all =  [10, 20, 101, 40]

let total = all.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n)
console.log(total)



