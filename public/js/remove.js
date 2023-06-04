

const signin= async (email)=>
{
    try{
        const res = await axios ({

            method:'DELETE',
            url:'/webHackers/user/remove',
            data :{
                email}
        })

        // console.log(res)
    } catch (err){console.log(err)}
}
document.querySelector('.form--remove').addEventListener('submit',e=>{
    e.preventDefault();
   const email= document.getElementById('email').value;

   console.log(email)
signin(email)
window.alert("Removed successfuly")
});






