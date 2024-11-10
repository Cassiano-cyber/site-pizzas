document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const message = `Reserva realizada com sucesso para ${name} na data ${date} às ${time}.`;
    document.getElementById('reservationMessage').textContent = message;

    // Limpa o formulário
    document.getElementById('reservationForm').reset();
});
