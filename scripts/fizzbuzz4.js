document.getElementById('name-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var divisor1 = parseInt(document.getElementById('divisor1').value);
    var word1 = document.getElementById('word1').value.trim();
    var divisor2 = parseInt(document.getElementById('divisor2').value);
    var word2 = document.getElementById('word2').value.trim();
    var divisor3 = parseInt(document.getElementById('divisor3').value);
    var word3 = document.getElementById('word3').value.trim();
    var total = parseInt(document.getElementById('total').value);

    var outputDiv = document.getElementById('loop-list');
    outputDiv.innerHTML = '';

    for (var i = 1; i <= total; i++) {
        var result = '';
        if (i % divisor1 === 0) result += word1;
        if (i % divisor2 === 0) result += word2;
        if (i % divisor3 === 0) result += word3;

        outputDiv.innerHTML += `<p>${i}: ${result || ''}</p>`;
    }
});
