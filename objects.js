//array of objects
const blogs = [
    {title: 'dcsdfsdsdd', likes: 30},
    {title: 'dcgfdsdfsdsdd', likes: 40},
]
//object litteral
let user = {
    name: 'crystal',
    age: 30,
    email: 'fdsfsfsd@fdfds.com',
    blogs: [
        {title: 'dcsdfsdsdd', likes: 30},
        {title: 'dcgfdsdfsdsdd', likes: 40},
    ],
    //login: () =>{               //method with arrow function !!! wont work with this cause this will be the window object
    login: function(){ //better regular method is login(){}

        console.log('user logged in')
    },
    logBlogs(){
        console.log('these are the blogs:')
        this.blogs.forEach(blog => {   //callback function
            console.log(blog.title,blog.likes);
        })
    },

};
console.log(user);
console.log(user.name);
user.age = 35;
console.log(user.age); // dot notation to access
console.log(user['email']); // bracket notation useful to pass a key user[key]
user['name'] = 'tom';
user.login();
user.logBlogs();