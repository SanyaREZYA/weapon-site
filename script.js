"use strict";

const sniperRifles = [
    {
        name: "Barrett M82",
        imagePath: "images/barrett_m82.png",
        length: "1,448 mm (57 in)",
        barrelLength: "737 mm (29 in)",
        rateOfFire: "Semi-automatic",
        effectiveRange: "1,800 m (2,000 yd)",
        weight: "13.5 kg (29.7 lb)",
        caliber: ".50 BMG",
        story: "The sniper rifle was created by American Ronnie Barrett. Having no relevant education or experience in weapons production, he managed to design and manufacture the first working samples in his garage in 1980. To mass-produce this rifle, its author set up his own company, called Barrett Firearms Manufacturing. After being rejected by leading arms companies such as Winchester and Fabrique National, he began small-scale assembly for the US domestic market. In 1986, he founded Barrett Firearms, which began mass production of the Barrett M82A1 rifle. In 1987, Barrett received a patent for his invention. In 1989, the Swedish army purchased 100 Barrett M82A1 rifles, and during operations Desert Storm and Desert Shield, several hundred rifles were purchased by the US Army."
    },
    {
        name: "Dragunov SVD",
        imagePath: "images/dragunov_svd.png",
        length: "1,225 mm (48.2 in)",
        barrelLength: "620 mm (24.4 in)",
        rateOfFire: "Semi-automatic",
        effectiveRange: "800 m (875 yd)",
        weight: "4.31 kg (9.5 lb)",
        caliber: "7.62x54mmR",
        story: "The SVD (Dragunov Sniper Rifle) was developed by Soviet engineer Yevgeny Fedorovich Dragunov in 1958. This semi-automatic sniper rifle is designed to provide accurate support for infantry at long range. Its main role is to kill enemy soldiers at distances of up to 800 metres, while keeping the shooter mobile and not limiting his rate of fire. It uses 7.62×54mmR ammunition and was the first rifle mass-produced in the Soviet Union for snipers. Its design makes it easy to maintain and ensures high reliability in harsh combat conditions."
    },
    {
        name: "Remington MSR",
        imagePath: "images/remington_msr.png",
        length: "1,090 mm (43 in)",
        barrelLength: "559 mm (22 in)",
        rateOfFire: "Bolt-action",
        effectiveRange: "1,500 m (1,640 yd)",
        weight: "6.35 kg (14 lb)",
        caliber: ".338 Lapua Magnum",
        story: "The Remington Modular Sniper Rifle (MSR) was developed by Remington Arms in 2009 as a modern sniper rifle for military and law enforcement agencies. It was designed with modularity in mind, allowing for easy calibre and component changes to adapt the weapon to specific missions. The MSR is chambered for .338 Lapua Magnum, .300 Winchester Magnum and .308 Winchester cartridges, providing impressive accuracy at long distances. Thanks to its ergonomic design and technology, this rifle has quickly become a favourite among snipers in the United States and abroad, having proven its effectiveness in numerous military conflicts."
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
        caliber: "7.62x39mm",
        story: "The AK-47, or Kalashnikov assault rifle, was developed by Soviet engineer Mikhail Kalashnikov in 1947. This rifle became a symbol of the Cold War and was widely used by militaries, guerrillas and terrorists around the world. The rifle is easy to use, reliable and low cost to manufacture. The AK-47 operates on the principle of automatic reloading with gas recoil and is chambered in 7.62×39 mm. Its high accuracy, ability to operate in difficult conditions and high rate of fire (600 rounds per minute) have made this weapon popular in many countries. The AK-47 has become one of the most famous firearms in history."
    },
    {
        name: "FN SCAR",
        imagePath: "images/fn_scar.png",
        length: "889 mm (35 in) - 635 mm (25 in)",
        barrelLength: "415 mm (16.3 in)",
        rateOfFire: "625 RPM",
        effectiveRange: "500 m (550 yd)",
        weight: "3.29 kg (7.3 lb)",
        caliber: "5.56x46mm NATO",
        story: "The FN SCAR (Special Operations Forces Combat Assault Rifle) was developed by the Belgian company FN Herstal in 2004 to meet the needs of NATO special forces. This rifle features a modular design that allows for quick changes in calibre and configuration. The SCAR is available in two main variants: SCAR-L (light) and SCAR-H (heavy), chambered in 5.56×45mm NATO and 7.62×51mm NATO respectively. Its accuracy, reliability and versatility have made the SCAR a popular choice among military and civilian shooters. Thanks to its ergonomic design and state-of-the-art technology, the FN SCAR remains one of the most advanced automatic rifles in the world."
    },
    {
        name: "M4 Carbine",
        imagePath: "images/m4_carbine.png",
        length: "838 mm (33 in) - 757 mm (29.8 in)",
        barrelLength: "370 mm (14.5 in)",
        rateOfFire: "700–950 RPM",
        effectiveRange: "500 m (550 yd)",
        weight: "2.88 kg (6.36 lb)",
        caliber: "5.56x45mm NATO",
        story: "The M4 Carbine is an American automatic rifle developed by Colt based on the M16. It was adopted by the US Armed Forces in 1994. The M4 has a shorter barrel and a folding stock, which makes it more manoeuvrable in urban environments. The 5.56×45mm NATO calibre rifle is capable of firing both automatically and in single-shot mode. It is also equipped with a Picatinny rail for mounting optics and accessories. The M4 has become a standard weapon for US forces in the wars in Iraq and Afghanistan, gaining popularity for its reliability, accuracy and versatility. Today, the M4 is one of the most recognisable and widely used rifles in the world."
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
        caliber: "9x19mm Parabellum",
        story: "The MP5 is a German self-loading pistol rifle developed by Heckler & Koch in the 1960s. Originally designed for police and special forces, the MP5 has become widely known for its reliability, compact size and high accuracy. The 9×19mm Parabellum rifle features a recoil-free ejection system for stable firing. The MP5 uses an automatic system that operates by ejection of powder gases. Due to its popularity, the MP5 has been developed into numerous variants and modifications, and today remains one of the most recognisable weapons in the world, used by many armies and law enforcement agencies."
    },
    {
        name: "Uzi",
        imagePath: "images/uzi.png",
        length: "470 mm (18.5 in)",
        barrelLength: "260 mm (10.2 in)",
        rateOfFire: "600 RPM",
        effectiveRange: "200 m (220 yd)",
        weight: "3.5 kg (7.72 lb)",
        caliber: "9x19mm Parabellum",
        story: "The Uzi is an Israeli compact assault rifle developed in the 1950s by engineer Uziel Gal. Originally designed for the Israeli Defence Forces, the Uzi quickly gained popularity due to its simplicity, reliability and high firepower. The 9×19 mm Parabellum rifle has a metal body that ensures durability in combat conditions. The Uzi has a short design that makes it easy to use in confined spaces. It has been widely used in various conflicts and has become a symbol of modern weaponry, being used by many countries, law enforcement agencies and special forces. The Uzi has also undergone numerous modifications and variants, maintaining its popularity to this day."
    },
    {
        name: "P90",
        imagePath: "images/p90.png",
        length: "500 mm (19.7 in)",
        barrelLength: "263 mm (10.4 in)",
        rateOfFire: "900 RPM",
        effectiveRange: "200 m (220 yd)",
        weight: "2.6 kg (5.7 lb)",
        caliber: "5.7x28mm",
        story: "The P90 is a Belgian submachine gun developed by FN Herstal in the 1990s. It features a futuristic design and compact construction, making it ideal for use in confined spaces. The P90 is chambered for the 5.7×28mm cartridge, which delivers high penetration power with low recoil. Thanks to its ergonomics and ease of handling, the P90 has become a popular choice for special forces and law enforcement agencies. It has a built-in 50-round magazine, which reduces the frequency of reloads. The P90 has been used extensively in various conflicts and has become an iconic element in many video games and films."
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
        caliber: "9x19mm Parabellum",
        story: "The Glock 17 is a pistol developed by the Austrian company Glock in 1982. It was created by Gaston Glock to meet the requirements of the Austrian army. The pistol is distinguished by its simplicity, reliability and ease of use. The Glock 17 is chambered in 9×19 mm and has a large 17-round magazine. Thanks to its polymer body and steel parts, it is lightweight but resistant to wear and tear. The pistol quickly gained popularity among law enforcement agencies and the military in many countries. Its versatility and modifiability have made the Glock 17 one of the most famous and widely used pistols in the world, setting the standard for many other models."
    },
    {
        name: "Colt M1911",
        imagePath: "images/colt_m1911.png",
        length: "210 mm (8.3 in)",
        barrelLength: "127 mm (5 in)",
        rateOfFire: "Semi-automatic",
        effectiveRange: "50 m (55 yd)",
        weight: "1.1 kg (2.4 lb)",
        caliber: ".45 ACP",
        story: "The Colt M1911 is a classic pistol designed by John Browning in 1911 for the United States Army. This .45 ACP calibre pistol was chosen as the standard weapon of the US military during the First World War and was also used in the Second World War and the Vietnam War. Known for its reliability, ease of maintenance and power, the M1911 has become a favourite among military, law enforcement and civilian shooters. Thanks to its metal body construction, it is highly resistant to the elements. The model continues to be produced and modified, leaving a significant impact on the pistol industry."
    },
    {
        name: "Desert Eagle",
        imagePath: "images/desert_eagle.png",
        length: "269 mm (10.6 in)",
        barrelLength: "152 mm (6 in)",
        rateOfFire: "Semi-automatic",
        effectiveRange: "200 m (219 yd)",
        weight: "1.99 kg (4.4 lb)",
        caliber: ".50 AE",
        story: "The Desert Eagle is a powerful pistol developed by the Israeli company Magnum Research in the 1980s. Originally designed for military and law enforcement, this pistol has become popular due to its impressive power and unique design. The Desert Eagle is chambered in a variety of calibres, including .357 Magnum, .44 Magnum and .50 AE, making it one of the most powerful pistols in the world. Its massive size and heavy weight provide stability when firing, but make it less comfortable to carry. Thanks to its appearances in films and video games, the Desert Eagle has gained a cult status among gun fans."
    }
];

