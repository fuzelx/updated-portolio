const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('animate__fadeIn');
    modal.classList.remove('animate__fadeOut');
});

closeModalButton.addEventListener('click', () => {
    modal.classList.add('animate__fadeOut');
    modal.classList.remove('animate__fadeIn');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300); // Adjust the duration to match your animation duration
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('animate__fadeOut');
        modal.classList.remove('animate__fadeIn');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // Adjust the duration to match your animation duration
    }
});
