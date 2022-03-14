function changeCase(val) {
 return val.toUpperCase();
}
function demofunc(a, passfunction) {
 console.log(passfunction(a));
}
demofunc("smallcase", changeCase);