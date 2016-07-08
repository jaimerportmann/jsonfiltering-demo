$(document).ready(function() {
            
        $(".filtering :checkbox").click(function() {
           $(".filtering :checkbox:checked").each(function() {
               search($(this).val());
           });
        });
        
        search();
        });
        
        function search(type) {
        $(".loading").show(); setTimeout(function () { $(".loading").fadeOut(); }, 1000);
        $.getJSON("source.json", function(data) {
            //console.log(json); // this will show the info it in firebug console
        
              var items = [];
              $.each( data, function( key, val ) {
  
                console.log(type);
                if (jQuery.inArray(type, val.discipline) !='-1') {
                    items.push( '<div class="coach"><div class="self"><div class="self-avatar"><img src="' + val.picture + '"/></div><div class="self-data"><div style="font-size:18px">' + val.name + '</div><div style="font-size:10px">' + val.discipline + '</div></div></div><div class="value"><img src="assets/price.png"/> 25$ <img src="assets/time.png"/> 0:45</div><div class="view-details" onclick="$(this).children().show();">View Details<br><div class="details"><b>Age:</b> ' + val.age + ' <b>Gender:</b> ' + val.gender + '<br><br>' + val.about + '<br><br><div class="contact"><a href="?contact=' + val.guid +'">contact now!</a></div></div></div>' );  
                } else if(type === "Outdoor" || type === "Indoor"){
                    items.push( '<div class="coach"><div class="self"><div class="self-avatar"><img src="' + val.picture + '"/></div><div class="self-data"><div style="font-size:18px">' + val.name + '</div><div style="font-size:10px">' + val.discipline + '</div></div></div><div class="value"><img src="assets/price.png"/> 25$ <img src="assets/time.png"/> 0:45</div><div class="view-details" onclick="$(this).children().show();">View Details<br><div class="details"><b>Age:</b> ' + val.age + ' <b>Gender:</b> ' + val.gender + '<br><br>' + val.about + '<br><br><div class="contact"><a href="?contact=' + val.guid +'">contact now!</a></div></div></div>' );    
                } else {
                    
                }

              });
            
            
              $("#main-container").html(items);
              $("#result").html('<b>' + items.length + ' Coaches</b> match your search');
        });
}
