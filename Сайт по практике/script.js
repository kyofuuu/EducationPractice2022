//подключение к бд
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
        
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlPW9hf3gaY-pVb6VcIJmX5ivVWN6gMEI",
    authDomain: "bonchtelecom.firebaseapp.com",
    databaseURL: "https://bonchtelecom-default-rtdb.firebaseio.com",
    projectId: "bonchtelecom",
    storageBucket: "bonchtelecom.appspot.com",
    messagingSenderId: "405260156425",
    appId: "1:405260156425:web:acb58832ef247da9cec2d8",
    measurementId: "G-LS2YWEYWQP"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, set, child, update, remove, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const database = getDatabase();


//классы для работы с сущностями
class User {
    constructor(userID, name, surname, login, password, roleID) {
        this.userID = userID;
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.password = password;
        this.roleID = roleID;
    }
}

class Master {
    constructor(masterID, userID) {
        this.masterID = masterID;
        this.userID = userID;
    }
}

class District {
    constructor(districtID, name, masterID) {
        this.districtID = districtID;
        this.name = name;
        this.masterID = masterID;
    }
}

class Role {
    constructor(roleID, role) {
        this.roleID = roleID;
        this.role = role;
    }
}

class Problem {
    constructor(problemID, problem) {
        this.problemID = problemID;
        this.problem = problem;
    }
}

class Application {
    constructor(applicationID, masterID, userID, districtID, problemID, date, address, description, phoneNumber) {
        this.applicationID = applicationID;
        this.masterID = masterID;
        this.userID = userID;
        this.districtID = districtID;
        this.problemID = problemID;
        this.date = date;
        this.address = address;
        this.description = description;
        this.phoneNumber = phoneNumber;
       
    }
}

let applications = [];

let problems = [];
// let problem = new Problem(1, 'Замена оборудования');
// problems.push(problem);
// problem = new Problem(2, 'Проблемы с телевидением');
// problems.push(problem);
// problem = new Problem(3, 'Проблемы с интернетом');
// problems.push(problem);
// problem = new Problem(4, 'Отказ от услуг');
// problems.push(problem);
// problem = new Problem(5, 'Другая причина');
// problems.push(problem);
// update(ref(database), {
//     Problems: JSON.stringify(problems)
// }).then(() => {
//     alert("Успешно");
// }).catch((error) => {
//     alert("Ошибка");
// });

let roles = [];
// let role = new Role(1, 'Мастер');
// roles.push(role);
// role = new Role(2, 'Клиент');
// roles.push(role);
// update(ref(database), {
//     Role: JSON.stringify(roles)
// }).then(() => {
//     alert("Успешно");
// }).catch((error) => {
//     alert("Ошибка");
// });

let districts = [];
// let district = new District(1, 'Амиралтейский район', 1);
// districts.push(district);
// district = new District(2, 'Калининский район', 1);
// districts.push(district);
// district = new District(3, 'Красногвардейский район', 2);
// districts.push(district);
// district = new District(4, 'Курортный район', 2);
// districts.push(district);
// district = new District(5, 'Петроградский район', 3);
// districts.push(district);
// district = new District(6, 'Пушкинский район', 3);
// districts.push(district);
// district = new District(7, 'Василеостровский район', 4);
// districts.push(district);
// district = new District(8, 'Кировский район', 4);
// districts.push(district);
// district = new District(9, 'Красносельский район', 5);
// districts.push(district);
// district = new District(10, 'Московский район', 5);
// districts.push(district);
// district = new District(11, 'Петродворцовый район', 6);
// districts.push(district);
// district = new District(12, 'Фрунзенский район', 6);
// districts.push(district);
// district = new District(13, 'Выборгский район', 7);
// districts.push(district);
// district = new District(14, 'Колпинский район', 7);
// districts.push(district);
// district = new District(15, 'Кронштадтский район', 8);
// districts.push(district);
// district = new District(16, 'Невский район', 8);
// districts.push(district);
// district = new District(17, 'Приморский район', 9);
// districts.push(district);
// district = new District(17, 'Центральный район', 9);
// districts.push(district);

// update(ref(database), {
//     Districts: JSON.stringify(districts)
// }).then(() => {
//     alert("Успешно");
// }).catch((error) => {
//     alert("Ошибка");
// });




let users = [];
// let user = new User(1, "Игорь", "Греков", "grekov", "grekov", 2);
// users.push(user);
// user = new User(2, "Денис", "Денисов", "denisov", "denisov", 2);
// users.push(user);
// user = new User(3, "Денис", "Греков", "grekov2", "grekov2", 1);
// users.push(user);
// user = new User(4, "Никита", "Воронов", "voronov", "voronov", 1);
// users.push(user);
// user = new User(5, "Никита", "Козлов", "kozlov", "kozlov", 1);
// users.push(user);
// user = new User(6, "Филипп", "Хайков", "haikov", "haikov", 1);
// users.push(user);
// user = new User(7, "Иванов", "Иван", "ivanov", "ivanov", 1);
// users.push(user);
// user = new User(8, "Петров", "Петр", "petrov", "petrov", 1);
// users.push(user);
// user = new User(9, "Степанов", "Степан", "stepanov", "stepanov", 1);
// users.push(user);
// user = new User(10, "Платонов", "Платон", "platonov", "platonov", 1);
// users.push(user);
// user = new User(11, "Русланов", "Руслан", "ruslanov", "ruslanov", 1);
// users.push(user);
// set(ref(database), {
//     Users: JSON.stringify(users)
// }).then(() => {
//     alert("Успешно");
// }).catch((error) => {
//     alert("Ошибка");
// });
// console.log(users)


let masters = [];
// let master = new Master(1, 3);
// masters.push(master);
// master = new Master(2, 4);
// masters.push(master);
// master = new Master(3, 5);
// masters.push(master);
// master = new Master(4, 6);
// masters.push(master);
// master = new Master(5, 7);
// masters.push(master);
// master = new Master(6, 8);
// masters.push(master);
// master = new Master(7, 9);
// masters.push(master);
// master = new Master(8, 10);
// masters.push(master);
// master = new Master(9, 11);
// masters.push(master);
// console.log(masters);
// update(ref(database), {
//     Masters: JSON.stringify(masters)
// }).then(() => {
//     alert("Успешно");
// }).catch((error) => {
//     alert("Ошибка");
// });




let btnLogout = document.getElementById('btnLogout');
if(btnLogout) {
    btnLogout.addEventListener('click', logout)
}

function logout() {
    window.location.href = "../index.html";
}

// if (document.body.classList.contains('auth')) {
//     history.pushState(null, null, document.URL);
//     window.addEventListener('popstate', function () {
//         history.pushState(null, null, document.URL);
//     });
// }


function registration() {
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;
    let login = document.getElementById('login').value;
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    if(password != "" && repeatPassword != "" && login != "" && name != "" && surname != "") {
        console.log(1)
    const dbref = ref(database);
    let exists = false;
    get(child(dbref, "Users")).then((snapshot)=> {
        console.log(2);
        users = JSON.parse(snapshot.val());
        // console.log(users[0])
        for (let i=0; i<users.length; i++) {
            console.log(users[i].login, login)
            if (users[i].login === login) {
                alert("Пользователь с таким логином уже существует!")
                exists = true;
            }
        }
    }).catch((error)=> {
        alert("Ошибка");
    }).then(p => {
        console.log(exists)
        if (exists !== true) {
            let password = document.getElementById('password').value;
            let repeatPassword = document.getElementById('repeatPassword').value;
            if (password === repeatPassword) {
                let name = document.getElementById('name').value;
                let surname = document.getElementById('surname').value;
                let len =1;
                if(users.length === 0) {
                    len = users.length+1;
                }
                let user = new User(users.length+1, name, surname, login, password, 2);
                console.log(users)
                users.push(user);
                update(ref(database), {
                    Users: JSON.stringify(users)
                }).then(() => {
                    alert("Успешно");
                }).catch((error) => {
                    alert("Ошибка");
                });
            } else {
                alert("Пароли не совпадают");
            }
        
        }
    });
    } else {
        alert("Введены не все данные!");
    }
    
}



let btnRegistration = document.getElementById('btn_registration');
if (btnRegistration) {
    btnRegistration.addEventListener('click', registration)
}


function authorization() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    console.log(1)
    const dbref = ref(database);
    let exists = false;
    get(child(dbref, "Users")).then((snapshot)=> {
        console.log(2);
        users = JSON.parse(snapshot.val());
        // console.log(users[0])
        for (let i=0; i<users.length; i++) {
            console.log(users[i].login, login)
            if ((users[i].login === login) && (users[i].login === login)) {
                
                exists = true;
                localStorage.setItem('userId', JSON.stringify(users[i].userID));
                let name = users[i].surname + ' ' + users[i].name;
                localStorage.setItem('userName', JSON.stringify(name));
                localStorage.setItem('roleId', JSON.stringify(users[i].roleID));
                // if (users[i].roleID ==1) {
                //     get(child(dbref, "Masters")).then((snapshot)=> {
                //         masters = JSON.parse(snapshot.val());
                //         // console.log(masters)
                //         for(let j=0; j<masters.length; j++) {
                //             // console.log()
                //             if(masters[j].userID == users[i].userID) {
                //                 console.log(ma)
                //                 localStorage.setItem('masterId', JSON.stringify(masters[j].masterID));
                //             }
                //         }
                //     });
                // } 
                break;
            }
        }
    }).catch((error)=> {
        alert("Ошибка");
    }).then(p => {
        console.log(exists)
        if (exists === true) {
            window.location.href = "/pages/account.html";
            
        
        } else {
            alert("Неверные данные");
        }
    });
}


let btnAutharization = document.getElementById('btn__autharization');
if (btnAutharization) {
    btnAutharization.addEventListener('click', authorization);
}


//отображение имени пользователя

let userData = document.getElementById('userData');

// console.log(document.getElementById('userData').textContent)
if (userData) {
   
    userData.textContent = JSON.parse(localStorage.getItem('userName'));

}

//выпадающее меню с проблемами
let btnProblem = document.getElementById('btnProblem');
if (btnProblem) {
    btnProblem.addEventListener('click', showProblem);
}

let showProblems = true;
function showProblem() {
    if (showProblems) {
        document.getElementById('dropDown__menuPr').style.height = '145px';
    } else {
        document.getElementById('dropDown__menuPr').style.height = '35px';
    }
    showProblems = !showProblems
}

let problemButtons = document.getElementsByClassName('list__problems');

for (let i = 0; i < problemButtons.length; i++) {
    problemButtons[i].addEventListener('click', chooseProblem);
}

let idProblem = 1;
function chooseProblem() {
    let id = this.id;
    document.getElementById('buttonDropdownPr__text').textContent = this.textContent;
    
    id = id.slice(9);
    idProblem = id;
    showProblem();
}

//выпадающее меню с районами
let btnDistricts = document.getElementById('btnDistricts');
if (btnDistricts) {
    btnDistricts.addEventListener('click', showDistrict);
}

let showDistricts = true;
function showDistrict() {
    if (showDistricts) {
        document.getElementById('dropDownDist__menu').style.height = '431px';
    } else {
        document.getElementById('dropDownDist__menu').style.height = '35px';
    }
    showDistricts = !showDistricts;
}

let districtsButtons = document.getElementsByClassName('list__districts');

for (let i = 0; i < districtsButtons.length; i++) {
    districtsButtons[i].addEventListener('click', chooseDistrict);
}

let idDistrict = 1;
function chooseDistrict() {
    let id = this.id;
    document.getElementById('buttonDropdown__textDist').textContent = this.textContent;
    
    id = id.slice(10);
    idDistrict = id;
    // console.log(id)
    showDistrict();
}

//маска для телефона
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

let btnNewApp = document.getElementById('btnNewApp');

if (btnNewApp) {
    btnNewApp.addEventListener('click', createNewApp)
}

function createNewApp() {
    let idNumber = 1;
    let idMaster;
    let idUser = JSON.parse(localStorage.getItem(('userId')));
    let address = document.getElementById('address').value;
    let description = document.getElementById('description').value;
    let phoneNumber = document.getElementById('phone').value;
    let date = new Date();
    if (address != "" && description != "" && phoneNumber != "") {
        // let application = new Application()
    const dbref = ref(database);
    get(child(dbref, "Applications")).then((snapshot)=> {
        applications = JSON.parse(snapshot.val());
        idNumber = applications.length+1;
    }).then(p => {
        get(child(dbref, "Districts")).then((snapshot)=> {
            districts = JSON.parse(snapshot.val());
            // console.log(districts)
            for (let i=0; i<districts.length; i++) {
                console.log(districts[i].districtID, idDistrict)
                if(districts[i].districtID == idDistrict) {
                    // console.log(districts[i].districtID, idDistrict)
                    idMaster = districts[i].masterID;
                    console.log(idMaster);
                }
            }
        }).then(pr => {
            let next = false;
            while (next === false) {
                let count = 0;
                for (let i =0; i<applications.length; i++) {
                
                    if(JSON.stringify(applications[i].date).substring(0,11) === JSON.stringify(date).substring(0,11) && idMaster === applications[i].masterID) {
                        count++;
                    }
                    
                }
                console.log(count)
                if(count>4) {
                    date = addDays(date, 1);
                } else {
                    next = true;
                }
                // console.log(addDays(date, 1))
            }
            console.log()
        }).then(p => {
            console.log(idMaster);
           let application = new Application(idNumber, idMaster, idUser, idDistrict, idProblem, date, address, description, phoneNumber);
           console.log(application)
           applications.push(application);
           console.log(applications)
           update(ref(database), {
                Applications: JSON.stringify(applications)
            }).then(() => {
                alert("Успешно");
            }).catch((error) => {
                alert("Ошибка добавления");
            });
            window.location.href = "account.html";

    
        });;

    });
    } else {
        alert("Введены не все данные!");
    }
    
    

    
    
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// вывод на страницу аккаунта


function showItems() {
    let applicationsUser = [];
    const dbref = ref(database);
    get(child(dbref, "Masters")).then((snapshot)=> {
        console.log('asdf')
        if (localStorage.getItem('roleId')==1) {
            
            
            masters = JSON.parse(snapshot.val());
            // console.log(masters)
            for(let j=0; j<masters.length; j++) {
                // console.log()
                if(masters[j].userID == localStorage.getItem('userId')) {
                    // console.log(ma)
                    localStorage.setItem('masterId', JSON.stringify(masters[j].masterID));
                }
            }
            
        } 
    });
    get(child(dbref, "Applications")).then((snapshot)=> {
        applications = JSON.parse(snapshot.val());
        if(localStorage.getItem('roleId') == 1) {
            for (let i=0; i<applications.length; i++) {
                if(applications[i].masterID == localStorage.getItem('masterId')) {
                    applicationsUser.push(applications[i]);
                }
            }
        } else {
            for (let i=0; i<applications.length; i++) {
                if(applications[i].userID == localStorage.getItem('userId')) {
                    applicationsUser.push(applications[i]);
                }
            }
        }

        if(applicationsUser.length == 0) {
            document.getElementById('main__container').innerHTML = "";
            
            document.getElementById('main__container').insertAdjacentHTML('beforeend', 
            `
            <div class="plug">Заявок нет</div>
            <a href="newApplication.html" id="btnNewApplication" class="btnNewApplication btnNew2">Оставить заявку</a>
            `)
        }
        
        // console.log(applicationsUser)
        let problemName;
        let buttonsCount=0;
        for (let i = 0; i<applicationsUser.length; i++) {
            get(child(dbref, "Problems")).then((snapshot)=> {
                problems = JSON.parse(snapshot.val());
                for (let j=0; j<problems.length; j++) {
                    if (applicationsUser[i].problemID == problems[j].problemID) {
                        problemName = problems[j].problem;
                        break;
                    }
                }

                document.querySelector('.list-app').insertAdjacentHTML('beforeend', 
                `
                <button class="list-app__item" id="listBTN__${applicationsUser[i].applicationID}">
                    <div class="list-appItem__top">
                        <div class="itemID">№${applicationsUser[i].applicationID}</div>
                        <div class="itemDate">${JSON.stringify(applications[i].date).substring(1,11)}</div>
                    </div>
                    <div class="item__problem">Причина: ${problemName}</div>
                </button>
                `
                );
                buttonsCount++;
                if (i==0) {
                    
                    if (localStorage.getItem('roleId') == 2) {
                        showItem(applicationsUser[i].masterID, applicationsUser[i].address, applicationsUser[i].phoneNumber, applicationsUser[i].description, applicationsUser[i].applicationID, applicationsUser[i].date);
                    } else {
                        // console.log(application.userID)
                        showItem(applicationsUser[i].userID, applicationsUser[i].address, applicationsUser[i].phoneNumber, applicationsUser[i].description, applicationsUser[i].applicationID, applicationsUser[i].date);
                    }
                    document.querySelector('.list-app__item').classList.add('active');
                }
                let btns = document.getElementsByClassName('list-app__item');
                btns[buttonsCount - 1].addEventListener('click', changeInfo)

            });

        }
        // console.log("dfss")
    });
}

if (document.body.classList.contains('acc')) {
    showItems();
}


function changeInfo() {
    // console.log(applications);
    let id = this.id
    document.querySelector('.active').classList.remove('active');
    document.getElementById(id).classList.add('active');
    id = id.slice(9)
    // console.log(id)
    let application;
    for(let i=0; i<applications.length; i++) {
        if(id== applications[i].applicationID) {
            application = applications[i];
            break;
        }
    }
    if (localStorage.getItem('roleId') == 2) {
        showItem(application.masterID, application.address, application.phoneNumber, application.description, application.applicationID, application.date);
    } else {
        // console.log(application.userID)
        showItem(application.userID, application.address, application.phoneNumber, application.description, application.applicationID, application.date);
    }
    
}

function showItem(client, address, phone, description, index, date) {
    // console.log(client)
    const dbref = ref(database);
    get(child(dbref, "Users")).then((snapshot)=> {
        document.querySelector('.applicatin__id').textContent = index;
        document.querySelector('.application__date').textContent = JSON.stringify(date).substring(1,11);
        // document.querySelector('.application__user').textContent = "Мастер: " + client;
        document.querySelector('.application__address').textContent = "Адрес: " + address;
        document.querySelector('.application__phone').textContent = "Номер телефона: " + phone;
        document.querySelector('.application__description').textContent = "Описание: " + description;
        users = JSON.parse(snapshot.val());
        
        let userId;
        const dbref = ref(database);
        if (localStorage.getItem('roleId') == 2) {
            get(child(dbref, "Masters")).then((snapshot)=> {
                masters = JSON.parse(snapshot.val());
                for (let i =0; i<masters.length; i++) {
                    if(masters[i].masterID == client) {
                        // console.log(masters[i].masterID, idMaster)
                        userId = masters[i].userID;
                        // console.log(userId)
                    }
                }
                
                
            }).then(p=>{
                let masterName;
            
                users = JSON.parse(snapshot.val());
                for (let i =0; i<users.length; i++) {
        
                    if(users[i].userID == userId) {
                        
                        masterName = users[i].surname + " " + users[i].name;
                        break;
                    }
                }
                
                document.querySelector('.application__user').textContent = "Мастер: " + masterName;
            });
        } else {
            let masterName;
            userId = client;
            // console.log(userId)
            users = JSON.parse(snapshot.val());
                for (let i =0; i<users.length; i++) {
        
                    if(users[i].userID == userId) {
                        
                        masterName = users[i].surname + " " + users[i].name;
                        break;
                    }
                }
                
                document.querySelector('.application__user').textContent = "Клиент: " + masterName;
        }
        
    });
}


if (localStorage.getItem('roleId') == 1) {
    let btnForDel = document.getElementById('btnNewApplication');
    if(btnForDel) {
        btnForDel.remove();
    }
    
}













// function insertData() {
//     set(ref(database, "Users/"+ user.userID), {
//         userID: user.userID,
//         name: user.name,
//         surname: user.surname,
//         login: user.login,
//         password: user.password,
//         roleID: user.roleID
//     }).then(() => {
//         alert("Успешно");
//     }).catch((error) => {
//         alert("Ошибка");
//     });
// }
// // insertData();

// function selectData() {
//     const dbref = ref(database);
//     get(child(dbref, "Users")).then((snapshot)=> {
//         if(snapshot.exists()) {
//             console.log(snapshot.val());
//         } else {
//             alert("Не существует");
//         }
//     }).catch((error)=> {
//         alert("Не существует");
//     });
// }
// selectData();