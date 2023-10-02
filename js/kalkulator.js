function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const bmi = weight / (height * height);
    const resultElement = document.getElementById('result');
    const bmiCategory = getBMICategory(bmi);
    resultElement.innerText = `BMI: ${bmi.toFixed(2)} - Kategori: ${bmiCategory}`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Kurus';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Ideal';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Gemuk';
    } else {
        return 'Sangat Gemuk';
    }
}

function analyzeSymptoms() {
    const diseaseSelect = document.getElementById('diseaseSelect');
    const selectedDisease = diseaseSelect.options[diseaseSelect.selectedIndex].text;
    const symptomsList = document.getElementById('symptomsList');

    symptomsList.innerHTML = '';

    switch (selectedDisease) {
        case 'Flu':
            symptomsList.innerHTML = `
                <li>Demam</li>
                <li>Pilek</li>
                <li>Batuk</li>
            `;
            break;
        case 'COVID-19':
            symptomsList.innerHTML = `
                <li>Demam</li>
                <li>Batuk kering</li>
                <li>Sesak napas</li>
            `;
            break;
        case 'Alergi':
            symptomsList.innerHTML = `
                <li>Bersin-bersin</li>
                <li>Gatal-gatal</li>
                <li>Rhidang</li>
            `;
            break;
        default:
            symptomsList.innerHTML = 'Pilih penyakit untuk menganalisis gejala.';
    }
}