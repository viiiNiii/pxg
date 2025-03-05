document.addEventListener("DOMContentLoaded", function () {
    const data = [
        ["BANANA", "BLOOD HERB", "ASPEAR SEED", "BABIRI SEED", "JAPANESE BONSAI"],
        ["PECHA SEED", "CHERI SEED", "CHIP 3.0", "CHARTI SEED", "LUM SEED"],
        ["RAWST SEED", "CHESTO SEED", "POKEDEX 1GEN", "CHILAN SEED", "MECHA CHIP"],
        ["", "CHIP 2.0", "POKEDEX 2GEN", "CHOPLE SEED", "POKEDEX 5GEN"],
        ["", "MINOR SEED BAG", "", "COLBA SEED", "POKEDEX 6GEN"],
        ["", "NOMEL SEED", "", "COLBUR SEED", "RESTORE POTION"],
        ["", "PERSIM SEED", "", "HABAN SEED", "SITRUS SEED"],
        ["", "RED STUDENT MONITOR", "", "KASIB SEED", "SOUL SOURCE"],
        ["", "", "", "KEBIA SEED", ""],
        ["", "", "", "OCCA SEED", ""],
        ["", "", "", "PASSHO SEED", ""],
        ["", "", "", "PAYAPA SEED", ""],
        ["", "", "", "POKEDEX 3GEN", ""],
        ["", "", "", "POKEDEX 4GEN", ""],
        ["", "", "", "RINDO SEED", ""],
        ["", "", "", "ROSELI SEED", ""],
        ["", "", "", "SHUCA SEED", ""],
        ["", "", "", "TANGA SEED", ""],
        ["", "", "", "WACAN SEED", ""],
        ["", "", "", "YACHE SEED", ""]
    ];

    const headers = ["RANK - E", "RANK - D", "RANK - C", "RANK - B", "RANK - A"];
    
    const table = document.createElement("table");
    table.style.width = "80%";
    table.style.margin = "20px auto";
    table.style.borderCollapse = "collapse";
    table.style.textAlign = "center";
    
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(headerText => {
        let th = document.createElement("th");
        th.textContent = headerText;
        th.style.border = "1px solid black";
        th.style.padding = "10px";
        th.style.backgroundColor = "#FFD700";
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    data.forEach(rowData => {
        let tr = document.createElement("tr");
        rowData.forEach(cellData => {
            let td = document.createElement("td");
            td.textContent = cellData;
            td.style.border = "1px solid black";
            td.style.padding = "8px";
            td.style.backgroundColor = "#f0f0f0";
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    document.body.appendChild(table);
});
