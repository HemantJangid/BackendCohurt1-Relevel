const users = [
    ["Sanket", "ss@gmail.com", 23],
    ["Shivanshu", "sv@gmail.com", 20],
    ["pawan", "pw@gmail.com", 22],
];

console.log(users);
console.log(users[0]);
console.log(users[0][2]);
console.log(users[0][5]);

users.push(["Sanjay", "sj@gmail.com", 36]);
console.log(users);

users.shift();
console.log(users);
users.pop();
console.log(users);
users.unshift(["Sanket", "ss@gmail.com", 23]);
console.log(users);