// TASK 32
var current_users = ["Hani", "Aqsa", "Noor", "Bilal", "Hassan", "fajur"];
var new_users = ["hani", "fajur", "Inaaya", "Haram", "Arham", "Aliya"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, " , that username is taken"));
    }
    else {
        console.log("".concat(new_user, ", username is available"));
    }
}
