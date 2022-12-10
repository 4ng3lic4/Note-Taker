const express = require ("express");
const app = express()//Single instance of the express package
const PORT = process.env.PORT || 3001 //creating the port
const htmlRoutes = require("./routes/htmlroutes.js");
const apiRoutes = require('./routes/api_routes')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//TO USE THE ROUTES -separation of concerns

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);








//This is what turns the server on

app.listen(PORT, () => {
    //What makes the server listen to the particular port
    console.log(`App listening on PORT ${PORT}`);
});