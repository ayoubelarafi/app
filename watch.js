    function updateDate(){
        var date=new Date();
        var settime = document.getElementById("settime");
        settime.innerHTML=date.getHours()+":" +date.getMinutes()+":"+date.getSeconds();
      var setDate =document.getElementById("setDate");
     setDate.innerHTML=date.getDate()+"-"+parseInt(date.getMonth()+1)+"."+date.getFullYear();
    }
    setInterval(updateDate,100);
    onload = updateDate();
    