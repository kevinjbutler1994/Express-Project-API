import mongoose from 'mongoose'
import chalk from 'chalk';
connectionString = process.env.DB_URL || 'mongodb://localhost/bookmarks'

mongoose.set("returnOriginal", false);

mongoose.connect("mongodb://127.0.0.1:27017/starwars_api").catch((err) => {
    console.log(`Error connection to MongoDB: ${err.message}`);
});

// line 6 star wars api is the portion needed to swap out with new APIs, all other connection.js code remains unchanged 
// 

// *************************
// Ask about line 6 in case of debugging, the starwars_api section likely will 
// have played a role**************************8
// ***********************8
// **********************

mongoose.connection.on("disconnect", ()=> {
    console.log("disconnected")
})
 mongoose.connection.on("error", (err) => {
    console.log(chalk.bold('MongoDB connection error: ${err}'));
 });


export default mongoose.connection

