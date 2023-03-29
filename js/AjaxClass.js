const ajaxRequest = {
        xhr : new XMLHttpRequest(),
        "get" : function(url,element){
            let xhr = this.xhr
            xhr.open('GET',url,true)
            xhr.onreadystatechange = function(){
                if(xhr.readyState == xhr.DONE)
                {
                    if(xhr.status == 200)
                    {
                        element.innerHTML = xhr.responseText
                        console.log(this.responseText)
                        // document.write(xhr.responseText)
                    }
                    else 
                    {
                        console.warn('failed to connnect')
                    }
                }
                else 
                {
                    console.log('not ready');
                }
            }
    
            xhr.send()
        },

        "post" : function(url,data,element){
            let xhr = this.xhr
            xhr.open('POST',url,true)
            xhr.onreadystatechange = function(){
                if(xhr.readyState == xhr.DONE)
                {
                    if(xhr.status == 200)
                    {

                        // element.innerHTML = xhr.responseText
                        console.log(this.responseText)
                        // document.write(xhr.responseText)
                    }
                    else 
                    {
                        console.warn('failed to connnect')
                    }
                }
                else 
                {
                    console.log('not ready');
                }
            }
    
            xhr.send(data)
        }
    }

    //improved 
    const ajaxRequestImp = {
        xhr : new XMLHttpRequest(),

        "request": function(ajaxCallback)
        {
            let xhr = this.xhr
            xhr.open(ajaxCallback.method,ajaxCallback.url)
            xhr.onreadystatechange = function(){
                if(xhr.readyState == xhr.DONE && xhr.status == 200)
                {
                    ajaxCallback.success(xhr.responseText)
                }
                else 
                {
                    if(xhr.readyState !== xhr.DONE )
                        console.log('not ready')
                    else 
                        console.error('something went wrong')
                }
            }

            ajaxCallback.data ? xhr.send(ajaxCallback.data) : xhr.send()
        }
        
    }

// new class with class keyword
//access modifier public,private static

class ClassA{
    #privateName = undefined;
    constructor(_name,_age)
    {
        this.#privateName = _name
        this.age = _age
    }
    
    // getters
    get getName() {
        return this.#privateName
    }

    //setter
    set setName(_name){
        this.#privateName = _name
    }

    getName()
    {
        return this.#privateName
    }

    setNameWithFunction(_name)
    {
        this.#privateName = _name
    }

    #privateGetAge()
    {
        return this.age
    }

    getAge()
    {
        return this.#privateGetAge();
    }    
}

class ClassB extends ClassA {
    getAgeAndName()
    {
        console.log(this.getName())
    }
}


