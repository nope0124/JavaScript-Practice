"use strict";
{
    function createColumn(col){
        const nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        const column=[];
        for(let i=0;i<5;i++) column[i]=nums.splice(Math.floor(Math.random() * nums.length),1)[0],column[i]+=15*col;
        return column;
    }

    function createColumns(){
        const columns=[];
        for(let i=0;i<5;i++) columns[i]=createColumn(i);
        columns[2][2]="FREE";
        return columns;
    }

    

    function renderBingo(columns){
        for(let i=0;i<5;i++){
            const tr=document.createElement("tr");
            for(let j=0;j<5;j++){
                const td=document.createElement("td");
                td.textContent=columns[j][i];
                tr.appendChild(td);
            }
            document.querySelector("tbody").appendChild(tr);
        }
    }
    const columns=createColumns();
    renderBingo(columns);

    reset.addEventListener("click",function(){
        document.querySelector("tbody").textContent="";
        const tmpColumn=createColumns();
        renderBingo(tmpColumn);
    });
}