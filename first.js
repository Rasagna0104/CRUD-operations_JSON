



const URL="http://localhost:8000/data/1"



function getData()
{
    fetch(URL)
.then((res)=>res.json())
.then((res1)=>
    // console.log(res1)) //or
{
    for(let i=0;i<res1.length;i++)
    {
        console.log(res1[i].name);
    }
})
.catch((res2)=>console.log(res2));

}
getData();




function postData()
{
let options=
{
method:"POST",
headers:
    {
    "content-Type":"application/json"
    },
    body:JSON.stringify(
    {
        "id":4,
        "name":"komuraiah",
        "age":40
    })


};
fetch(URL,options)
.then(res=>
{
    if(res.ok)
    {
        console.log(res.status,res.statusText);
    }
})
.catch(res=>console.log(res));
}
// postData();




// put 
function putData()
{
    let options=
    {
        method:"PUT",
        headers:
        {
            "content-Type":"application/json"
        },
        body:JSON.stringify
        (
            {
                "id":6,
                "name":"rassu",
                "age":21

            }),
        }
        fetch(URL,options)
        .then(res=>
        {
            if(res.ok)
            {
                console.log("data changed");
                console.log(res.status,res.statusText);
            }
        }
        )
}
// putData();

//patch

function patchData()
{
    let options=
    {
        method:"PATCH",
        headers:
        {
            "content-Type":"application/json"
        },
        body:JSON.stringify
        (
            {
                "id":5,
                "name":"Komuraiah",
                "age":40

            }),
        }
        fetch(URL,options)
        .then(res=>
        {
            if(res.ok)
            {
                console.log("patch excuted !");
                console.log(res.status,res.statusText);
            }
        }
        )
}
patchData();
//


// delete
function deleteData()
{
    let options=
    {
        method:"DELETE",
    }
    fetch(URL,options)
    .then(res=>
    {
        if(res.ok)
        {
            console.log(res.status,res.statusText);
        }
    }
    )
}

deleteData();


