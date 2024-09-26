//private fields

class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
  }
  //getters and setters

  //getter
  get balance() {
    return this.#balance;
  }

  //setter
  set balance(amount) {
    this.#balance = amount;
  }

  getBalance() {
    console.log(this.#balance);
  }
}

let acc = new BankAccount();
acc.balance = 100000000;
acc.getBalance()
