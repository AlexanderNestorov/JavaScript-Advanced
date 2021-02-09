
class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.box = this._initialize();
        this.online = false;
    }
 
    get online() {
        return this._online;
    }
 
    set online(value) {
        this._online = value;
        this.update()
    }
 
    update() {
        let div = this.box.querySelector('.title');
        if (this.online) {
            div.classList.add('online');
        } else {
            div.classList.remove('online');
        }
    }
    _initialize() {
        let divTitle = document.createElement('div');
        divTitle.classList.add('title');
        divTitle.innerHTML = `${this.firstName} ${this.lastName}<button>&#8505;</button>`;
        divTitle.querySelector('button').addEventListener('click', () => {
            divInfo.style.display = divInfo.style.display === 'block' ? 'none' : 'block';
        })
 
        let divInfo = document.createElement('div');
        divInfo.innerHTML = `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`;
        divInfo.classList.add('info');
        divInfo.style.display = 'none';
 
        let article = document.createElement('article');
        article.appendChild(divTitle);
        article.appendChild(divInfo);
 
        return article;
    }
    render(id) {
        document.getElementById(id).appendChild(this.box);
    }
}


function solve() {
let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 1);
}