
$(document).ready(function(){

	var areas = {
		"auto": {
				  "title": "automotive",
				  "content": "this is random content",
				  "bg_image": "images/1.jpg"
				},
		"chemicals": {
				  "title": "chemicals",
				  "content": "this is random content",
				  "bg_image": "images/2.jpg"
				},
		"energy": {
				  "title": "energy",
				  "content": "this is random content",
				  "bg_image": "images/1.jpg"
				}

	}


    $(".changeArea").click(function(){

    	var data =  $(this).attr('data-content')
    	$('#auto').css({'background-image': "url("+areas[data].bg_image+")"})
    	console.log('data', data)

    	var content = ` <div  class="paddlarge no1">
            <h3 class="whitefont decor">${areas[data].title}</h3><br>
            <h6 class="lwhitefont">${areas[data].content}</h6><br>
            <br>
            <button class="redbutton">Learn More</button>
          </div>`;

          console.log('content', content)

         $("#auto").html(content)
    });
    

});
