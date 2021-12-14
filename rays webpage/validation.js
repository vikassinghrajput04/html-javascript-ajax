
        function valid(frm) {
            var flag = true;

            if (frm.login.value == '') {
                document.getElementById("logincheck").innerHTML = "Login Id is required";
                flag = false;

            }
            if (frm.pass.value == '') {
                document.getElementById("passcheck").innerHTML = "Password is required";
                flag = false;

            }
            return flag;
        }