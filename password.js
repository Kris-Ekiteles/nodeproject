const password= require('generate-password');
const newPassword = password.generate({
    length: 10,
    numbers: true
});
console.log("Password is: ", newPassword);