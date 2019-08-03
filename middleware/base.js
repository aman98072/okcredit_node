module.exports = function (req, res, next) {    
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Request-Headers", "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'authorization,cache-control,content-type,expires,pragma');
    next();
}