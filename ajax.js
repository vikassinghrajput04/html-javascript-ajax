console.log("this is Ajax js....");
        let fetchBtn= document.getElementById("fetchBtn");
        fetchBtn.addEventListener('click', buttonClickHandler);
        function buttonClickHandler(){
            console.log("fetch button clicked!!");
            const xhr = new XMLHttpRequest();
            xhr.open('GET','http://api.sunilos.com:9080/ORSP10/College' ,true);
            xhr.onprogress = function (){
                console.log("on progress...........");
            }
            xhr.onload = function (){
                console.log(this.responseText);
            }
            xhr.send();
        }