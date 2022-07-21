const img = document.querySelector('img');

const call_api = () => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=YVKIj3DyD3OL3TGN7FeVATealNxUdDwm&s=cats', {
        mode: 'cors'
        //above is small fix for CORS
      })
    .then(res=>res.json())
    .then(data=>img.src=data.data.images.original.url)
    .catch(err=>console.error('error!!!'))
}

call_api();


