function getXmlHttpObject(){
    var xmllhttp=null;
    try {
        // firefox, opera 8.0+, safari
        xmllhttp= new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer
        try {
            xmllhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmllhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmllhttp;
}

function loadDOC(){
    var p= getXmlHttpObject();
    p.onreadystatechange = function(){
        if(p.readyState==4&&p.status==200){
            document.getElementById("demo").innerHTML=p.responseText;
        }
    }
    p.open("GET","ajax_info.txt", true);
    p.send(null);
}