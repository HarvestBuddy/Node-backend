require('dotenv').config()

const Admin = process.env.ADMIN_ROLE;
const User = process.env.USER_ROLE;
const Seller = process.env.SELLER_ROLE;
const Staff = process.env.STAFF_ROLE;

const Male = 'MALE';
const Female = 'FEMALE';
const Others  = 'OTHERS';


module.exports={Admin, User, Seller, Staff, Male, Female, Others}