function GetData() {
  //making async call and display the data
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

  //   xmlHttpReq.onreadystatechange("readystatechange", function(){
  // or
  xmlHttpReq.addEventListener("readystatechange", function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
      //   console.log(xmlHttpReq.responseText);
      var posts = JSON.parse(xmlHttpReq.responseText);
      //   console.log(posts.length);
      console.log(posts[0].title);
    }
  });
  xmlHttpReq.send(); //places an async call.
}
