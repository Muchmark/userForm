#main api
https://contactform-ivory.vercel.app/api/form# userForm



#data fileds
{
    name: String,
    email: String,
    contact: String,
    content: String
}

# using fetch
 fetch("sample url", {
    method: 'POST',
    body: JSON.stringify(data) //the data sholud be in object format
}).then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
# using axios
axios.post('/user', {
  data                        //the data should be in object format
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
