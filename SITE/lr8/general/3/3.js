class Person
{
    constructor(name,surname,patronymic,age)
    {
        this.name=name;
        this.surname=surname;
        this.patronymic=patronymic;
        this.age=age;
    }
    get FieldStr()
    {
        return "<p>"+this.name+"</p><p>"+this.surname+ "</p><p>"+this.patronymic+" </p><p>"+this.age+ "</p>";
    }

    get DataStr()
    {
        return "<div>"+this.FieldStr+"</div>";
    }
}


class Employee extends Person{
    constructor(name,surname,patronymic,age,position)
    {
        super(name,surname,patronymic,age);
        this.position=position;
    };
    
    get DataStr()
    {
        return "<div>"+this.FieldStr+"<p>"+this.position+"</p></div>";
    }
}

var tmp=new Array();
tmp[0]=new Person("Иванов","Иван","Иванович",32);
tmp[1]=new Person("Сидоров","Михаил","Петрович",45);
tmp[2]=new Employee("Гапоненко","Наталья","Викторовна",56,"Директор");

for(let i=0;i<3;i++)
{
    document.writeln(tmp[i].DataStr);
    document.writeln("--------------------------");
}