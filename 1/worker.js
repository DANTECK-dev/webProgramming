function Employee(position,expirience)
{
    this.position=position;
    this.expirience=expirience;
    this.prnt = function(){
        console.log("Должность: "+ this.position+" \t Стаж: "+this.expirience);
    };
}
module.exports=Employee;