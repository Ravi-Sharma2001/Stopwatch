var timer = document.getElementById('watch');
var mill=document.getElementById('milli');
var hr = "00";
var min = "00";
var sec = "00";
var misec="00";
var i=1;
var timestop = true;
var lh=0;
var lm=0;
var ls=0;
var lms=0;
var dh=0;
var dm=0;
var ds=0;
var dms=0;

function startTimer() {
  if (timestop == true) {
        timestop = false;
        watchreading();
    }
}
function stopTimer() {
  if (timestop == false) {
    timestop = true;
  }
}

function watchreading() {
    if (timestop == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    misec = parseInt(misec);    
    misec = misec + 1;

    if(misec== 100)
    {
        sec=sec+1;
        misec=0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    if (misec < 10 || misec == 0) {
        misec = '0' + misec;
      }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;
    mill.innerHTML=misec;

    setTimeout("watchreading()", 10);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    mill.innerHTML="00";
    hr="00";
    min="00";
    sec="00";
    misec="00";
    timestop=true;
    document.getElementById("laps").style.visibility = "hidden";
    i=1;
    document.getElementById("laps").innerHTML = "";
    document.getElementById("diffeven").style.visibility = "hidden";
    document.getElementById("diffeven").innerHTML = "";
    document.getElementById("diffodd").style.visibility = "hidden";
    document.getElementById("diffodd").innerHTML = "";
}
function lapTime()
{
   

    var el = document.getElementById("laps");
    var height = el.offsetHeight;
    var newHeight = height + 70;
    el.style.height = newHeight + 'px';
    document.getElementById("laps").style.visibility = "visible";
    var lap = document.createElement("p");
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    misec = parseInt(misec); 
    if (misec < 10 || misec == 0) {
        misec = '0' + misec;
      }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    var text = document.createTextNode("Lap "+i+": "+hr+":"+min+":"+sec+":"+misec);
    lap.appendChild(text);
    var laprecord = document.getElementById("laps");
    laprecord.appendChild(lap);
  if(i>1)  
  {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    misec = parseInt(misec);
    dh=hr-lh;
    dm=min-lm;
    ds=sec-ls;
    dms=misec-lms;  
    if(dms<0)
    {
        dms=100+dms;
        ds=ds-1;
    }
    if(ds<0)
    {
        ds=60+ds;
        dm=dm-1;
    }
    if(dm<0)
    {
        dm=60+dm;
        dh=dh-1;
    }
    if(dh<0)
    {
        dh=60+dh;
    }
    if (dms < 10 || dms == 0) {
        dms = '0' + dms;
      }
    if (ds < 10 || ds == 0) {
      ds = '0' + ds;
    }
    if (dm < 10 || dm== 0) {
      dm = '0' + dm;
    }
    if (dh < 10 || dh == 0) {
      dh = '0' + dh;
    }
    document.getElementById("diffeven").style.visibility = "visible";
    var diff1 = document.createElement("p");
    var text1 = document.createTextNode("+ "+dh+":"+dm+":"+ds+":"+dms);
    diff1.appendChild(text1);
    var diffe = document.getElementById("diffeven");
    diffe.appendChild(diff1);
}
    i++;
    lh=parseInt(hr);
    lm=parseInt(min);
    ls=parseInt(sec);
    lms=parseInt(misec);
}
