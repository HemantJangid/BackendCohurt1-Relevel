function doTask(task) { // global scope , task -> local scope of dotask
    setTimeout(function execute() {
        let x = 909090; // local scope of exec
        console.log(x + 10);
        console.log(task); // local of dotask
    }, 10000);
}

doTask("please do something");
console.log("Stop");