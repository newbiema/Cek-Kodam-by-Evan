function cekKhodam() {
    const name = document.getElementById('name').value;
    const resultDiv = document.getElementById('result');

    if (name.trim() === '') {
        resultDiv.innerHTML = 'Harap masukkan nama!';
        resultDiv.classList.add('show');
        return;
    }

    const khodams = [
        'Beat Karbu',
        'Vario Mber',
        'Supra Bandel',
        'Jokowi',
        'Cak Nun',
        'Coach Justin',
        'Neymar Bogor',
        'Messi Citayem',
        'Ronaldo Aceh',        
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
        'Gatotkaca',
        'Bima',
        'Hiu',
        'Sakura',
        'Boboiboy',
        'Gopal',
        'Tidak Ada',
        'Iwan Bule',
        'Om Om Hitam',
        'Botak Hitam',
        'Ambatukam',
        'Carok Madura',
        'Balmond',
        'Estes',
        'Alucard',
        'Angela',
        'Aurora',
        'Balmond',
        'Bruno',
        'Chou',
        'Clint',
        'Cyclops',
        'Diggie',
        'Eudora',
        'Franco',
        'Fanny',
        'Gord',
        'Hylos',
        'Hayabusa',
        'Johnson',
        'Kagura',
        'Layla',
        'Lancelot',
        'Lesley',
        'Martis',
        'Miya',
        'Nana',
        'Odette',
        'Pharsa',
        'Roger',
        'Ruby',
        'Saber',
        'Sun',
        'Tigreal',
        'Valir',
        'Vexana',
        'YSS',
        'Zhask',
        'Zilong',
        'Mie Ayam',
        'Bakso Cak Acong',
        'Pecel Khas Blitar',
        'Prabowo',
        'Anis',
        'Ganjar',
        'Puan',
        'Megawati',
        'Albert Einstein',
        'Uni Bakwan',
        'Pocong',
        'Kuntilanak',
        'Tuyul',
        'Genderuwo',
        'Wewe Gombel',
        'Sundel Bolong',
        'Jenglot',
        'Leak',
        'Banaspati',
        'Suster Ngesot',
        'Palasik',
        'Buto Ijo',
        'Si Manis Jembatan Ancol',
        'Nyi Roro Kidul',
        'Kuyang',
        'Setan Budeg',
        'Silik',
        'Beguganjang',
        'Kolor Ijo',
        "Jerangkong"
    ];
    
    const randomIndex = Math.floor(Math.random() * khodams.length);
    const khodam = khodams[randomIndex];

    resultDiv.innerHTML = `<strong>NAMA :</strong> ${name}<br><strong>KHODAM :</strong> ${khodam}`;
    resultDiv.classList.add('show');
}
