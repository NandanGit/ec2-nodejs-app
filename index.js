const app = require("express")()

app.get("/",(req, res)=>{
	res.send("This website is hosted using aws ec2 instance")
})

app.listen(5000, ()=>{console.log("Server is running on port 5000")})
