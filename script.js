const grid = ((size) => {
    container.innerHTML = "";
    for (let row=0 ; row < size ; row++) {
        const gridDivRow = document.createElement("div");
        gridDivRow.classList.add("gridRow");
        container.appendChild(gridDivRow);

        for (let col=0 ; col < size ; col++) {
            const gridDivItem = document.createElement("div");
            gridDivItem.classList.add("gridItem");
            gridDivItem.style.cssText = "background: bisque";
            gridDivItem.addEventListener('mouseenter', (e) => {
                
                const r = Math.floor(Math.random() * 255);
                const g = Math.floor(Math.random() * 255);
                const b = Math.floor(Math.random() * 255);   
                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
        gridDivRow.appendChild(gridDivItem);
        }; 
    };
});

grid(16);

container.addEventListener("click", () => {
    const allItems = document.querySelectorAll(".gridItem");

    function colorChange() {
        var arr = []
        for (let i = 0;i<3;i++) {
            var random = Math.floor(Math.random() * 255)
            arr.push(random)
        };
        allItems.forEach(item => {
            item.style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
        });
    };
    colorChange();
});

const header = document.createElement("div");
const button = document.createElement("button");
button.textContent = "gridsize";
button.style.cssText = "font-size: 20px";
document.body.insertBefore(header, container);
header.appendChild(button);

button.addEventListener("click", () => {
    const userChoice = prompt("Pick a gridsize between 1 and 100");
    const size = Number(userChoice); 
    
    if ( size >= 1 && size <= 100 ){
        grid(size);
    } else {
        alert ("wrong number!");
    }
});


