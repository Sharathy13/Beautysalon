function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var service = document.getElementById('service').value;

    

    


    // Additional validation logic can be added here

    // If all fields are filled out, submit the form

    if (name || email || phone || date || time || service !=" ") {
        alert("Your appointment has been booked");

    }

   
        
    document.getElementById('appointmentForm').submit();
  }