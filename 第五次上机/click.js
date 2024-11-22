document.addEventListener("DOMContentLoaded", function() {

    const employeeCard = document.querySelectorAll(".employee-card");

    //添加点击事件（onclick）
    employeeCard.forEach(function(item){
        item.onclick=function(){
            alert("你点击了："+this.textContent);
        };
    });

    // 添加更改事件（onchange）（对于 div 元素不常用，通常用于 input 元素）
    const specialEmployee = document.getElementById("special-employee");
    if(specialEmployee){
        specialEmployee.addEventListener("change",function () {
            console.log("特殊员工已更改");    
        });
    }

      // 添加鼠标按下事件（onmousedown）
      employeeCard.forEach(function(item){
        item.onmousedown=function(){
            this.style.backgroundColor = "#d1c4e9"; // 按下时改变背景色
        };
      });

        // 添加鼠标移出事件（onmouseout）
        employeeCard.forEach(function(item) {
            item.onmouseout = function() {
              this.style.backgroundColor = ""; // 鼠标移出时恢复原样
            };
          });

        // 添加鼠标悬停事件（onmouseover）
        employeeCard.forEach(function(item) {
            item.onmouseover = function() {
              this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
            };
          });

        // 添加鼠标松开事件（onmouseup）
        employeeCard.forEach(function(item) {
            item.onmouseup = function() {
              this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色
            };
          });
});

