// your code here
var form=document.querySelector("form");
var nameValue=document.querySelector("#name");
var yearValue=document.querySelector("#year");
var btn=document.querySelector("#button");
var h3=document.querySelector("h3");
 function handleSubmit(event){
	 event.preventDefault();
	 var h3value="https://localhost:8080/";
	 var name=nameValue.value;
	 var year=yearValue.value;

	 if(name && year){
		 h3value+="?name="+name=+"&year="+year;
	 }else if(name && !year){
		 h3value+="?name="+name;
	 }else if(!name && year){
		 h3value+="?year="+year;
	 }
	 h3.textContent=h3value;
 }
form.addEventListener("submit",handleSubmit)
