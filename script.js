document.getElementById("content").addEventListener("click", () => {
    document.querySelector("body").style.transition = '0.3s'
    document.querySelector("body").style.opacity = '0'
    setTimeout(() => {
        window.location.href = "content.html"
    },300)
})
document.getElementById("integ").addEventListener("click", () => {
    document.querySelector("body").style.transition = '0.3s'
    document.querySelector("body").style.opacity = '0'
    setTimeout(() => {
        window.location.href = "integrantes.html"
    },300)
})
window.addEventListener("load", function() {
    document.querySelector("body").style.opacity = '1'
    const hr = document.getElementById("animatedHr");
    let height = 0;
    const interval = setInterval(function() {
      if (height >= 90) {
        clearInterval(interval);
      } else {
        height++;
        hr.style.height = height + "vh";
      }
    }, 16);
  });

