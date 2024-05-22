document.addEventListener('DOMContentLoaded', () => {
    console.log('Pokemon TCG Online loaded');
    initializeGameBoard();
});

function initializeGameBoard() {
    const player1Hand = document.querySelector('#player1 .hand');
    const player2Hand = document.querySelector('#player2 .hand');

    // 임의의 카드 데이터 예시
    const cards = [
        { name: 'Pikachu', type: 'Electric' },
        { name: 'Charmander', type: 'Fire' },
        { name: 'Squirtle', type: 'Water' },
        { name: 'Bulbasaur', type: 'Grass' },
        { name: 'Eevee', type: 'Normal' }
    ];

    // Player 1과 Player 2의 손에 카드를 추가
    cards.forEach(card => {
        player1Hand.appendChild(createCardElement(card));
        player2Hand.appendChild(createCardElement(card));
    });
}

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card-slot';
    cardElement.textContent = `${card.name} (${card.type})`;
    return cardElement;
}
