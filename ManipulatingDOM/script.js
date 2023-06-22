// script.js

function GetData(callbackFN) {
  // making async call and display the data
  return new Promise(function (resolve, reject) {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/postsss");
    xmlHttpReq.addEventListener("readystatechange", function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
        var posts = JSON.parse(xmlHttpReq.responseText);
        resolve(posts);
      } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status != 200) {
        reject("Something went wrong" + xmlHttpReq.status);
      }
    });
    xmlHttpReq.send(); // places an async call
  });
}
