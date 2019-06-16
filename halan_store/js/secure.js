function url_secure()
{   alert(sessionStorage.getItem.key);
	if(sessionStorage.getItem.key==0)
	{ 
		var page = document.getElementsByClassName("page");
		page.style.display="none";
        alert("please login appropriataly");
		document.body.innerHTML = "<h1 style='color:#262626;font-size:100px;font-family:sans-serif;text-align:center'>Illigal action performed</h1>";
	}
    else{
        alert("sessionStorage.getItem.key");
    }
}
