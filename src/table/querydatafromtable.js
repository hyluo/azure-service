var azure = require('azure-storage');

var query = new azure.TableQuery()
  .top(1000)
  .where('PartitionKey eq ?', 'mydeviceid');


tableSvc.queryEntities('iotable',query, null, function(error, result, response) {
  if(!error) {
    // query was successful
    for (var item in result.entries) {
      tableSvc.deleteEntity('iotable', result.entries[item], function(error, response){
        if(!error) {
          console.log("deleted");
        }
      });
    }
  }
});

