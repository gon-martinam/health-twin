test = 'Hello'
async function makePostRequest(test) {
    axios.post("http://127.0.0.1:5000/test", test)
         .then(function (response) {
            console.log("It says: ", response.data);
         })
         .catch(function (error) {
            console.log(error);
         });
}