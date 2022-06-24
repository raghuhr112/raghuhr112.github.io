
function register(){
    console.log("Calling Register")
    var username=document.getElementById("username")
    console.log(username)
    console.log(username.value)
    console.log(username.value.length)
    if(username.value.length==""){
        console.log("Please Enter User Name")
        var errorusername=document.getElementById("errorusername")
        console.log(errorusername)
        errorusername.innerHTML="Please Enter username"
    }

    var gender=document.registration.gender;
    console.log(document.registration)
    console.log(gender)
    if(document.registration.gender[0].checked==false &&
        document.registration.gender[1].checked==false&&
        document.registration.gender[2].checked==false){

            console.log("Please Select Gender")
            var errorgender=document.getElementById("errorgender")
            errorgender.innerHTML="Please select Gender"
        }

    console.log(document.registration.city)
    console.log(document.registration.city.value)
    if(document.registration.city.value=="0"){
        console.log("Please Select City")
        var errorcity=document.getElementById("errorcity")
        errorcity.innerHTML="Please Select City"
        errorcity.style.color="Red"
    }
    
}
