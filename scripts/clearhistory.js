
const clearButton = document.getElementById('clear-history');
const container = document.getElementById('history-container');

clearButton.addEventListener('click', function(){
    container.innerHTML = '' ;
})