// JavaScript file for portfolio website

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  
    // Form submission
    $("form").submit(function (event) {
      event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      // Perform validation or submission to backend here
      console.log("Name: " + name + ", Email: " + email + ", Message: " + message);
      // Reset form fields
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
      alert("Message sent successfully!");
    });
  });
  