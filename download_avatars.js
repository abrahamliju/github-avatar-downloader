var request = require('request');
var fs = require('fs');
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
  request(requestURL, cb);


}
if(process.argv.length < 4){
  console.log("Please pass Repo Name and a User name");
}else{
getRepoContributors(process.argv[2],process.argv[3], function(err, result,body){

  var data = JSON.parse(body);
  let avatarUrls =
  data.map(item => item.avatar_url);
  let userIds =
  data.map(item => item.login);
  console.log(avatarUrls);
  for(var i = 0; i < avatarUrls.length; i++){
    downloadImageByUrl(avatarUrls[i],"avatars/"+userIds[i]+".jpg");
  }
});
}

function downloadImageByUrl(url, filepath){

  request.get(url)
    .pipe(fs.createWriteStream(filepath));
}








