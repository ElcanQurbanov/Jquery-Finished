$(document).ready(function () {

    let users = [];


    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
    }


    $("button").click(function () {

        
       $("ul").empty();
       let user1 = $(".name").val()
       let user2 = $(".surname").val()


       users.push({
            id:user1 + new Date().getMilliseconds(),
            name : user1,
            surname :user2
       })

        

     
        


        localStorage.setItem("users", JSON.stringify(users));

       

        for (const item of users) {
            
            
            
          $("ul").append($(`<li  data-id="${item.id}" class="list-group-item"> ${item.name +" " + item.surname} </li>`));



        }
        $(".name").val("")
        $(".surname").val("")



    })


    for (const item of users) {
            
        $("ul").append($(`<li data-id="${item.id}" class="list-group-item"> ${item.name +" " + item.surname} </li>`));

    }



    $(document).on("click",("ul li"),function() {
        
        users =users.filter(m => m.id !=$(this).attr("data-id"))
        localStorage.setItem("users", JSON.stringify(users));


        $(this).remove()

    })

    


  



});