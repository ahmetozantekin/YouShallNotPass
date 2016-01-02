var response = [
    "Berbat.",
    "Sen bu günlere bu şifreyle iyi gelmişsin.",
    "Hekleneceksin.",
    "Bu bir şifre değil, bir utanç.",
    "Hayal kırıklığına uğradım.",
    "Önemsiz biri olduğunu varsayıyorum.",
    "S*ktir.",
    "15 yıl öncesine göre harika bir şifre.",
    "Çok yaratıcı bir şifreymiş kardeş.",
    "Senin için endişeliyim.",
    "Zayıf. İnanılmaz zayıf.",
    "Tüm zamanların en kötü şifresi bu.",
    "Şifreni ciddiye alman gerek.",
    "Sana acıyorum."
];

$(document).ready(function() {
    $("#password").on("keyup", function() {
        
         $('body').addClass("easing");
         $('body').css("background","#c0392b");
         $('#password').css("background","#e1e1e1");
         $('h1').css("color","#34495e");
         if(document.formsec.secret.value.length == 0){
              $('body').addClass("easing");
              $('body').css("background","#34495e");
              $('#password').css("background","#c0392b");
              $('h1').css("color","#c0392b");
              $("#comm").text(" ");
         }
         
        if(document.formsec.secret.value.length < 4){
            console.log("o-yes");
        } else if(document.formsec.secret.value.length > 20){ 
            $("#comm").text("TAMAM. İYİ. GÜZEL ŞİFRE.")
        } else{
    
            var rand = Math.floor((Math.random() * 15) + 1);
            
            $("#comm").text(response[rand]).animate({'opacity': 1}, 3000);;
            
        }  
    });  
});

