var things = [
function() { console.log("ThingOne") },
function() { console.log("ThingTwo") },
];
for(var x=0; x<things.length; x++) {
things[x]();
}