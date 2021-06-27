console.log('Start');

function logicUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("email", email);
            resolve({userMail: email});
        }, 3000);
    });
}

function sendConfirmation(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: "Email confirmation has been sent too " + email});
        }, 2000);
    });
}

function listVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Video1', 'Video2', 'Video3']);
        }, 3000);
    });
   
}

function videoDetail(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("details of video " + video);
        }, 2000);
    });
}

logicUser('ed', 'bumba')
.then(user => listVideos(user.userMail))
.then(videos => videoDetail(videos[0]))
.then(details => console.log(details));


console.log('End');