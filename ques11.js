function Human(firstName,LastName){
 this.firstName;
 this.Lastname;
}

const member = new Human("Frontend ","Master")
Human.prototype.getFullName=function(){
 return `${this.firstName}${this.LastName}`;

}

console.log(member.getFullName());