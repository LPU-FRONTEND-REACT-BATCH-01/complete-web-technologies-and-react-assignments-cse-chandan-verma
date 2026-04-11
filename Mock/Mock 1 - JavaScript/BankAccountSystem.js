let account = {
    balance: 0,
    property: "Personal",
    transactions: []
}

function deposit(amount){
    if(amount <= 0){
        console.log("Amount must be greater than 0")
        return
    }
    account.balance += amount
    account.transactions.push("Deposited: ₹"+amount)
    console.log("₹"+amount+" Deposited Successfully")
    return
}

function withdraw(amount){
    if(amount <= 0){
        console.log("Withdrawl amount must be greater than 0")
        return
    }
    if(amount > account.balance){
        console.log("Insufficient Balance!!!")
        return
    }
    if(account.balance - amount < 500){
        console.log("Minimum balance ₹500 must be maintained")
        return
    }
    if(amount > 10000){
        console.log("Maximum withdrawal is ₹10,000")
        return
    }

    account.transactions.push("Withdrawn: ₹"+amount)
    account.balance -= amount;
    console.log("₹"+amount+" Withdrawn Successfully")
    return 
}

function getBalance(){
    console.log("Current Balance: ₹"+account.balance)
    return
}

function getTransactions(){
    console.log("Transactions: ")
    account.transactions.map((transaction) => {
        console.log(transaction);
    });
    return 
}

deposit(2000)
withdraw(2500)
deposit(1000)

getBalance()
getTransactions()