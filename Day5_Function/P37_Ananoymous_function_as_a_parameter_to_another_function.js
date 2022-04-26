// function statement
function eventHandler(event){
    event();
    }
    eventHandler(function(){
    //do a lot of event related things
    console.log("Event fired");
    });