const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')
app.use(cors())

const categories = require('./data/categories.json')
app.get('/course-categories' , (req , res)=>{
    res.send(categories)
})


const course = require('./data/course.json')
app.get('/course' ,(req , res)=>{
    res.send(course)
  })

  app.get('/courseDetails/:id', (req,res) =>{
    const id =req.params.id;
    const selectedCourse = course.find( n=> n.course_id ===id)
    res.send(selectedCourse);
  })




app.get('/', (req, res) => {
  res.send('Here is the main page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})