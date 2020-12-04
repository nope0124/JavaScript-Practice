"use strict";
{
    const btn=document.getElementById("btn");
    btn.addEventListener("click",()=>{
        const results=["大吉","中吉","小吉","吉","末吉","凶","大凶"];
        const num=Math.floor(Math.random()*results.length);
        btn.textContent=results[num];
    });
}