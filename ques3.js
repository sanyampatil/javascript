const income ={
 skill:108,
 monthly(){
  return this.skill=108;
 },
 yearly:()=>888*this.skill,

};
console.log(income.monthly());
console.log(income.yearly());


// output
// 108
// NaN