function time() {
    let x= new Date().getHours(), y= new Date().getMinutes(), z= new Date().getSeconds();
    if(x<10)
    {
      x = "0"  + x;
    }
    y = y < 10 ? "0" + y :y;
    z = z < 10 ? "0" + z :z; // this is the same as previous
    document.getElementById("hour").innerText = x;
    document.getElementById("min").innerText = y;
    document.getElementById("sec").innerText = z;
    setTimeout(time,1000);
}
time();