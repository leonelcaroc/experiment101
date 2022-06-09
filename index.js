//NPM Modules
const express = require("express");
const app = express();
const mongoose = require('mongoose');


//Mongoose Connection
mongoose.connect("mongodb+srv://armyulti:qwerty123@mydatabase.whmij.mongodb.net/customers?retryWrites=true&w=majority", {useNewUrlParser: true});

//Schema
const customerSchema = mongoose.Schema ({
  name: String,
  fullname: String,
  age: String,
  hobby: String
});

//Model
const Customer = mongoose.model("customers-datas", customerSchema);

//-------------------------

//Querying
let inputName = "      dela           torre  mark kevin ";
let resultName = inputName.trim();
noSpaceName = resultName.replace(/  +/g, ' ');
let customerName = new RegExp( noSpaceName, "gi");

Customer.find({$or: [{fullname: customerName}, {name: customerName}]}, function (err, customers) {
  if(err) {
    console.log(err);
  } else {
  //console.log(customers[0].name);
  customers.forEach(person => {
    console.log(person.name);
  });
  }
});

//-------------------------


//Aggregate
/*
Customer.aggregate([
  {$project: { "fullname" : { $concat : [ "$firstName", " ", "$lastName" ] } }},
  {$match: {"fullname": {$regex: /mark kevin dela torre/i}}}
]).exec(function(err, result){
  console.log(result);
});
*/



/*
Customer.find({ $text: {$search: customerName}}, function(err, name) {
  if(err) {
    console.log(err);
  } else {
    name.forEach(person => {
      console.log(person.name);
    });
  }
});
*/


  /*
Player.aggregate([
	{
		$search: {
			'compound': {
				'should': [
					{
						'phrase': {
							'path': '<field_path>',
							'query': '[<first_phrase>, <second_phrase>]'
						}
					},
					{
						'text': {
							'path': '<field_path>',
							'query': '[<first_word>, <second_word>]'
						}
					}
				]
			}
		}
	}
])

});
});
*/

/*
Player.aggregate([
  {$project: { "name" : { $concat : [ "$firstName", " ", "$lastName" ] } }},
  {$match: {"name": {$regex: /maria clara/i}}} 
  ]).exec(function(err, result){
  if (err) {
    console.log(err);
  } else {
  console.log(result);
  }
});
*/

/*
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running!!");
});
*/


//Database Connection Console Logging
/*
let conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('Database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'Connection error:'));
module.exports = conn;
*/


/* Collection Name: customers-data

CLARA, Maria
DELA TORRE, Mark Kevin
DELA CRUZ, Juan
AGUSTIN, Princess Thea
SMITH, John Larry Dane

*/