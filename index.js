const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/playground")
.then(()=>console.log('Connected to mongodb'))
.catch((err)=>console.log('Failed to connect mongodb'));

const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
})
async function getCourses(){
let Course=mongoose.model('Course',courseSchema);
let course=new Course({
    name:'angular crash course',
    author:'vinit',
    tags:['frontend','jaascript','html,css'],
    isPublished:true
});
//save in database
const result=await course.save();
console.log(result)


const pageNumber=2;
const pageSize=10;
   //query documents
 const courses=await Course
//  .find({
//     author:'priya',
//     isPublished:true
//  })
//  .find({price:10})
// .find({price:{
//     $gt:10
// }})
// .find({
//     price:{
//         $gte:10,
//         $lte:20
//     }
// })
// .find({
//     price:{
//         $in:[10,20,30]
//     }
// })



// logical operators
// .find()
// .or([{author:'vinit'},{isPublished:true}])
// .and([])


//regular expression
//starts with
.find({author:/^priya/i})
//ends with
.find({author:/priya$/i})
//contains 
.find({author:/.*priya.*/i})
.skip((pageNumber-1)*pageSize)
.limit(pageSize)

    // .limit(2)
    .sort({
        name:-1
    })
    // .select({
    //     name:1,
    //     tags:1
    // })
    // .count()
// console.log(courses)



//comparison query operators
//complex queries

//eq(equal)
//ne(not equal)
//gt(greater than)
//gte(greater than or equal)
//lt(less than)
//lte(less than or equal)
// in
//not in



//logical operators
// or and 


//regular expressions

}
getCourses();

async function updateCourses(id){
let Course=mongoose.model('Course',courseSchema);
const course=await Course.findById(id);
if(!course) return;
course.isPublished=true;
course.author='sunanda'

const result=await course.save()
console.log(result)
}
updateCourses("63d0c2d73dc7cfe860a974ce");