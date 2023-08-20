const sleep = function () {
    setTimeout(() => console.log(">>> sleep start"), 1000)
        setTimeout(()=> console.log(">>> sleep finish"), 2000)
    setTimeout(() => console.log('>>> h1'), 3000);

}
sleep()
