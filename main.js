document.getElementById('btnNewAdvice').addEventListener('click', ()=>{
    document.getElementById('adviceTxt').innerText = "Loading...";
    document.getElementById('btnNewAdvice').style.display = 'none'
    getApiData();
})


