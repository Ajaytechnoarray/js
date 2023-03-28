const xhr = new XMLHttpRequest();

function ajaxGet(url,element)
{
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == xhr.DONE)
        {
            if(xhr.status == 200)
            {
                element.innerHTML = xhr.responseText;
            }
            else
            {
                alert('request fialed');
            }
        }

    };

    xhr.send();
}


function ajaxPost(url,data,element)
{
    xhr.open('POST',url,)
    xhr.onreadystatechange = function(){
        if(xhr.readyState == xhr.DONE)
        {
            if(xhr.status == 200)
            {
                element.innerHTML = this.responseText;
            }
            else 
            {
                alert('request failed');
            }
        }
    }
    xhr.send(data);
}

function sendRequest(method,url,data,element)
{
    xhr.open(method,url,)
    xhr.onreadystatechange = function(){
        if(xhr.readyState == xhr.DONE)
        {
            if(xhr.status == 200)
            {
                element.innerHTML = this.responseText;
            }
            else 
            {
                alert('request failed');
            }
        }
    }

    method == 'POST' ? xhr.send(data) : xhr.send()
}

// const ajaxRequest = {
//     xhr : new XMLHttpRequest(),
//     "get" : function(url,element){
//         console.log(this.xhr);
//         this.xhr.open('GET',url,element)
//         this.xhr.onreadystatechange = function(){
//             // if(this.xhr.readyState == this.xhr.DONE)
//             // {
//                 if(this.xhr.status == 200)
//                 {
//                     element.innerHTML = this.xhr.responseText
//                 }
//                 else 
//                 {
//                     console.warn('failed to connnect')
//                 }
//             // }
//             // else 
//             // {
//             //     console.log(this.xhr);
//             // }
//         }

//         this.xhr.send()
//     }
// }   

