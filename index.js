//student grade  generator//




let score=56
function assignmentgrade(score){
  if (score>79){
    
  console.log("A")
    
    
  }

  else if(score>=60){
    
  console.log("B")
    
  }
  
  else if (score>=49)
  {
    
  
  console.log("C")}
  
  else if(score>=40){
  console.log("D")}
  else{
    consle.log("E")
  }

}
console.log(assignmentgrade(score))



//speed detector//

let speed = 190
let points = Math.floor((speed - 70) / 5)
if (speed < 70)
{
console.log ('OK');
}
else if ((speed - 70) % 5 == 0 && (speed - 70) / 5 <= 12)
{

console.log(`Points: `+ points)
}
else if ( (speed - 70) / 5 > 12 )
{
console.log ('License suspended')
}

//net salary calculator//
