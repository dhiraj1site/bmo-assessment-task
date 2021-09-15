function apiCaller(url) {
    const makeXHRRequest = (resolve, reject) => {
        var xhr = new XMLHttpRequest();
    
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            if(xhr.status === 200 || xhr.status === 201) {
                try {
                  if(this.responseText) {
                    var parsedValue = JSON.parse(this.responseText);
                    resolve(parsedValue);
                  }
                }
                catch (err) {
                  resolve(null);
                }

            }
            else {
                resolve(null);
            }
          }
        });
        
        xhr.open("GET", url);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(null);
    }

    return new Promise(makeXHRRequest);
}

export default apiCaller;

