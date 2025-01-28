// Add New Task butonuna tıkladığımda açılacak form;

document.getElementById('new-task-button').addEventListener('click', () => {
    document.querySelector('.task-form-body').style.display = "block";
    document.querySelector('.task-form-footer').style.display = "block";
    document.getElementById('new-task-button').style.display = "none";
});

// Add task butonu tıklandığında görevi ekleme

document.getElementById("add-task-button").addEventListener("click", () => {
    const title = document.getElementById("title-input").value;
    const date = document.getElementById("date-input").value;
    const description = document.getElementById("description-input").value;

    if (!title || !date || !description) {
        alert("Tüm alanları doldurun!");
        return;
    }

    // Yeni görev için HTML oluşturuluyor
    const taskHTML = `
        <div class="task">
            <h3>${title}</h3>
            <p>${description}</p>
            <span>Due Date: ${date}</span>
            <button class="delete-task">Delete</button>
            <button class="edit-task">Edit</button>
        </div>
    `;

    // Görev liste alanına ekleniyor
    document.querySelector(".tasks").innerHTML += taskHTML;


    // Listeyi görünür yapma
    document.querySelector(".tasks").style.display = "block";
});
// Edit butonu 

    document.querySelectorAll('.edit-task').forEach(editButton => {
        editButton.addEventListener('click', () => {
            const task = editButton.closest('.task');
            const title = task.querySelector('h3').innerText;
            const description = task.querySelector('p').innerText;
            const date = task.querySelector('span').innerText.split(': ')[1];

            // Formu açıyor
            document.querySelector('.task-form-body').style.display = "block";
            document.querySelector('.task-form-footer').style.display = "block";

            // Güncellenecek görev bilgileri form'a dolduruluyor
            document.getElementById('title-input').value = title;
            document.getElementById('description-input').value = description;
            document.getElementById('date-input').value = date;
        });
    });
    
    // Delete butonu

    document.querySelectorAll('.delete-task').forEach(deleteButton => {
        deleteButton.addEventListener('click', () => {
            const task = deleteButton.closest('.task');
            task.remove();
        });
    });
