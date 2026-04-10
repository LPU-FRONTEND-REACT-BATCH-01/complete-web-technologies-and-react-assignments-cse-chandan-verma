let users = [
    {
        id: 1,
        username:"cse-chandan-verma",
        password:"chandanverma"
    },
    {
        id: 2,
        username:"cse-milind-kumar",
        password:"kumarmilind"
    },
    {
        id: 3,
        username:"cse-devansh-sharma",
        password:"devanshsharma"
    },
    {
        id: 4,
        username:"cse-abhishek-kumar",
        password:"abhishekkumar"
    }
]

let inputData = {
    username:"cse-chandan-verma",
    password: "chandanverma"
}

let result = users.some(ele => ele.username === inputData.username)

if(result){
    let valid = users.find(pass => pass.password === inputData.password)
    if(valid.password == inputData.password){
        console.log("Welcome to Home Page")
        console.log(valid)
    }else{
        console.log("Invalid Password")
    }
}
else{
    console.log("User Not found")
}