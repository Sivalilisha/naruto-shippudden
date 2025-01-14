document.addEventListener("DOMContentLoaded",function(){
    const themeToggle=document.getElementById("theme-toggle");
    const currentTheme=localStorage.getItem("theme") || "light";
    document.body.classList.add(currentTheme + "-mode");
    themeToggle.addEventListener("click",function(){
        if (document.body.classList.contains("light-mode")){
            document.body.classList.replace("light-mode","dark-mode");
            localStorage.setItem("theme","dark")
        }
        else{
            document.body.classList.replace("dark-mode","light-mode");
            localStorage.setItem("theme","light");
        }
    });
});