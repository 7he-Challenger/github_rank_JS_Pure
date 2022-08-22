$(document).ready(function(){
    $.get("https://api.github.com/search/users?q=location%3Amadagascar&fbclid=IwAR20tgQ9edAlshoUz5HwfjtitiASGXH32L0H2tudBhqcG4ZojEuu7QSEtXc", function(data, status){
       if(data.items.length != 0){
            var bodyLoop = document.getElementById('bodyContainer');
            document.getElementById('loading').remove();
            for (let i = 0; i < data.items.length; i++) {
                let userName = data.items[i].login;
                let userAvatar = data.items[i].avatar_url;
                if(bodyLoop != null){
                    var trbody = document.createElement('tr');
                    trbody.classList.add('bodyList');

                    var tdName = document.createElement('td');
                    tdName.classList.add('nameList');
                    tdName.append(userName);

                    var tdAvatar = document.createElement('td');
                    tdAvatar.classList.add('avatarList');

                    var imgAvatar = document.createElement('img');
                    imgAvatar.src = userAvatar;
                    imgAvatar.classList.add('avatar');

                    tdAvatar.append(imgAvatar);

                    var tdProfileUrl = document.createElement('td');
                    var linkBtn = document.createElement('a');
                    linkBtn.classList.add('btn-info');
                    linkBtn.classList.add('btn');
                    linkBtn.classList.add('text-white');
                    linkBtn.href = data.items[i].html_url;
                    linkBtn.target = "_blank";
                    linkBtn.innerText = "See profile";
                    tdProfileUrl.append(linkBtn);

                    trbody.append(tdName);
                    trbody.append(tdAvatar);
                    trbody.append(tdProfileUrl);
                    
                    bodyLoop.append(trbody);
                    
                }
            }
            $('#tableMain').DataTable();
       }
    });
})