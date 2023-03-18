<!--Whatsapp Snippet-->
<script>
    var url = 'popupScript.js';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
  "enabled":true,
  "chatButtonSetting":{
      "backgroundColor":"#4dc247",
      "ctaText":"",
      "borderRadius":"25",
      "marginLeft":"0",
      "marginBottom":"50",
      "marginRight":"50",
      "position":"right"
  },
  "brandSetting":{
      "brandName":"Bharat Mody",
      "brandSubTitle":"Typically replies within a day",
      "brandImg":"https://assets.devfolio.co/users/e9bb9fb3c8644f99bf83d3c8b7f4c023/avatar-f17b38a3-45b0-4f6d-9380-d54d4b4fb0df.jpeg",
      "welcomeText":"Hi there!\nDo you wish to ask any questions?",
      "messageText":"Hello Sir,%0AI have a question about {{page_link}}",
      "backgroundColor":"#0a5f54",
      "ctaText":"Start Chat",
      "borderRadius":"25",
      "autoShow":false,
      "phoneNumber":"919876543210"
  }
};
    s.onload = function() {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
</script>
<!--End Whatsapp Snippet-->
