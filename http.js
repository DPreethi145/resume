// var http=require('http');

// http.createServer((req,res)=>{
//     res.write('welcome to node..!!!');
//     res.write(req.url);
//     res.end();
//     console.log('server running...');
// }).listen(8080)

// var http = require('http');

// http.createServer((req,res)=>{
//    res.write("hihihihihijij");
//    res.write(req.url)
//    res.end();
//    console.log("server Running.....")
// }).listen(8080)

// var http=require('http');
// var fs=require('fs');

// http.createServer((req,res)=>{
    // fs.readFile('abc.txt',(err,data)=>{
    //     res.write(data);
    //     res.end();
    // })

    // fs.appendFile('abc.txt','this is the new text iam adding....',(err,data)=>{
    //     res.write(data);
    //     res.end();
    // })

    // fs.writeFile('abc.txt','hi you are writing new text...',(err,data)=>{
    //     res.write(data);
    //     res.end();
    // })

    

//     fs.unlink('abc.txt',(err)=>{
//         if(err) throw err;
//         console.log('deleted file..');
//     })

// }).listen(8080)

//readFile
//write - appendFile
//overwrite -writeFile
//delete file -unlink
