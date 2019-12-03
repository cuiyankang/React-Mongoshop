export const throttle = (function(){
    var firstTime = 0;
    return function(callback,time){
        if(!time){
            time = 300;
        }
        var lastTime = new Date().getTime();
        if(lastTime - firstTime > time){
            callback();
            firstTime = lastTime;
        }
    }
})()


