var height = 10;
 $('#increase').click(function(){
   //Augmenter la hauter de 10px
   height += 10;
   //si la hauteur depasse 100px
   if(height == 100){
  //il se remettra à la hauter de 10px
     height = 10;
   }else{
     //Le rectangle restera à 10px
   $('.rectangle').css('height', height);
 }
 });
 //Remettre les couleurs initailes
$('#initial').click(function(){
$('.rectangle').css('background-color','#069')
});
//Disparaitre le rectangle
$('#disappear').click(function(){
$('.rectangle').hide();
});
//Mettre le rectangle de coueur vert
$('#colorgreen').click(function(){
  $('.rectangle').css('background-color','green');
});
//Afficher le rectangle
$('#display').click(function(){
$('.rectangle').show()
});
