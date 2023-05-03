//making hourly deviders for whole 24 hour
var plannerContainer=$('.container-lg');

for (var i=0; i<24;i++){
  var divHourId=$('<div></div>').attr('class', "row time-block ");
  divHourId.attr('id', 'hour-'+i);
  var divHour=$('<div></div>').attr('class',"col-2 col-md-1 hour text-center py-3");
  divHour.text(i)
  var savedItemId='hour'+i;
  var textarea=$('<textarea>',savedItemId, '</textarea>').attr("class", "col-8 col-md-10 description" , 'rows', '3');
  var button=$('<button></button>').attr("class", "btn saveBtn col-2 col-md-1" );
  button.attr("aria-label" , "save");
  var icon=$('<i></i>').attr('class' , "fas fa-save",  'aria-hidden', "true");
  button.append(icon);
  divHourId.append(divHour);
  divHourId.append(textarea);
  divHourId.append(button);
  plannerContainer.append(divHourId);
  var currentHour=dayjs().format('H');
  var savedItemId='hour-'+i;
  textarea.html(localStorage.getItem(savedItemId))
  if (i==currentHour){
    divHourId.addClass("present");
  } else if(i<currentHour){
    divHourId.addClass("past");
  } else {
    divHourId.addClass("future");
  }
}  

$(function () {
  //Add a listener for click events on the save button. 
  
  $(".saveBtn").on("click", function(){
    
   var hour = $(this).parent().attr('id');
   console.log("event " + hour);
   var taskInput=$(this).siblings(".description").val();
   console.log(taskInput);
   localStorage.setItem(hour, taskInput);
   
   console.log(hour + "  hour id")
   var savedItem=$(this).siblings('.description');
   console.log(savedItem)
   savedItem.html(localStorage.getItem(hour));
  })
  //  Add code to apply the past, present, or future class to each time
  
  var currentHour=dayjs().format('H');
  console.log(currentHour);
  
  
  // Add code to display the current date in the header of the page.
  var currentDate=dayjs();
  $('#currentDay').text(currentDate.format('dddd, MMMM D YYYY hh:mm:ss a'));
});

