const questions = document.getElementById('questions');

questions.addEventListener('click', (e) => { 
    if(e.target.parentElement.classList.contains('border')) {
        e.target.parentElement.classList.toggle('active');
    }
})