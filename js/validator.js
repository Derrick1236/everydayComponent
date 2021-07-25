function validator() {
    let fname = document.forms["checkin-form"]["first_name"].value;
    let lname = document.forms["checkin-form"]["last_name"].value;
    let first_name_msg = document.querySelector("#fname_msg");
    let last_name_msg = document.querySelector("#lname_msg");
    
    if (fname == "") {
        first_name_msg.innerHTML = "Please enter your first name !";
        return false;
    }
    else if (lname == ""){
        last_name_msg.innerHTML = "Please enter your last name !";
        return false;
    }
    else{
        return true;
    }
}