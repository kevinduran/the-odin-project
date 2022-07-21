const call_api = () => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=YVKIj3DyD3OL3TGN7FeVATealNxUdDwm&s=cats')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.error('error!!!'))
}

call_api();