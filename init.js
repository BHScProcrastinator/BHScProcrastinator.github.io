function startTime()
{
var today=new Date();
var h=today.getHours()+8;
var m=today.getMinutes();
var s=today.getSeconds();

var d=today.getDate();
var mo=today.getMonth()+1;
var y=today.getFullYear();

var dict={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};
var dict2={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};

if (h>23) {h=h-24; d++}
if (d>dict2[mo]) {d=d-dict2[mo]; mo++}
if (mo>12) {mo=mo-12; y++}

var ap = "AM"

if (h>11) {ap="PM"}
if (h>12) {h=h-12}
if (h==0) {h=12}

// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('date1').innerHTML=h+":"+m+":"+s;
document.getElementById('date2').innerHTML=ap;
document.getElementById('date3').innerHTML=dict[mo]+" "+d+", "+y;
t=setTimeout('startTime()',500);
}

function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
