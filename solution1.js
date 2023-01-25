const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mongo_exercises')
.then(()=>console.log('Database connected'))
.catch((err)=>console.log('Not connected succesfully'+err))

const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean,
    price:Number
});

const Course= mongoose.model('Course',courseSchema);
async function getCourses(){
return await Course.find(
    {isPublished:true,
    tags:'backend'}

)

.sort({name:1}) //.sort('name')
.select({name:1,author:1});

}
async function run(){
    const courses=await getCourses();
    console.log(courses)
}
run();