$(document).ready(function() {
    $("#users").click(function() {
      $("#result").empty();
      $.ajax('https://jsonplaceholder.typicode.com/users')
        .done(response => {
          $.each(response, function(index, value) {
            $("#userTable").append("<tr data-id="+value.id+"><td>"+value.id+"</td><td>"+value.username+"</td><td>"+value.email+"</td></tr>");
          });
          $("#userTable").show();
        });
    });
    
    $("#userTable").on('click', 'tr', function(event){
      event.preventDefault();
      var self = $(this);
      var userId=self.attr("data-id");
      console.log(userId);
      $.get("http://jsonplaceholder.typicode.com/posts?userId="+userId)
          .done(function(data){

              var tableStr = '<tr><td colspan="3"><table id="postTable"><tr><th>ID</th><th>Title</th><th>Body</th></tr>';

              $.each(data, function (index, value) {
                  tableStr += `<tr data-id=${value.id}><td>${value.id}</td><td>${value.title}</td><td>${value.body}</td></tr>`;
              });
              tableStr +='</table></td></tr>';
              self.closest("tr").after(tableStr);
          }).fail(function () {

      });
  });

  $("#userTable #postTable").on('click', 'tr', function(event) {
    event.preventDefault();
    var self = $(this);
      var postId=self.attr("data-id");
      console.log(postId);
      $.get("http://jsonplaceholder.typicode.com/comments?postId="+postId)
          .done(function(data){

              var tableStr = '<tr><td colspan="3"><table id="commentTable"><tr><th>ID</th><th>Title</th><th>Body</th></tr>';

              $.each(data, function (index, value) {
                  tableStr += `<tr data-id=${value.id}><td>${value.id}</td><td>${value.name}</td><td>${value.email}</td></tr>`;
              });
              tableStr +='</table></td></tr>';
              self.closest("tr").after(tableStr);
          }).fail(function () {

      });
  });

});
  