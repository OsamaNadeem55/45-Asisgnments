// TASK 32
let current_users : string [] = ["Hani","Aqsa","Noor","Bilal","Hassan","fajur"]
let new_users : string [] = ["hani","fajur","Inaaya","Haram","Arham","Aliya"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())
for (let new_user of new_users){
    if(current_users_lower.includes(new_user.toLowerCase())){
        console.log(`Sorry ${new_user} , that username is taken`)
    }
     else{
        console.log(`${new_user}, username is available`)
     }
}
