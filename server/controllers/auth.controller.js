import { parse } from "dotenv"

export const register = (req,res) => {
const { name , email , role , phoneNumber , password, jobseeker={}  , recruiter= {}} = req.body
// console.log(req.file)
const userData = {
  name , email , role , phoneNumber , password
}

if(role === 'jobseeker'){
 const parsedData = JSON.parse(jobseeker)

 userData.jobseeker = {
  ...parsedData ,
  resume : req.file.path
 }

 if(role === 'recruiter'){
  userData.recruiter = JSON.parse(recruiter)
 }
 console.log(userData)
}


console.log(userData)
}
export const postJob = (req,res)=>{
  console.log(req.user)
}




// //NOTE AUTHENTICATION AND AUTHORIZATION

// //mern application

// //concept roles and permission

// //organization => training institute 

// //different members => like 
// //nOTe trainers , manager , owner , student
// => role => permission
// => authorization => check => on api call

// => according to our application => 
// role => jobseeker , recruiter ,admin 

// resources => job , user 

// // role admin => job + user
// //role jobseeker => see jobs and apply 
// //recruiter => post job 



// //login => assign token => role => postjob as a jobseeker => role = jobseeker =>  check_role /create_job