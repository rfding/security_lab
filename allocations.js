/********************************************************************************/
/*										*/
/*		allocations.js							*/
/*										*/
/*	Handle allocations pages						*/
/*										*/
/********************************************************************************/

/********************************************************************************/
/*										*/
/*	Imports 								*/
/*										*/
/********************************************************************************/

var db = require("./database.js");




/********************************************************************************/
/*										*/
/*	Handle displaying allocations						*/
/*										*/
/********************************************************************************/

function displayAllocations(req,res,next)
{
   var userId = req.params.userId;
   
   var threshold = parseInt(req.query.threshold);
 
   var q = 'SELECT * FROM Allocations WHERE userId=$1 AND stocks>$2';
   
   db.query(q, [userId, threshold] ,function(e1,d1) { displayAllocations1(req,res,next,e1,d1); } );
}



function displayAllocations1(req,res,next,err,data)
{
   if (err) return next(err);

   var doc = data.rows[0];

   return res.render("allocations",doc);
}




/********************************************************************************/
/*										*/
/*	Exports 								*/
/*										*/
/********************************************************************************/

exports.displayAllocations = displayAllocations;




/* end of alloations.js */
