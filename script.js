const header = document.createElement("div");
const button = document.createElement("button");
button.textContent = "gridsize";
button.style.cssText = "font-size: 20px";
document.body.insertBefore(header, container);
header.appendChild(button);

const grid16 = (() => {
    for (let row=0 ; row < 16 ; row++) {
        const gridDivRow = document.createElement("div");
        gridDivRow.classList.add("gridRow");
        container.appendChild(gridDivRow);

        for (let col=0 ; col < 16 ; col++) {
            const gridDivItem = document.createElement("div");
            gridDivItem.classList.add("gridItem");
            gridDivItem.style.cssText = "width: 50px; height: 50px; background: bisque";
            gridDivItem.addEventListener('mouseenter', () => {
                gridDivItem.style.backgroundColor = 'black';
            });
            gridDivRow.appendChild(gridDivItem);
        
        }; 
    };
    
});

grid16();

container.addEventListener("click", () => {
  const allItems = document.querySelectorAll(".gridItem");
  allItems.forEach(item => {
    item.style.backgroundColor = "bisque";
  });
});

