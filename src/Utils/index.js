import qs from 'query-string';

let rootURL = 'https://www.fastmock.site/mock/7305821a24f6de345abc44d6b90b0494/localhost/'

let  myFetch ={
  get(url,query){
    url = rootURL+url
    if(query){
      url +='?'+qs.stringify(query)
    }
    return fetch(url,{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      }
    })
      .then(res=>res.json())
  },
  post(url,body){
    return fetch(rootURL+ url,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(body)
    })
      .then(res=>res.json())
  }
}
export {myFetch}