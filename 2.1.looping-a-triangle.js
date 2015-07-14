/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var myNum = 7;
for (var i = 1; i <= myNum; i++) {
  var myStr = '';
  for (var j = 1; j <= i; j++) {
    myStr += '#';
  }
  console.log(myStr);
}
