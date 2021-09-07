const user = user => {
    console.log(user);
}

function Cars(){
    this.id = 1000;
}

function url(){
    return "http://localhost/fsphp";
}

const aPromisse = new Promise((resolved, reject) => {
    resolved('files')
})


aPromisse.then(response => {
    console.log(response);
})

console.log("aside");

console.log("teste");