const gunImageElement = document.querySelector('.gun-image');
const storyElement = document.querySelector('.story');
const gunStoryElement = document.querySelector('.gun-story');

let currentIndex = 0;
let weaponType = rifles;

function chooseSniperRifles() {
    weaponType = sniperRifles;
    currentIndex = 0;
    updateGunDisplay();
    setTimeout(() => {
        gunImageElement.style.width = '1200px';
    }, 500);
}

function chooseRifles() {
    weaponType = rifles; 
    currentIndex = 0;
    updateGunDisplay(); 
    setTimeout(() => {
        gunImageElement.style.width = '1200px';
    }, 500);
}

function chooseSMG() {
    weaponType = smg; 
    currentIndex = 0; 
    updateGunDisplay(); 
    setTimeout(() => {
        gunImageElement.style.width = '900px';
    }, 500);
}

function choosePistols() {
    weaponType = pistols; 
    currentIndex = 0; 
    updateGunDisplay(); 
    setTimeout(() => {
        gunImageElement.style.width = '600px';
    }, 500);
}

function updateGunDisplay() {
    const weaponList = weaponType[currentIndex];

    gunImageElement.classList.add('fade-out');
    if(weaponList.name == "Remington MSR") {
        document.querySelector('.gun-name__').classList.add('gun-name__fix');
    }
    else{
        document.querySelector('.gun-name__').classList.remove('gun-name__fix');
    }

   setTimeout(() => {
        gunImageElement.src = weaponList.imagePath;
        document.querySelectorAll('.gun-name').forEach(element => {
            element.textContent = weaponList.name;
        });
        document.querySelector('#length').textContent = weaponList.length;
        document.querySelector('#barrelLength').textContent = weaponList.barrelLength;
        document.querySelector('#rateOfFire').textContent = weaponList.rateOfFire;
        document.querySelector('#effectiveRange').textContent = weaponList.effectiveRange;
        document.querySelector('#mass').textContent = weaponList.weight;
        document.querySelector('#caliber').textContent = weaponList.caliber;
        document.querySelector('#story').textContent = weaponList.story;

        gunImageElement.classList.remove('fade-out');
        gunImageElement.classList.add('fade-in');

        setTimeout(() => {
            gunImageElement.classList.remove('fade-in');
        }, 500); 
    }, 500); 
}

document.querySelector('#prevGunBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + weaponType.length) % weaponType.length;
    updateGunDisplay();
});

document.querySelector('#nextGunBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % weaponType.length;
    updateGunDisplay();
});

storyElement.addEventListener('mouseover', () => {
    gunStoryElement.style.width = '25%';
    gunImageElement.style.left = '40%';
    gunImageElement.style.transition = 'all 0.5s ease-in-out';
    document.querySelector('.story').style.backgroundColor = "var(--half-transparency-bg)";
});

storyElement.addEventListener('mouseout', () => {
    gunStoryElement.style.width = '5%';
    gunImageElement.style.left = '50%';
    document.querySelector('.story').style.backgroundColor = "var(--transparency-bg)";
});

updateGunDisplay();
