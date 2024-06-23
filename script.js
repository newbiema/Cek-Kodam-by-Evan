function cekKhodam() {
    const name = document.getElementById('name').value;
    const resultDiv = document.getElementById('result');

    if (name.trim() === '') {
        resultDiv.textContent = 'Harap masukkan nama!';
        resultDiv.classList.add('show');
        return;
    }

    const khodams = [
        'Harimau',
        'Macan Putih',
        'Naga',
        'Singa',
        'Elang',
        'Alok',
        'Kak Gem',
        'Naruto',
        'Kyubi',
        'Gus Samsudin',
        'Garuda',
        'Kuda Sembrani',
        'Serigala',
        'Phoenix',
        'Raja Langit',
        'Putri Duyung',
        'Dewi Sri',
        'Hanoman',
        'Gatotkaca',
        'Bima',
        'Antareja',
        'Antasena',
        'Hiu',
        'Anjani',
        'Sakura',
        'Boboiboy',
        'Gopal',
        'Tidak Ada',
        'Yesus',
        'Iwan Bule',
        'Om Om Hitam',
        'Botak Hitam',
        'Ambatukam',
    ];
    
    const randomIndex = Math.floor(Math.random() * khodams.length);
    const khodam = khodams[randomIndex];

    resultDiv.textContent = `Nama: ${name}, Khodam Anda adalah: ${khodam}`;
    resultDiv.classList.add('show');
}
