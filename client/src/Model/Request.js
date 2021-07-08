// HTTP Requests 
export const getData= ()=>{
    return fetch("/project",{
        method:"GET",
        headers: {
            'Content-Type':'application/json'
        }
    }).then((res)=>{
        return res.json()
    }
    )
}
export const postData= (data)=>{
    return fetch("/project",{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          },
    }).then((res)=>{
        }
    )
}