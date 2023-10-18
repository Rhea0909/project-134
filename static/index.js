//Create date variable


//Load HTML DOM

//Define variable to store predicted emotion


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call

        $.ajax({

            type:'POST',
            url:"/predict-emotion",
            data:JSON.stringify(input_data),
            dataType:"json",
            contentType:'application/json',
            success:function(result){
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                //display
                $("#prediction").html(predicted_emotion)
                $("#prediction").css("display", "block")
                $("#emo_img_url").attr("src",emo_url)
                $("#emo_img_url").css("display", "block")


            },
            
              
                
                // Result Received From Flask ----->JavaScript
                
                // Display Result Using JavaScript----->HTML
                
            
            //Error function
            error:function(result){
                alert(result.responseJSON.message)

            }
        });
    });
})

