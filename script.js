let guestCount = 1;

document.getElementById('add-guest').addEventListener('click', () => {
    guestCount++;
    const guestList = document.getElementById('guest-list');
    const newGuest = document.createElement('div');
    newGuest.classList.add('guest');
    newGuest.innerHTML = `
        <label for="name-${guestCount}">Nome completo do convidado:</label>
        <input type="text" id="name-${guestCount}" class="name" placeholder="Nome do convidado" required>

        <label for="presence-${guestCount}">Este convidado poderá comparecer?</label>
        <select id="presence-${guestCount}" class="presence" required>
            <option value="" disabled selected>Escolha uma opção</option>
            <option value="sim">Sim, estará lá!</option>
            <option value="nao">Infelizmente, não poderá ir.</option>
        </select>
    `;
    guestList.appendChild(newGuest);
});

document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const names = Array.from(document.getElementsByClassName('name'));
    const presences = Array.from(document.getElementsByClassName('presence'));

    let confirmationMessage = "Resumo das confirmações:\n";

    names.forEach((nameField, index) => {
        const name = nameField.value.trim();
        const presence = presences[index].value;
        confirmationMessage += `${name}: ${presence === 'sim' ? 'Presença confirmada! 🎉' : 'Não poderá comparecer. 😢'}\n`;
    });

    const encodedMessage = encodeURIComponent(confirmationMessage);
    const whatsappURL = `https://wa.me/5527996246736?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
});