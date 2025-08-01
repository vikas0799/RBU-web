
var profile = {
    "name": "saurabh",
    "age": 20,
    "display": ()=> {
        console.log("hello 1");
        console.log("hello 2");
        console.log(this.age);
        
    },
    "status": "mingle",
    "address": {
        "state": "bihar",
        "dist": "patna",
        "pincide": 292398,
        "village": "kharar"
    }
}

profile.display();

 var a=90;

function aarabh(){
    console.log("hello");
    console.log(this.profile);
    
}
// console.log(window);
aarabh();


