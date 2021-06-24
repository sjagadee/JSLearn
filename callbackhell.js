console.log('Start');

function logicUser(email, password, callback) {
    setTimeout(() => {
        console.log("email", email);
        callback({userMail: email});
    }, 3000)
}

function sendConfirmation(email, callback) {
    setTimeout(() => {
        callback({data: "Email confirmation has been sent too " + email});
    }, 2000);
}

function listVideos(email, callback) {
    setTimeout(() => {
        callback(['Video1', 'Video2', 'Video3']);
    }, 3000);
}

function videoDetail(video, callback) {
    setTimeout(() => {
        callback("details of video " + video);
    }, 2000)
}

// Here the callback is in 3rd level, but it can go upto more levels
// When it increases it starts getting hard to maintain code
// Readability of the code will also be affected
// This is called callback - hell
logicUser("mama@mama.com", "12345", user => {
    console.log(user.userMail);
    sendConfirmation(user.userMail, confirmed => {
        console.log(confirmed.data);
    });
    listVideos(user.userMail, videos => {
        console.log(videos);
        videoDetail(videos[0], disp => {
            console.log(disp);
        });
    });
});

console.log('End');