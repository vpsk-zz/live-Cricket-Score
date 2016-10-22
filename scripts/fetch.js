function fetch_feed() {
    getNewsData();
    getMatchList();
}

function getNewsData(position) {
    chrome.extension.sendRequest({
            'action': 'fetch_feed',
            'url': 'http://cricapi.com/api/cricketNews'
        },
        function(response) {
            var responseData;
            if (response) {
                responseData = JSON.parse(response);
            }
            display_stories(responseData);
        }
    );
}

function getMatchData(position, description) {
    var url = "http://cricapi.com/api/cricketScore?unique_id=" + position;
    chrome.extension.sendRequest({
            'action': 'fetch_feed',
            'url': url
        },
        function(response) {
            var responseData;
            if (response) {
                responseData = JSON.parse(response);
                responseData.inningsRequirement = responseData["innings-requirement"];
                responseData.team1 = responseData["team-1"];
                responseData.team2 = responseData["team-2"];
                responseData.description = description;
                console.log(responseData);
                display_matchData(responseData);
            }
        }
    );
}

function getMatchList(position) {
    chrome.extension.sendRequest({
            'action': 'fetch_feed',
            'url': 'http://cricapi.com/api/cricket/'
        },
        function(response) {
            var responseData;
            if (response) {
                responseData = JSON.parse(response);
                responseData.data.forEach(function(index, element) {
                    getMatchData(index.unique_id, index.description);
                });
            }
            display_matchList(responseData);
        }
    );
}

function display_matchData(data) {
    var item = null;
    if (data.matchStarted === true) {
        item = '<div class="post">';
        item += '<span class="tag"></span>\
                  <div><h4 class="team-name"><span>' + data.team1 + '</span> Vs <span>' + data.team2 + '</span></h4></div>\
                  <div class="score">' + data.score + '</div>\
                  <div class="score">' + data.description + '</div>\
                  <span class="description">' + data.inningsRequirement + '...</span>';
        item += '</div>';
        $('#matchData').append(item);
    }
}

function display_matchList(post) {
    var item = null; 
    post.data.forEach(function(index, element) {
        item = '<div class="post">';
        item += '<span class="tag"></span>\
              <div id="' + index.unique_id + '" class="item">\
                <span class="description">' + index.description + '</span>\
              </div>';
        item += '</div>';
        $('#matchList').append(item);
    });
}

function display_stories(post) {
    var item = null;
    post.data.forEach(function(index, element) {
        item = '<div class="post">';
        item += '<span class="tag"></span>\
              <div id="' + index.unique_id + '" class="item">\
                <h4>' + index.title + '</h4>\
                <span class="description">' + index.description + '...</span>\
              </div>';
        item += '</div>';
        $('#data').append(item);
    });
}

$(document).ready(function() {
    fetch_feed();
});
