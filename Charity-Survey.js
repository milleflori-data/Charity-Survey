document.getElementById('survey-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const age = document.getElementById('age').value;
    const salary = document.getElementById('salary').value;
    const donate = document.querySelector('input[name="donate"]:checked').value;
    const enjoy = document.querySelector('input[name="enjoy"]:checked').value;
    const donationMethod = document.getElementById('donation-method').value;

    // Generate a unique code based on the responses
    const uniqueCode = generateUniqueCode(age, salary, donate, enjoy, donationMethod);

    // Display the code
    document.getElementById('code').textContent = uniqueCode;
    document.getElementById('result').classList.remove('hidden');
});

function generateUniqueCode(age, salary, donate, enjoy, donationMethod) {
    const randomString = Math.random().toString(36).substr(2, 8).toUpperCase();
    return `${age}-${salary}-${donate[0].toUpperCase()}${enjoy[0].toUpperCase()}-${donationMethod.substring(0, 3).toUpperCase()}-${randomString}`;
}
