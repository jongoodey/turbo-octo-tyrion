$(document).ready(function(){
 
    FB.login(function(response) {
      if (response.session) {
 
          var user_id = response.session.uid;
          var page_id = "138114239627160"; //TefalUK
          var fql_query = "SELECT uid FROM page_fan WHERE page_id = "+page_id+"and uid="+user_id;
          var the_query = FB.Data.query(fql_query);
 
          the_query.wait(function(rows) {
 
              if (rows.length == 1 && rows[0].uid == user_id) {
                  $("#container_like").show();
 
                  //here you could also do some ajax and get the content for a "liker" instead of simply showing a hidden div in the page.
 
              } else {
                  $("#container_notlike").show();
                  //and here you could get the content for a non liker in ajax...
              }
          });
 
 
      } else {
        // user is not logged in
      }
    });
 
});