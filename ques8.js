class lizart{
 static colorChange(newcolor)
 {

  this.newColor=newcolor;

  return this.newColor;
 }

 constructor({newColor="orange"}={}){
  this.newColor=newColor
 }
}
const tommy=new lizart({newColor:"orange"})
// console.log(tommy.colorChange("blue"));
console.log(lizart.colorChange("blue"));

