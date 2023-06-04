

const signin1= async (email,roles)=>
{
    try{
        const res = await axios ({

            method:'PATCH',
            url:'/webHackers/user/add',
            data :{
                email,roles}
        })

        // console.log(res)
    } catch (err){console.log(err)}
}
document.querySelector('.form--add').addEventListener('submit',e=>{
    e.preventDefault();
   const email= document.getElementById('email1').value;
   const roles=document.getElementById('role').value;
    console.log(email,roles)
   
signin1(email,roles)
window.alert("Removed successfuly")
});






