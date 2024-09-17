const sniperRifles = [
    {
        name: "Barrett M82",
        imagePath: "images/barrett_m82.png",
        length: "1,448 mm (57 in)",
        barrelLength: "737 mm (29 in)",
        rateOfFire: "Semi-automatic",
        effectiveRange: "1,800 m (2,000 yd)",
        weight: "13.5 kg (29.7 lb)",
        caliber: ".50 BMG"
    },
    {
        name: "Dragunov SVD",
        imagePath: "images/dragunov_svd.png",
        length: "1,225 mm (48.2 in)",
        barrelLength: "620 mm (24.4 in)",
        rateOfFire: "Semi-automatic",
        effectiveRange: "800 m (875 yd)",
        weight: "4.31 kg (9.5 lb)",
        caliber: "7.62x54mmR"
    },
    {
        name: "Remington MSR",
        imagePath: "images/remington_msr.png",
        length: "1,090 mm (43 in)",
        barrelLength: "559 mm (22 in)",
        rateOfFire: "Bolt-action",
        effectiveRange: "1,500 m (1,640 yd)",
        weight: "6.35 kg (14 lb)",
        caliber: ".338 Lapua Magnum"
    }
];

const rifles = [
    {
        name: "AK-47",
        imagePath: "images/ak_47.png",
        length: "880 mm (35 in) - 645 mm (25.4 in)",
        barrelLength: "415 mm (16.3 in)",
        rateOfFire: "600 RPM",
        effectiveRange: "350 m (380 yd)",
        weight: "3.47 kg (7.7 lb)",
        caliber: "7.62x39mm"
    },
    {
        name: "FN SCAR",
        imagePath: "images/fn_scar.png",
        length: "889 mm (35 in) - 635 mm (25 in)",
        barrelLength: "415 mm (16.3 in)",
        rateOfFire: "625 RPM",
        effectiveRange: "500 m (550 yd)",
        weight: "3.29 kg (7.3 lb)",
        caliber: "5.56x46mm NATO"
    },
    {
        name: "M4 Carbine",
        imagePath: "images/m4_carbine.png",
        length: "838 mm (33 in) - 757 mm (29.8 in)",
        barrelLength: "370 mm (14.5 in)",
        rateOfFire: "700–950 RPM",
        effectiveRange: "500 m (550 yd)",
        weight: "2.88 kg (6.36 lb)",
        caliber: "5.56x45mm NATO"
    }
];

const smg = [
    {
        name: "MP5",
        imagePath: "images/mp5.png",
        length: "680 mm (26.8 in)",
        barrelLength: "225 mm (8.9 in)",
        rateOfFire: "800 RPM",
        effectiveRange: "200 m (220 yd)",
        weight: "2.88 kg (6.35 lb)",
        caliber: "9x19mm Parabellum"
    },
    {
        name: "Uzi",
        imagePath: "images/uzi.png",
        length: "470 mm (18.5 in)",
        barrelLength: "260 mm (10.2 in)",
        rateOfFire: "600 RPM",
        effectiveRange: "200 m (220 yd)",
        weight: "3.5 kg (7.72 lb)",
        caliber: "9x19mm Parabellum"
    },
    {
        name: "P90",
        imagePath: "images/p90.png",
        length: "500 mm (19.7 in)",
        barrelLength: "263 mm (10.4 in)",
        rateOfFire: "900 RPM",
        effectiveRange: "200 m (220 yd)",
        weight: "2.6 kg (5.7 lb)",
        caliber: "5.7x28mm"
    }
];

const pistols = [
    {
        name: "Glock 17",
        imagePath: "images/glock_17.png",
        length: "186 mm (7.32 in)",
        barrelLength: "114 mm (4.49 in)",
        rateOfFire: "Semi-automatic",
        effectiveRange: "50 m (55 yd)",
        weight: "0.625 kg (1.38 lb)",
        caliber: "9x19mm Parabellum"
    },
    {
        name: "Colt M1911",
        imagePath: "images/colt_m1911.png",
        length: "210 mm (8.3 in)",
        barrelLength: "127 mm (5 in)",
        rateOfFire: "Semi-automatic",
        effectiveRange: "50 m (55 yd)",
        weight: "1.1 kg (2.4 lb)",
        caliber: ".45 ACP"
    },
    {
        name: "Desert Eagle",
        imagePath: "images/desert_eagle.png",
        length: "269 mm (10.6 in)",
        barrelLength: "152 mm (6 in)",
        rateOfFire: "Semi-automatic",
        effectiveRange: "200 m (219 yd)",
        weight: "1.99 kg (4.4 lb)",
        caliber: ".50 AE"
    }
];

const gunImageElement = document.querySelector('.gun-image');

let currentIndex = 0;
let weaponType = rifles;

function chooseSniperRifles() {
    weaponType = sniperRifles;
    gunImageElement.style.width = '1500px'; 
    currentIndex = 0;
    updateGunDisplay();
}

function chooseRifles() {
    weaponType = rifles; 
    gunImageElement.style.width = '1200px';
    currentIndex = 0;
    updateGunDisplay(); 
}

function chooseSMG() {
    weaponType = smg; 
    gunImageElement.style.width = '900px';
    currentIndex = 0; 
    updateGunDisplay(); 
}

function choosePistols() {
    weaponType = pistols; 
    gunImageElement.style.width = '600px';
    currentIndex = 0; 
    updateGunDisplay(); 
}

const updateGunDisplay = () => {
    const weaponList = weaponType[currentIndex];
    document.querySelectorAll('.gun-name').forEach(element => {
        element.textContent = weaponList.name;
    });
    document.getElementById('gunPhoto').src = weaponList.imagePath;
    document.getElementById('length').textContent = weaponList.length;
    document.getElementById('barrelLength').textContent = weaponList.barrelLength;
    document.getElementById('rateOfFire').textContent = weaponList.rateOfFire;
    document.getElementById('effectiveRange').textContent = weaponList.effectiveRange;
    document.getElementById('mass').textContent = weaponList.weight;
    document.getElementById('caliber').textContent = weaponList.caliber;
};

document.getElementById('prevGunBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + weaponType.length) % weaponType.length;
    updateGunDisplay();
});

document.getElementById('nextGunBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % weaponType.length;
    updateGunDisplay();
});

updateGunDisplay();