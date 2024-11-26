const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const API_key = process.env.API_Key;
    const Url = "https://api.meaningcloud.com/sentiment-2.1";
    Client.checkForName(formText)


    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message
        })
}

export { handleSubmit }
