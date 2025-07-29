const grid16 = ((div) => {
    for (let i=0 ; i < 16 ; i++) {
        const gridDivRow = document.createElement("div");
        gridDivRow.classList.add("gridRow");
        container.appendChild(gridDivRows);

        for (let i=0 ; i < 16 ; i++) {
            const gridDivItem = document.createElement("div");
            gridDivItem.classList.add("gridItem");
            gridDivItem.style.cssText = "border: 2px solid black; width: 50px; height: 50px; background: bisque";
            gridDiv.appendChild(gridDivItem);
        }; 
    };
});

grid16();
