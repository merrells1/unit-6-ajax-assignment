// Event listener for our button
$("#linkBtn").on("click", function() {
    // Storing our giphy API URL for a random link image (API key is on my account with Giphy)
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=wnsqtB0Gouba1axi5xFuqQJkMbXEmpCa&tag=&limit=5&rating=G&tag=link-legend-of-zelda" ;
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data from the AJAX request comes back
        .then(function(response) {
 
            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;
 
            // Creating and storing an image tag
 
            var linkGifs = $("<img>");
 
            // Setting the Image src attribute to imageUrl
            linkGifs.attr("src", imageUrl);
            linkGifs.attr("alt", "link image");
 
            // Prepending the Image to the images div
            $("#imageCol").prepend(linkGifs);
        });
 });

 // Event listener for our button
$("#sonicBtn").on("click", function() {
    // Storing our giphy API URL for a random link image (API key is on my account with Giphy)
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=wnsqtB0Gouba1axi5xFuqQJkMbXEmpCa&tag=&limit=5&rating=G&tag=sonic-the-hedgehog";
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data from the AJAX request comes back
        .then(function(response) {
 
            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;
 
            // Creating and storing an image tag
 
            var sonicGifs = $("<img>");
 
            // Setting the Image src attribute to imageUrl
            sonicGifs.attr("src", imageUrl);
            sonicGifs.attr("alt", "sonic image");
 
            // Prepending the Image to the images div
            $("#imageCol").prepend(sonicGifs);
        });
 });

  // Event listener for our button
$("#samusBtn").on("click", function() {
    // Storing our giphy API URL for a random link image (API key is on my account with Giphy)
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=wnsqtB0Gouba1axi5xFuqQJkMbXEmpCa&tag=&limit=5&rating=G&tag=samus-metroid";
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data from the AJAX request comes back
        .then(function(response) {
 
            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;
 
            // Creating and storing an image tag
 
            var samusGifs = $("<img>");
 
            // Setting the Image src attribute to imageUrl
            samusGifs.attr("src", imageUrl);
            samusGifs.attr("alt", "samus image");
 
            // Prepending the Image to the images div
            $("#imageCol").prepend(samusGifs);
        });
 });

   // Event listener for our button
$("#marioBtn").on("click", function() {
    // Storing our giphy API URL for a random link image (API key is on my account with Giphy)
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=wnsqtB0Gouba1axi5xFuqQJkMbXEmpCa&tag=&limit=5&rating=G&tag=mario-super-mario-brothers";
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data from the AJAX request comes back
        .then(function(response) {
 
            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;
 
            // Creating and storing an image tag
 
            var marioGifs = $("<img>");
 
            // Setting the Image src attribute to imageUrl
            marioGifs.attr("src", imageUrl);
            marioGifs.attr("alt", "mario image");
 
            // Prepending the Image to the images div
            $("#imageCol").prepend(marioGifs);
        });
 });

     // Event listener for our button
$("#bowserBtn").on("click", function() {
    // Storing our giphy API URL for a random link image (API key is on my account with Giphy)
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=wnsqtB0Gouba1axi5xFuqQJkMbXEmpCa&tag=&limit=5&rating=G&tag=bowser-super-mario-brothers";
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data from the AJAX request comes back
        .then(function(response) {
 
            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;
 
            // Creating and storing an image tag
 
            var bowserGifs = $("<img>");
 
            // Setting the Image src attribute to imageUrl
            bowserGifs.attr("src", imageUrl);
            bowserGifs.attr("alt", "bowser image");
 
            // Prepending the Image to the images div
            $("#imageCol").prepend(bowserGifs);
        });
 });

        //user input button function
$(function userInput() {
    var searchTerm = ('#addCharLabelTextBox'); //putting the text input by the user in the text box into the #addCharButton 
    searchTerm = searchTerm($.trim(searchTerm().replace(/ /g, "+")));
        
       // Event listener for our button
    $("#addCharButton").on("click", function() {

        // Storing our giphy API URL for a random link image (API key is on my account with Giphy)
        var queryURL = request.open('GET', 'https://api.giphy.com/v1/gifs/random?&tag=&limit=5&rating=G' + searchTerm + '&api_key=wnsqtB0Gouba1axi5xFuqQJkMbXEmpCa');
        
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After the data from the AJAX request comes back
            .then(function(response) {
    
                // Saving the image_original_url property
                var imageUrl = response.data.image_original_url;
    
                // Creating and storing an image tag
    
                var userCharGifs = $("<img>");
    
                // Setting the Image src attribute to imageUrl
                userCharGifs.attr("src", imageUrl);
                userCharGifs.attr("alt", "Character image");
    
                // Prepending the Image to the images div
                $("#imageCol").prepend(userCharGifs);
            });
    });
});

 /*var searchTerm = prompt('Add your search term here');
        searchTerm = searchTerm.trim().replace(/ /g, "+"); // adds a + wherever a space is
        request.open('GET', 'https://api.giphy.com/v1/gifs/random?&tag=&limit=5&rating=G' + searchTerm + '&api_key=wnsqtB0Gouba1axi5xFuqQJkMbXEmpCa');
        
        $("#adsense_client_id").bind('paste', function(e) {
    var clientId = $(this);
    setTimeout(function(){
        clientId.val($.trim(clientId.val()));
        alert(clientId.val());
    });
});
  $(searchTerm.val($.trim(searchTerm.val().replace(/ /g, "+")))); 
  
    var topics =['link', 'bowswer', 'mario', 'sonic-the-hedgehog', 'samus'];

        function logArray(list) {
            for (var j = 0; j < list.length; j++) {
              console.log(list[j]);
            }
          }
          logArray(topics);
        */

      