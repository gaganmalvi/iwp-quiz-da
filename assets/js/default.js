function evaluateQuizResults() {
    document.querySelector('form').addEventListener('submit', function(e) {
        try {
            const data = new FormData(this);
            var count = 0;
            if (data.get('q1') === 'yes') count++;
            if (data.get('q2') === 'yes') count++;
            if (data.get('q3') === 'yes') count++;
            if (data.get('q4') === 'yes') count++;
            alert('You got ' + count + ' out of 4 correct!');
        } catch (error) {
            alert(error);
        }
    });
}