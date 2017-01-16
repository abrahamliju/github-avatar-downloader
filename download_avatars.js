var request = require('request');
console.log('Welcome to the GitHub Avatar Downloader!');
var gitHub_User = "abrahamliju";
var gitHub_Token = "597384a2f9ad7d8374aa18f916f0c31cac958368";

function getRepoContributors(repoOwner, repoName,cb){
  var requestURL = 'https://'+ gitHub_User + ':' + gitHub_Token + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);

//request.get("")



}

getRepoContributors("jquery","jquery", function(err, result){
  console.log("Errors:", err);
  console.log("Result:", result);
})






