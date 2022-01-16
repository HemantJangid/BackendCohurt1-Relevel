var s = "* ";
function fun(n){
 
  if(n == 1){
    console.log("*");
    return;
  }
  fun(n-1);
  s += "* "
  console.log(s);
}
fun(1);
