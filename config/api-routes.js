var router = require('express').Router();
var { ADMIN_URL } = require("./constant");
var db = require("./database");

// Set default API response
router.get('/', async function (req, res) {
    try {
        var conn = await db.db();       
        conn.collection("details").findOne({}, function(err, items) {
            if(err) throw err; 
            
            /* set response */
            setResponse(res , items);          
        });
    }
    catch (e) {
        console.log(e);
    }
});

// login API
router.post('/login', async function (req, res) {
    let username = req.body.username;
    let pwd = req.body.password;
    
    try {
        var conn = await db.db();
        conn.collection("admin").findOne({username : username, password : pwd}, function (err, result) {
            if (err) throw err;
            
            if (result != null) {                 
                setResponse(res , result._id);                 
            } else {
                setResponse(res , 0);  
            }
        });
    }
    catch (e) {
        console.log(e);
    }
});

function setResponse(res , data) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
       data : data
    });
}

// Export API routes
module.exports = router;