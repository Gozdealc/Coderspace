document.getElementById("veri").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function() {
        const output = document.getElementById("output");
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            data.forEach(function(item) {
                // console.log(`
                //     Title: ${item.title},
                //     Body: ${item.body}`
                // );
                output.innerHTML += `
                <div>
                    Başlık: ${item.title}
                    <br>
                    <hr>
                    İçerik: ${item.body}
                </div>
                `;                   
            });
        }
    }
    xhr.send();
});

