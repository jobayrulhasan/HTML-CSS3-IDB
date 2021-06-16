
        function validate() {
        if(document.getElementById('fname').value=="")
        {
        alert("First name is required");
        return true;
        }
        if (document.getElementById('lname').value == "") {
        alert("Last name is required");
        return true;
        }
        if (document.getElementById('email').value == "") {
        alert("Email is required");
        return true;
        }
        if (document.getElementById('phone').value == "") {
        alert("Phone is required");
        return true;
        }
        return true;
        }