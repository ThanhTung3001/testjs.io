
var times=0;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function checkQuestion(value){
   var boxAdminReply= document.getElementById('reply__from__admin');
   var questionToClient=document.getElementById('questionToClient');
   var replyButton=document.getElementById('No');
   var boxAdminReply1= document.getElementById('reply__from__admin_1');
 if(value===1){
    boxAdminReply.style.display='block';
    questionToClient.style.display='none';
 }else{
    questionToClient.style.display='block';
    boxAdminReply1.style.display='none  ';
    replyButton.style.position='absolute';
    replyButton.style.top=getRandomInt(document.body.clientHeight-100);
    replyButton.style.right=getRandomInt(document.body.clientWidth-100);
    console.log(document.body.clientWidth);
    console.log(document.body.clientHeight);
    times++;
 }
 if(times===5){
    boxAdminReply1.style.display='flex';
    questionToClient.style.display='none';
    times=0;
 }
}