// Function to get Song Info when image figure is clicked
/**
 * @param figure_index      
 * 
 * 
 * Function gets song from spotify using the image index of our gallery.
 * Then finds the correct item_index inside of the JSON response data from Spotify
 * which will produce a preview url that will be used to play song from soundtrack.
 */


async function clickedEvent(figure_index){      

    let artwork_id = document.getElementsByTagName('figure')[figure_index].attributes[1].value;

    headers = new Headers([               
         ['Content-Type', 'application/json'],
         ['Accept', 'application/json'],
     ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${artwork_id}?fields=title,artist_title,artwork_type_title,date_end`,{          //         ?fields=id,title,image_id
         method: 'GET',          
         headers: headers
     });

     let result = await fetch(request);  

     let response = await result.json();  // convert to json

    test=document.getElementById([figure_index])
    test.innerHTML=`Title: ${response.data.title} <br> Artist: ${response.data.artist_title}`
}


    
    

 /**
  * @param id
  * @param event
  * 
  * id = artwork-id from artic.api
  * event = Mouse event given by the action from our user
  * 
  */

 function getArtworkDetails(id,event){
    switch(id){                          // switch function
        case '27943': {                // 
            event.stopPropagation();
            clickedEvent(0)
            break;
        }                                                                                
        case '109819': {                // 
            event.stopPropagation();
            clickedEvent(1)
            break;
        }
        case '24645': {                // 
            event.stopPropagation();
            clickedEvent(2)
            break;
        }
        case '28560': {
            event.stopPropagation();  // 
            clickedEvent(3)
            break;
        }
        case '76395': {
            event.stopPropagation();  // 
            clickedEvent(4)
            break;
        }
        case '14556': {                // 
            event.stopPropagation();
            clickedEvent(5)   // 
            break;
        }
    }
}