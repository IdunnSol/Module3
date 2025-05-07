document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('textfield');
    const commentsContainer = document.getElementById('commentsContainer');

    const comments = [
        { text: 'Elg observert', own: false },
        {
            text: '<img src="Pictures/Bull_Moose.jpg" width="200" style="border-radius: 4px; margin: 5px;"> <p>Se her!</p>',
            own: false
        },
        { text: 'Fugl observert ved elven', own: false }
    ];

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            const newComment = input.value.trim();
            input.value = '';

            comments.push({ text: newComment, own: true });

            if (comments.length > 3) {
                comments.shift();
            }

            updateComments();
        }
    });

    function updateComments() {
        commentsContainer.innerHTML = ''; 
        comments.forEach(comment => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            if (comment.own) {
                postDiv.classList.add('own');
            }

            const img = document.createElement('img');
            img.src = 'Pictures/profilePic.png';
            img.width = 50;

            const commentDiv = document.createElement('div');
            commentDiv.className = 'comments';
            commentDiv.innerHTML = `<p>${comment.text}</p>`;

            postDiv.appendChild(img);
            postDiv.appendChild(commentDiv);
            commentsContainer.appendChild(postDiv);
        });
    }

    updateComments(); 
});

