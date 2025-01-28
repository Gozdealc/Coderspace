
class Request {
    static async get(url) {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const res = await response.json();
        return res;
    }

    static async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json;",
            },
        });
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const res = await response.json();
        return res;
    }
    static async put(url, data) {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json;",
            },
        });
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const res = await response.json();
        return res;
    }
}

    Request.put("https://jsonplaceholder.typicode.com/posts/2", {
        userId: 101,
        title: "Post Başlık",
        body: "Post Body",
        })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));