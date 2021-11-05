
Array.from(document.querySelectorAll("input")).forEach(input => {
    input.addEventListener('change',handleChange);
    input.addEventListener('mousemove',handleChange);
    
});


function handleChange(){
    const prefix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${prefix}`);
}