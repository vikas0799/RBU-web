// let arr=[2,9,1,10,11,20,83,95];
//   arr.slice(start, end);
    // let ans= arr.slice(2,6);
    // console.log(ans);
    // console.log(arr);

// let ans=arr.splice(2,4,100,200,999,45,23,20);
// console.log(ans);
// console.log(arr);

// let arr=[2,9,1,10,11,20,83,95];
// let key=100;
// let ans=[500,...arr,key,200,300,];  //spread operator
// console.log(ans);


// if(11==="11"){
//     console.log("hi");
// }
// else{
//     console.log("bye");
    
// }


// let a="vikas ";
// let b="patel";
// console.log(a*b);
// function display(){
//     //var x;
// console.log(x);
//     let x=90;
// }
    
// display();
    
    // console.log(window);
    // console.log(this);
    // let obj={
    //     "name":"vikas patel",
    //     "display":function (){
    //         console.log(this);
            
    //     }
    // }
    // obj.display();
    

    // console.log("hi");

    // setTimeout(() => {
    //     console.log("bye");
        
    // }, 0);

    // setTimeout(() => {
    //     console.log("harsh movide dekhne gya");
        
    // }, 0);

    // console.log("war 2");
    

    let p1=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("war ended 1");
        }, 2000);

    });
     let p2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("war ongoing 2");
        }, 3000);

    });
     let p3=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("war ended 3");
        }, 4000);

    });

    Promise.all([p1,p2,p3]).then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
        
    })





    // p1.then((data)=>{
    //     console.log(data);
        
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })