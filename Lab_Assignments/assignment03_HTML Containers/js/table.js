// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

// loadTableData(users);
	
// function loadTableData(users){
// 	const tableBody = document.getElementById("userTable").getElementsByTagName("tbody")[0];
// 	let dataHtml = '';
// 	for(let user of users){
// 		dataHtml += `<tr><td>${user.first_name}</td>
// 						 <td>${user.last_name}</td>
// 						 <td>${user.age}</td>
//                          <td><a href="mailto:user.email">${user.email}</a></td></tr>`;
// 	}
// 	console.log(dataHtml);
// 	tableBody.innerHTML = dataHtml;
// }

function init(){
    var tableBody = document.getElementById("userTable").getElementsByTagName("tbody")[0];
    var dataHtml = '';
    users.forEach(function(userInfo){
	    dataHtml += `<tr><td>${userInfo.first_name}</td>
	    				 <td>${userInfo.last_name}</td>
	    				 <td>${userInfo.age}</td>
	    				 <td><a href="mailto:user.email">${userInfo.email}</a></td></tr>`;
	    //onsole.log(dataHtml);
    });
    tableBody.innerHTML = dataHtml;
}
window.onload = init;