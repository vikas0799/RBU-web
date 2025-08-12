fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
        
        console.log(data);
        let head=document.getElementsByTagName("h1");
       head[0].innerHTML=data[1].name;
    })