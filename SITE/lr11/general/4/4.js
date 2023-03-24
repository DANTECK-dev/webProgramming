function enter()
{
    var userLogin=document.getElementsByTagName("input")[0].value;
    var userPassword=document.getElementsByTagName("input")[1].value;
    var userForm = document.getElementsByTagName("div")[0];
    userForm.style.visibility="hidden";
    let tmp=document.createElement("p");
    tmp.setAttribute("id","login")
    tmp.innerText="Логин: ";
    userForm.appendChild(tmp);

    tmp=document.createElement("p");
    tmp.setAttribute("id","password")
    tmp.innerText="Пароль: ";
    userForm.appendChild(tmp);
    
    tmp=document.createElement("p");
    tmp.setAttribute("id","rank")
    tmp.innerText="Должность: ";
    userForm.appendChild(tmp);
    
    tmp=document.createElement("p");
    tmp.setAttribute("id","description")
    tmp.innerText="Описание: ";
    userForm.appendChild(tmp);
    
    tmp=document.createElement("button");
    tmp.innerText="Изменить";
    userForm.appendChild(tmp);

    tmp=document.createElement("button");
    tmp.innerText="Удалить";
    userForm.appendChild(tmp);

    if(userLogin!=''&&userPassword!="")
    {
        var usr=JSON.parse(localStorage.getItem(userLogin));

        if(usr==null||usr==undefined)
        {
            var user={
                login: userLogin,
                password: userPassword,
                rank: "",
                description: ""
            };
            localStorage.setItem(userLogin,JSON.stringify(user))
            alert("Пользователь создан")
            location.reload()
        }
        else{
            if(userPassword==usr.password)
            {
                var user={
                    login: usr.login,
                    password: usr.password,
                    rank: usr.rank,
                    description: usr.description
                };

                document.getElementsByTagName("input")[0].style.visibility="hidden";
                document.getElementsByTagName("input")[1].style.visibility="hidden";
                document.getElementsByTagName("button")[0].style.visibility="hidden";
                userForm.style.visibility="visible";


                document.getElementById("login").innerHTML+=usr.login;
                document.getElementById("password").innerHTML+=usr.password;
                document.getElementById("rank").innerHTML+=usr.rank;
                document.getElementById("description").innerHTML+=usr.description;

                var buttons = document.getElementsByTagName('button');
                buttons[1].onclick = function()
                {
                    usr.login=prompt("Введите новый логин",usr.login);
                    usr.password=prompt("Введите новый пароль",usr.password);
                    usr.rank=prompt("Введите новую должность",usr.rank);
                    usr.description=prompt("Введите новое описание",usr.description);
                    localStorage.setItem(userLogin,JSON.stringify(usr))
                    alert("Пользователь изменён")
                    location.reload()
                };

                buttons[2].onclick = function()
                {
                    localStorage.removeItem(usr.login);
                    alert("Пользователь удалён")
                    location.reload()
                };
            }
            else{
                alert("Неверный пароль");
                document.getElementsByTagName("input")[0].value='';
                document.getElementsByTagName("input")[1].value='';
            }
        }
       
    }
}