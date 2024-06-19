document.getElementById('btnNewAdvice').addEventListener('click', ()=>{
    document.getElementById('adviceTxt').innerText = "Loading...";
    document.getElementById('btnNewAdvice').style.display = 'none'
    getApiData();
})


/************************************************************************************
 * ASYNC AWAIT
 ************************************************************************************/
async function getInitialAdvice() {
    try {
      document.getElementById('adviceTxt').innerText = "Loading...";
      document.getElementById('btnNewAdvice').style.display = 'none'
      const response = await axios.get('https://api.adviceslip.com/advice');
      document.getElementById('advice-number').innerText = response.data.slip.id;
      document.getElementById('adviceTxt').innerText = `"${response.data.slip.advice}"`;
    } catch (error) {
      alert(error.message)
      console.error(error);
    }
    finally{
        document.getElementById('btnNewAdvice').style.display = 'flex'
        console.log('Api call completed!');
    }
  }
getInitialAdvice();