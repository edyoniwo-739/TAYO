
  function validate() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }


  {
  let x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("email must be filled out");
    return false;
  }

  }
  {
 
  let x = document.forms["myForm"]["subject"].value;
  if (x == "") {
    alert("subject must be filled out");
    return false;
  }
}
{
  let x = document.forms["myForm"]["message"].value;
  if (x == "") {
    alert("message must be filled out");
    return false;
  }
}
}
