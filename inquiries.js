function email(){

  var template_parameters = {

    visitors_name: document.getElementById('name').value,
    visitors_email: document.getElementById('email').value,
    message: document.getElementById('message').value,

  };

  var final_name = template_parameters.visitors_name.trim();
  var final_email = template_parameters.visitors_email.trim();
  var final_message = template_parameters.message.trim();


  if(final_name == "" || final_email == "" || final_message == ""){
    
    alert("Please complete all the fields");
    die();

  }

  const service = "service_pzn5z5g";
  const template = "template_g4e92lp";

  emailjs.send(service, template, template_parameters).then(
  
    (res)=>{
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
      console.log(res);
      alert("Sent successfully");
    }
  ).catch((err) => console.log(err));

}
