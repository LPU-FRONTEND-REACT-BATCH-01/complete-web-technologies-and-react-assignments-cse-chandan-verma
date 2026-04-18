// let arr = [120,303, 143, 343, 323]

// let a = arr[0]
// console.log(a)
// let[a,b,c] = arr

let users = {
    id: 1,
    username: "Nick",
    userLocation:{
        city: "Jalandhar",
        state: "Punjab"
    },
    phone: "65678767565",
    skills:{
        frontend: ["react", "HTML", "CSS"],
        backend: ["JAVA", "Springboot"]
    }
}

// let {
//     username,
//     id,
//     userLocation:{
//         city,
//         state
//     },
//     phone,
//     skills:{
//         frontend: [React, HTML, CSS],
//         backend: [JAVA, Springboot]
//     }
// } = users

// console.log(React, HTML, JAVA)

export const Uname = users.username;

