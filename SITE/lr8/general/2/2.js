function Human(name,surname,patronymic,age,height)
{
    this.name=name;
    this.surname=surname;
    this.patronymic=patronymic;
    this.age=age;
    this.height=height;
    this.createTable=function(){
        document.writeln("<table><tr><th>Имя</th><th>Фамилия</th><th>Отчество</th><th>Возраст</th><th>Рост</th></tr><tr><td>"+name+"</td> <td>"+surname+ "</td><td>"+patronymic+" </td><td>"+age+ "</td><td>"+height+"</td></tr></table>");
    }
};

for(let i=0;i<3;i++)
{
    var x=new Human(prompt("Имя"),prompt("Фамилия"),prompt("Отчество"),prompt("Возраст"),prompt("Рост"));
    x.createTable();
    document.write("<br>");
}