document.getElementById("see-more").addEventListener("click", () => {
    const target = document.getElementById("to-here");
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"    
    });
});