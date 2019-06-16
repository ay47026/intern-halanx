
function login(){
  var username = (document.getElementById("user_name").value);
  var password = (document.getElementById("pwd").value);
    var login_input = {username:username,password:password};
    var login_data = JSON.stringify(login_input);
    sessionStorage.setItem(username,login_data);
    var session_data =sessionStorage.getItem(username);
    var user_detail = JSON.parse(session_data);
  
    
        if(user_detail.username=='text' && user_detail.password=='text')
            {
				location.replace("user_store.html");
				return false;
			}

			else{
				alert('password not matched');
			}
}

 function change_time_dis(){
   
       var row=document.getElementById("row");
     row.style.display="block";
 }
function change_time_hide(){
   
       var row=document.getElementById("row");
     row.style.display="none";
 }

function change_time()
{ 
    var x_inc=document.getElementById("x_inc"); 
    var x_dec=document.getElementById("x_dec");
   var y_inc=document.getElementById("y_inc");
   var y_dec=document.getElementById("y_dec");
  var x_p=document.getElementById("x");
   var y_p=document.getElementById("y");
  var h1=document.getElementById("time");
    var x=10;
    var y=5;
   
    x_inc.onclick=function (){
       
        x=x+1;
      h1.innerHTML=x+"pm"+" to "+y+"pm";
x_p.innerHTML=x+"pm";
 y_p.innerHTML=y+"pm";
    }
     x_dec.onclick=function (){
        x=x-1;
         h1.innerHTML=x+"pm"+" to "+y+"pm";
x_p.innerHTML=x+"pm";
 y_p.innerHTML=y+"pm";
    }
     y_inc.onclick=function (){
        y=y+1;
         h1.innerHTML=x+"pm"+" to "+y+"pm";
x_p.innerHTML=x+"pm";
 y_p.innerHTML=y+"pm";
    }
     y_dec.onclick=function (){
        y=y-1;
         h1.innerHTML=x+"pm"+" to "+y+"pm";
x_p.innerHTML=x+"pm";
 y_p.innerHTML=y+"pm";
    }
  

}
change_time();



function graph(){
   var t;
     var localdata =localStorage.getItem("t_v");
    var lddd= JSON.parse(localdata);
      if(localdata==null)
    {
     t=20; 
       
    }
    else{
      t=lddd.tt;
         
    }
    
   
    var login_input = {tt:t};
    var login_data = JSON.stringify(login_input);
    localStorage.setItem("t_v",login_data);
   var y_in=document.getElementById("y_in");
   var y_de=document.getElementById("y_de");
  var ld=document.getElementById("ld");
    if(t<70){
     y_in.onclick=function (){
        t=t+20;
          var login_input = {tt:t};
    var login_data = JSON.stringify(login_input);
    localStorage.setItem("t_v",login_data);
      ld.innerHTML=t/2;
         window.location=location.href;
    }}
     if(t>11){
     y_de.onclick=function (){
        t=t-20;
          var login_input = {tt:t};
    var login_data = JSON.stringify(login_input);
    localStorage.setItem("t_v",login_data);
      ld.innerHTML=t/2;
         window.location=location.href;
    }}
    var row_top= document.getElementById("row_top");
     var row_bottom= document.getElementById("row_bottom");
     
    
 ld.innerHTML=t/2;
    
var width=100/t;
    var i;
    for(i=0;i<t;i++){
    var p_1=document.createElement("DIV"); 
    p_1.setAttribute("id","p_1");
        p_1.style.width=width+"%";
    row_top.appendChild(p_1);
        
    var p_1_d=document.createElement("DIV"); 
    p_1_d.setAttribute("id","p_1_d");
        p_1_d.style.width=width+"%";
        p_1_d.style.height="50px";
    row_bottom.appendChild(p_1_d);
        if(i%2==0){
          var p_1_in=document.createElement("DIV"); 
    p_1_in.setAttribute("id","p_1_in");
        p_1.appendChild(p_1_in);
                   var p_1_in_in=document.createElement("DIV"); 
    p_1_in_in.setAttribute("id","p_1_in_in");
        p_1_in.appendChild(p_1_in_in);
           
      var a = [10,20,30,40,50,60,30,70,80,90,100,110,170,130,40,120,150,170,180,190,120,0,20,30,40,50,60,30,70,80,90,100,110,130,130,40,120,150,170,180,190,120];
        p_1_in.style.width="100%";
        p_1_in.style.height=a[i]*2+"px";
            
            p_1_d.innerHTML=i/2+1;
             p_1_in_in.innerHTML=a[i];
        
        }
        
        
    } var count=22;
     var col_l= document.getElementById("col_l");
     for(i=0;i<count;i++){
    var h_1=document.createElement("DIV"); 
    h_1.setAttribute("id","h_1");
         h_1.innerHTML=210-(i*10)+" -";
    col_l.appendChild(h_1);}
   
}
 window.onload= graph();
function logout(){
	var user = confirm("Are you sure ?");
	if(user == true)
	{
	sessionStorage.clear();
	setTimeout(function(){
		window.location="../index.html";
	},1000);
	}
}
