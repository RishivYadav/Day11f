function addRecord() {
    let inputMessageRef = document.querySelector("#messageId");
    let message = inputMessageRef.value;
  
    let uri = `http://127.0.0.1:4000/addrecord?message=${message}`;
  
    // connect the backend, ajax
    // magic, star, superstar
    fetch(uri);
  
    // clear the box
    inputMessageRef.value = "";
  }