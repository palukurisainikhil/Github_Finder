function getdata(event) {
  //console.log(event.key);
  if (event.key != "Backspace") {
    var userName = event.target.value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/" + userName, true);
    xhr.onload = function () {
      if (this.status == 200) {
        var userData = JSON.parse(this.responseText);

        var output = "";
        output +=
          `
          <div class="card border-primary mb-3" style="max-width: 100rem;">
          <div class="card-header"><h3>${userData.name}</h3></div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
              <img class="thumbnail avatar" src="${userData.avatar_url}">
              <a href="${userData.html_url}" target="_blank" class="btn btn-primary btn-block button2">View Profile</a>
            </div>
            <div class="col-md-9">
            <span class="badge badge-primary">public_gists:${userData.public_gists}</span>
            <span class="badge badge-secondary">public_repos:${userData.public_repos}</span>
            <span class="badge badge-success">following:${userData.following}</span>
            <span class="badge badge-danger">followers:${userData.followers}</span>

            <ul class="list-group">
              <li class="list-group-item">organizations_url:${userData.organizations_url}</li>
              <li class="list-group-item">company:${userData.company}</li>
              <li class="list-group-item">location:${userData.location}</li>
              <li class="list-group-item">twitter_username:${userData.twitter_username}</li>
              
            </ul>
            </div>


            
            </div>
            
              
          </div>`

        document.getElementById("maincontent").innerHTML = output;



        xhr.open("GET", "https://api.github.com/users/" + userData.login + "/repos", true);
        xhr.onload = function () {

          if (this.status == 200) {
            var repoData = JSON.parse(this.responseText);


            var output1 = "";
            output1 += `<h3 class="container">Latest Repositeries:)</h3>`

            for (let i = 0; i < 5; i++) {
              output1 +=

                `
                
                <div class="card">
                <div class="row ">
                    <div class="card-body">
                    <div class="col-md-6">
                    <h3>${repoData[i].name}</h3>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-dark">Forks: ${repoData[i].watchers}</span>
                        
                        <span class="badge badge-success">Stars: ${repoData[i].stargazers_count}</span>
                        <a href="${repoData[i].html_url}" target="_blank" class="badge badge-danger" button3">Check Repo</a>
                    </div>
                    
                    </div>
                </div>
                </div>
                `
            }

          }
          //console.log(output1);
          document.getElementById("maincontent1").innerHTML = output1;
        }
        xhr.send();






      }


    }
    xhr.send();
  }



}

function getrepo(reposurl) {
  console.log('hi');
  console.log(reposurl);
}


