var request = require('request');
console.log('Welcome to the GitHub Avatar Downloader!');
var gitHub_User = "abrahamliju";
var gitHub_Token = "597384a2f9ad7d8374aa18f916f0c31cac958368";


function getRepoContributors(repoOwner, repoName, cb){
  var data
  var requestURL = {
     url: 'https://'+ gitHub_User + ':' + gitHub_Token + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
     headers: {
    'User-Agent': 'GitHub Avatar Downloader - Student Project'
  }
  };
  // console.log(requestURL);
  request(requestURL, cb);


}

getRepoContributors("jquery","jquery", function(err, result,body){

  var data = JSON.parse(body);


  let avatarUrls =
    data.map(item => item.avatar_url)
    console.log(avatarUrls);
  // console.log("Errors:", err);
  // console.log("Result:", result);
})






