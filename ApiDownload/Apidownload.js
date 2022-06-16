function downloadFile(){
    axios({
        url:'https://source.unsplash.com/random/500x500',
        method:'GET',
        responseType:'blob'
    }).then((response)=> {
        const url = window.URL.createObjectURL(new Blob([response.data])); //init the url
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download','image.jpg');
        document.body.appendChild(link);
        link.click();
    })
}