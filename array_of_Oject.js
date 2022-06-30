// arrray of object 
var arry =[
    {Fname : 'RAJ',age :28},
    {Fname : 'RAJa',age :25},
    {Fname : 'RAaJ',age :24},
    {Fname : 'SwaRAJ',age :22}
];
console.log(arry);
for (var a=0; a<arry.length; a++)
{
    // document.write(arry[a].Fname +" "+ arry[a].age+ '<br> ');
    console.log(arry[a].Fname +" "+ arry[a].age);
}
// For in loop practices
var obj = {
    name : "avinash ",
    lastName : "Sharma",
    age : 26,
    dist:"sonbhadra"

}
for (var key in obj){
    console.log(key + " :" + obj[key]);
}
// map function 
var mapping = [10,23,34,45,56,60,];
var newmapping = mapping.map(test);
console.log(newmapping);
function test(x){
    return x*2;
}
var a=[10,23,34,45,56,60,];
var j = a.map(test2);
console.log(j);
function test2(x){
    return x*3;
}