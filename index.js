var Intercom = require('intercom-client');
var client = new Intercom.Client({
    appId: 'o6bf5crp',
    appApiKey: 'd172bbcbfe514994f18bf797f0717866334a539a'
});
var fs = require('fs');
var stream = fs.createReadStream("customers.csv");
var csv = require("fast-csv");
var csvStream = csv()
    .on("data", function(data){
         console.log(data[0]);
         client.tags.tag({ name: 'previouspaid', users: [{ user_id: data[0] }] }, function(err, d){
                if(err){
                                console.log("error found" + JSON.stringify(err));
                }else{
                                console.log("updated " + data[0]);

                }
            });
    })
    .on("end", function(){
         console.log("done");
    });
 
stream.pipe(csvStream);

