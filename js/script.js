const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const submitButton = document.querySelector('.submit-button');
const dateButtons = document.querySelectorAll('.choose-date');
const datePicker = document.getElementById("date-picker");
let chosenDate = '';
let selectedDate = '';

let mouseOverCount = 0;

noBtn.addEventListener("mouseover", () => {
    mouseOverCount++;
    if (mouseOverCount === 3) {
        alert("Ei, não seja assim! Me dá uma chance, vai? 🥺");
    }

    noBtn.style.position = "absolute";
    noBtn.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
    noBtn.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
});

yesBtn.addEventListener("click", () => {
    step1.classList.add("hidden");
    step2.classList.remove("hidden");
});

dateButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        dateButtons.forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
        chosenDate = e.target.getAttribute('data-date');
    });
});

submitButton.addEventListener('click', () => {
    if (!chosenDate || !datePicker.value) {
        alert('Por favor, escolha um tipo de date e uma data.');
        return;
    }

    const confirmation = confirm("CUIDADO! Ao aceitar, você corre sérios riscos de ser mais do que só um amor de fim de noite.");
    if (confirmation) {
        selectedDate = datePicker.value;
        const mailtoLink = `mailto:bruninhosouzab21@gmail.com?subject=Convite aceito!&body=Tipo de date: ${chosenDate}%0AData escolhida: ${selectedDate}`;
        window.location.href = mailtoLink;
    }
});
