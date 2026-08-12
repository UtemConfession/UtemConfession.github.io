// Melaka Activities Data - Used for the Activities & Explore Melaka Feature
const activitiesData = [
    {
        id: "a-famosa",
        categoryId: "historical",
        name: { en: "A Famosa (Porta de Santiago)", ms: "Kota A Famosa (Porta de Santiago)" },
        area: "Bandar Hilir",
        location: "Jalan Parameswara, Bandar Hilir",
        type: "outdoor",
        priceLevel: { en: "Free", ms: "Percuma" },
        priceNotes: { en: "No entry fee", ms: "Tiada bayaran masuk" },
        suitableFor: ["Family", "Friends", "Solo", "Photography"],
        tags: { en: ["History", "Architecture", "Landmark"], ms: ["Sejarah", "Seni Bina", "Mercu Tanda"] },
        shortDesc: {
            en: "One of the oldest surviving European architectural remains in Southeast Asia.",
            ms: "Salah satu sisa seni bina Eropah tertua yang masih wujud di Asia Tenggara."
        },
        fullDesc: {
            en: "Built in 1511, the Porta de Santiago is the only remaining part of the once-massive Portuguese fortress in Melaka. It's a must-visit for history enthusiasts and a classic photo spot located at the foot of St. Paul's Hill.",
            ms: "Dibina pada tahun 1511, Porta de Santiago adalah satu-satunya bahagian yang tinggal dari kubu Portugis yang dahulunya besar di Melaka. Tempat ini wajib dilawati untuk penggemar sejarah dan tempat mengambil gambar yang klasik yang terletak di kaki Bukit St. Paul."
        },
        openingHours: { en: "24 Hours", ms: "24 Jam" },
        bestTime: { en: "Early morning to avoid heat", ms: "Awal pagi untuk mengelakkan panas" },
        duration: { en: "30 mins", ms: "30 minit" },
        bookingRequired: false,
        image: "./assets/images/activities/a-famosa.jpg",
        mapUrl: "https://maps.app.goo.gl/9R6YvqNwqj4V4j21A",
        websiteUrl: ""
    },
    {
        id: "jonker-street",
        categoryId: "night_activities",
        name: { en: "Jonker Street Night Market", ms: "Pasar Malam Jonker Street" },
        area: "Jonker / Old Town",
        location: "Jalan Hang Jebat",
        type: "outdoor",
        priceLevel: { en: "Free to enter", ms: "Masuk percuma" },
        priceNotes: { en: "Food and goods vary", ms: "Harga makanan dan barang berbeza" },
        suitableFor: ["Friends", "Couples", "Family", "Foodies"],
        tags: { en: ["Night Market", "Food", "Shopping", "Culture"], ms: ["Pasar Malam", "Makanan", "Beli-belah", "Budaya"] },
        shortDesc: {
            en: "Vibrant weekend night market famous for local street food and souvenirs.",
            ms: "Pasar malam hujung minggu yang meriah, terkenal dengan makanan jalanan tempatan."
        },
        fullDesc: {
            en: "Operating every Friday, Saturday, and Sunday night, Jonker Street transforms into a bustling pedestrian market. It's the best place to sample local delicacies like Nyonya Cendol, chicken rice balls, and shop for unique trinkets.",
            ms: "Beroperasi setiap malam Jumaat, Sabtu dan Ahad, Jonker Street berubah menjadi pasar pejalan kaki yang sibuk. Ia adalah tempat terbaik untuk mencuba pelbagai juadah tempatan seperti Nyonya Cendol, bebola nasi ayam, dan membeli barangan unik."
        },
        openingHours: { en: "Fri-Sun: 6:00 PM - 12:00 AM", ms: "Jum-Ahad: 6:00 PM - 12:00 AM" },
        bestTime: { en: "Weekends 7:30 PM", ms: "Hujung minggu 7:30 PM" },
        duration: { en: "2-3 hours", ms: "2-3 jam" },
        bookingRequired: false,
        image: "./assets/images/activities/Jonker-Street-Night-Market.jpg",
        mapUrl: "https://maps.app.goo.gl/ZqE8fN4oZRb7zM9G6",
        websiteUrl: ""
    },
    {
        id: "zoo-melaka",
        categoryId: "zoo_animals",
        name: { en: "Zoo Melaka & Night Safari", ms: "Zoo Melaka & Safari Malam" },
        area: "Ayer Keroh",
        location: "Lebuh Ayer Keroh",
        type: "outdoor",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" },
        priceNotes: { en: "Student discounts may apply", ms: "Diskaun pelajar mungkin ada" },
        suitableFor: ["Family", "Friends", "Photography"],
        tags: { en: ["Animals", "Wildlife", "Walking"], ms: ["Haiwan", "Hidupan Liar", "Berjalan"] },
        shortDesc: {
            en: "The second largest zoo in Malaysia, offering daytime exhibits and a Night Safari.",
            ms: "Zoo kedua terbesar di Malaysia, menawarkan pameran siang hari dan Safari Malam."
        },
        fullDesc: {
            en: "Located in Ayer Keroh, Zoo Melaka spans 54 acres and houses over 1,200 animals across 215 species. The Night Safari on weekends offers a unique perspective on nocturnal wildlife. Great for a half-day outdoor excursion.",
            ms: "Terletak di Ayer Keroh, Zoo Melaka berkeluasan 54 ekar dan menempatkan lebih 1,200 haiwan merentasi 215 spesies. Safari Malam pada hujung minggu menawarkan perspektif unik tentang hidupan liar nokturnal. Sesuai untuk lawatan separuh hari."
        },
        openingHours: { en: "Day: 8:30 AM - 5:30 PM | Night Safari: 8:00 PM - 11:30 PM (Fri-Sat)", ms: "Siang: 8:30 AM - 5:30 PM | Safari Malam: 8:00 PM - 11:30 PM (Jum-Sab)" },
        bestTime: { en: "Morning or Night Safari", ms: "Pagi atau Safari Malam" },
        duration: { en: "3-4 hours", ms: "3-4 jam" },
        bookingRequired: false,
        image: "./assets/images/activities/zoo mel night safari.jpeg",
        mapUrl: "https://maps.app.goo.gl/z2Pq4UeM1g8pA8P86",
        websiteUrl: "https://www.zoomelaka.gov.my/"
    },
    {
        id: "melaka-river-cruise",
        categoryId: "night_activities",
        name: { en: "Melaka River Cruise", ms: "Melaka River Cruise" },
        area: "City Centre",
        location: "Taman Rempah Jetty / Muara Jetty",
        type: "outdoor",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" },
        priceNotes: { en: "Adults RM30 (MyKad), RM40 (Non-MyKad)", ms: "Dewasa RM30 (MyKad), RM40 (Bukan MyKad)" },
        suitableFor: ["Couples", "Friends", "Family", "Relaxing"],
        tags: { en: ["Boat Ride", "Sightseeing", "Night", "River"], ms: ["Menaiki Bot", "Melancong", "Malam", "Sungai"] },
        shortDesc: {
            en: "A scenic 45-minute boat ride along the historic Melaka River.",
            ms: "Perjalanan bot selama 45 minit yang indah menyusuri Sungai Melaka yang bersejarah."
        },
        fullDesc: {
            en: "Cruise past historic buildings, old godowns, traditional villages like Kampung Morten, and vibrant murals. It is highly recommended to go at sunset or at night when the riverbanks are beautifully illuminated.",
            ms: "Menyusuri bangunan bersejarah, gudang lama, kampung tradisional seperti Kampung Morten, dan mural yang meriah. Sangat disyorkan untuk pergi pada waktu matahari terbenam atau pada waktu malam apabila tebing sungai diterangi lampu yang cantik."
        },
        openingHours: { en: "9:00 AM - 11:00 PM", ms: "9:00 AM - 11:00 PM" },
        bestTime: { en: "Sunset or Night", ms: "Senja atau Malam" },
        duration: { en: "45 mins", ms: "45 minit" },
        bookingRequired: false,
        image: "./assets/images/activities/melaka-rivercruise.webp",
        mapUrl: "https://maps.app.goo.gl/yBw4K4b8J6x2G5dJ9",
        websiteUrl: "https://melakarivercruise.my/"
    },
    {
        id: "baba-nyonya-museum",
        categoryId: "heritage",
        name: { en: "Baba & Nyonya Heritage Museum", ms: "Muzium Warisan Baba & Nyonya" },
        area: "Heeren Street / Old Town",
        location: "Jalan Tun Tan Cheng Lock",
        type: "indoor",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" },
        priceNotes: { en: "Adults ~RM16", ms: "Dewasa ~RM16" },
        suitableFor: ["Friends", "Solo", "Photography", "Culture"],
        tags: { en: ["Culture", "History", "Museum"], ms: ["Budaya", "Sejarah", "Muzium"] },
        shortDesc: {
            en: "A beautifully preserved Peranakan townhouse showcasing late 19th-century culture.",
            ms: "Rumah bandar Peranakan yang dipelihara dengan indah yang mempamerkan budaya akhir abad ke-19."
        },
        fullDesc: {
            en: "This museum consists of three beautifully restored houses arranged to look like a typical 19th-century Baba-Nyonya residence. Intricate woodwork, antique furniture, and cultural artifacts provide an immersive glimpse into Peranakan heritage.",
            ms: "Muzium ini terdiri daripada tiga rumah yang dipulihkan dengan cantik yang disusun kelihatan seperti kediaman Baba-Nyonya abad ke-19 yang tipikal. Kerja kayu yang rumit, perabot antik dan artifak budaya memberikan gambaran mendalam tentang warisan Peranakan."
        },
        openingHours: { en: "10:00 AM - 5:00 PM (Closed Mondays)", ms: "10:00 AM - 5:00 PM (Tutup Isnin)" },
        bestTime: { en: "Morning", ms: "Pagi" },
        duration: { en: "1 hour", ms: "1 jam" },
        bookingRequired: false,
        image: "./assets/images/activities/baba-nyonya-museum.jpg",
        mapUrl: "https://maps.app.goo.gl/1Qy8z7Z7X8s7G3J88",
        websiteUrl: "https://babanyonyamuseum.com/"
    },
    {
        id: "melaka-botanical-garden",
        categoryId: "nature",
        name: { en: "Melaka Botanical Garden", ms: "Taman Botanikal Melaka" },
        area: "Ayer Keroh",
        location: "Lebuh Ayer Keroh",
        type: "outdoor",
        priceLevel: { en: "Free", ms: "Percuma" },
        priceNotes: { en: "Vehicle entry fee may apply", ms: "Bayaran masuk kenderaan mungkin dikenakan" },
        suitableFor: ["Exercise", "Friends", "Family", "Solo"],
        tags: { en: ["Nature", "Jogging", "Cycling", "Picnic"], ms: ["Alam Semulajadi", "Berjoging", "Berbasikal", "Berkelah"] },
        shortDesc: {
            en: "A massive recreational forest ideal for morning jogs, cycling, and picnics.",
            ms: "Hutan rekreasi besar yang sesuai untuk berjoging pada waktu pagi, berbasikal dan berkelah."
        },
        fullDesc: {
            en: "Surrounded by lush greenery, the Melaka Botanical Garden is an excellent escape from the city. The paved pathways are perfect for running, walking, or renting a bicycle. Look out for the resident monkeys, but remember not to feed them.",
            ms: "Dikelilingi kehijauan yang subur, Taman Botanikal Melaka merupakan pelarian terbaik dari bandar. Laluan berturap amat sesuai untuk berlari, berjalan, atau menyewa basikal. Berhati-hati dengan monyet yang berkeliaran, tetapi ingat jangan berikan mereka makan."
        },
        openingHours: { en: "7:00 AM - 7:00 PM", ms: "7:00 AM - 7:00 PM" },
        bestTime: { en: "Early morning or late afternoon", ms: "Awal pagi atau lewat petang" },
        duration: { en: "1-2 hours", ms: "1-2 jam" },
        bookingRequired: false,
        image: "./assets/images/activities/melaka-botanical-garden.jpg",
        mapUrl: "https://maps.app.goo.gl/wQ1g5Z4w3d2W5f4h7",
        websiteUrl: ""
    },
    {
        id: "klebang-beach",
        categoryId: "beaches",
        name: { en: "Klebang Beach", ms: "Pantai Klebang" },
        area: "Klebang",
        location: "Pantai Klebang",
        type: "outdoor",
        priceLevel: { en: "Free", ms: "Percuma" },
        priceNotes: { en: "Activities like ATV are paid", ms: "Aktiviti seperti ATV adalah berbayar" },
        suitableFor: ["Friends", "Family", "Couples", "Photography"],
        tags: { en: ["Beach", "Sunset", "Food", "Relaxing"], ms: ["Pantai", "Matahari Terbenam", "Makanan", "Beresantai"] },
        shortDesc: {
            en: "A popular coastal spot known for beautiful sunsets and sand dunes.",
            ms: "Tempat pesisir pantai yang popular terkenal dengan matahari terbenam yang indah dan bukit pasir."
        },
        fullDesc: {
            en: "Pantai Klebang has undergone massive reclamation, leaving behind picturesque sand dunes (accessible via a walk or ATV). It is extremely popular in the late afternoon for kite flying, strolling, and buying food from the many food trucks parked along the road.",
            ms: "Pantai Klebang telah menjalani penambakan besar-besaran, meninggalkan bukit pasir yang cantik (boleh diakses melalui berjalan kaki atau ATV). Ia sangat popular pada lewat petang untuk bermain layang-layang, bersiar-siar, dan membeli makanan dari banyak trak makanan."
        },
        openingHours: { en: "24 Hours", ms: "24 Jam" },
        bestTime: { en: "Late afternoon / Sunset", ms: "Lewat petang / Senja" },
        duration: { en: "1-2 hours", ms: "1-2 jam" },
        bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Klebang_Beach.jpg/800px-Klebang_Beach.jpg",
        mapUrl: "https://maps.app.goo.gl/3q4f6Y5b2a1V3c4b5",
        websiteUrl: ""
    },
    {
        id: "ghost-museum",
        categoryId: "unusual_museums",
        name: { en: "Ghost Museum Melaka", ms: "Muzium Hantu Melaka" },
        area: "Jonker / Bandar Hilir",
        location: "Jalan Kampung Hulu",
        type: "indoor",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" },
        priceNotes: { en: "Student discount available", ms: "Diskaun pelajar ada" },
        suitableFor: ["Friends", "Photography", "Fun"],
        tags: { en: ["Horror", "Photography", "Fun"], ms: ["Seram", "Fotografi", "Keserokkan"] },
        shortDesc: {
            en: "A fun and quirky interactive museum featuring ghosts and ghouls from various cultures.",
            ms: "Muzium interaktif yang menyeronokkan dan pelik yang memaparkan hantu dari pelbagai budaya."
        },
        fullDesc: {
            en: "More fun than truly terrifying, the Ghost Museum allows visitors to take creative photos with mannequins and setups of traditional ghosts like the Pontianak, Jiangshi, and western vampires. A good indoor group activity.",
            ms: "Lebih kelakar daripada menakutkan, Muzium Hantu membolehkan pelawat mengambil foto kreatif dengan patung dan persediaan hantu tradisional seperti Pontianak, Jiangshi dan pontianak barat. Aktiviti berkumpulan tertutup yang bagus."
        },
        openingHours: { en: "10:00 AM - 7:00 PM", ms: "10:00 AM - 7:00 PM" },
        bestTime: { en: "Anytime", ms: "Bila-bila masa" },
        duration: { en: "45 mins", ms: "45 minit" },
        bookingRequired: false,
        image: "",
        mapUrl: "https://maps.app.goo.gl/7g6f5Y4b3a2V2c3b4",
        websiteUrl: ""
    },
    {
        id: "melaka-wonderland",
        categoryId: "amusement",
        name: { en: "Melaka Wonderland Theme Park & Resort", ms: "Melaka Wonderland Theme Park" },
        area: "Ayer Keroh",
        location: "Taman Botanikal",
        type: "outdoor",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" },
        priceNotes: { en: "~RM40", ms: "~RM40" },
        suitableFor: ["Friends", "Family", "Students", "Groups"],
        tags: { en: ["Water Park", "Swimming", "Thrills"], ms: ["Taman Tema Air", "Berenang", "Mendebarkan"] },
        shortDesc: {
            en: "A massive water theme park surrounded by natural forest, perfect for hot days.",
            ms: "Taman tema air yang besar yang dikelilingi oleh hutan semula jadi, sesuai untuk hari yang panas."
        },
        fullDesc: {
            en: "Features multiple high-speed water slides, a wave pool, and a lazy river. Located very close to UTeM, it's a popular weekend destressing spot for students looking to cool down and have fun with friends.",
            ms: "Mempunyai pelbagai gelongsor air berkelajuan tinggi, kolam ombak, dan sungai malas. Terletak sangat dekat dengan UTeM, ia merupakan tempat yang popular pada hujung minggu bagi pelajar untuk menyejukkan badan dan berseronok bersama rakan-rakan."
        },
        openingHours: { en: "10:00 AM - 6:00 PM (Closed Mondays)", ms: "10:00 AM - 6:00 PM (Tutup Isnin)" },
        bestTime: { en: "Morning or early afternoon", ms: "Pagi atau awal petang" },
        duration: { en: "Half-day", ms: "Separuh hari" },
        bookingRequired: false,
        image: "",
        mapUrl: "https://maps.app.goo.gl/9h8g7Y6b5a4V3c2b1",
        websiteUrl: "https://melakawonderland.com.my/"
    },
    {
        id: "skytrex",
        categoryId: "outdoor_adventure",
        name: { en: "Skytrex Adventure Melaka", ms: "Skytrex Adventure Melaka" },
        area: "Ayer Keroh",
        location: "Melaka Botanical Garden",
        type: "outdoor",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" },
        priceNotes: { en: "Depends on difficulty level", ms: "Bergantung pada tahap kesukaran" },
        suitableFor: ["Friends", "Exercise", "Students", "Groups"],
        tags: { en: ["Adventure", "Climbing", "Nature"], ms: ["Pengembaraan", "Memanjat", "Alam Semulajadi"] },
        shortDesc: {
            en: "An outdoor aerial obstacle course suspended high within the forest canopy.",
            ms: "Padang halangan udara luar yang digantung tinggi di dalam kanopi hutan."
        },
        fullDesc: {
            en: "Test your physical limits with extreme rope climbing, flying foxes, and balancing acts suspended high up in the trees. Located inside the Melaka Botanical Garden, it requires booking and proper sports attire.",
            ms: "Uji had fizikal anda dengan memanjat tali, flying fox dan mengimbangi diri anda yang digantung tinggi di atas pokok. Terletak di dalam Taman Botanikal Melaka, ia memerlukan tempahan dan pakaian sukan yang sesuai."
        },
        openingHours: { en: "9:00 AM - 5:00 PM", ms: "9:00 AM - 5:00 PM" },
        bestTime: { en: "Morning", ms: "Pagi" },
        duration: { en: "2-3 hours", ms: "2-3 jam" },
        bookingRequired: true,
        image: "",
        mapUrl: "https://maps.app.goo.gl/1l2k3Y4b5a6V7c8b9",
        websiteUrl: "https://www.skytrex-adventure.org/melaka"
    },
    {
        id: "mitc-bowling",
        categoryId: "indoor_activities",
        name: { en: "Melaka International Bowling Centre (MIBC)", ms: "Pusat Boling Antarabangsa Melaka (MIBC)" },
        area: "MITC Ayer Keroh",
        location: "MITC",
        type: "indoor",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" },
        priceNotes: { en: "Per game basis", ms: "Berdasarkan setiap permainan" },
        suitableFor: ["Friends", "Students", "Group activity", "Rainy day"],
        tags: { en: ["Bowling", "Sports", "Indoor"], ms: ["Boling", "Sukan", "Tertutup"] },
        shortDesc: {
            en: "One of the largest bowling alleys in Malaysia with 52 lanes.",
            ms: "Salah satu pusat boling terbesar di Malaysia dengan 52 lorong."
        },
        fullDesc: {
            en: "Located near UTeM, MIBC is a world-class bowling center. It is an excellent indoor activity for groups of friends, especially during rainy days. Offers student rates on specific days.",
            ms: "Terletak berhampiran UTeM, MIBC ialah pusat boling bertaraf dunia. Ia merupakan aktiviti dalaman yang sangat baik untuk kumpulan rakan, terutamanya semasa hari hujan. Menawarkan kadar istimewa untuk pelajar pada hari tertentu."
        },
        openingHours: { en: "10:00 AM - 12:00 AM", ms: "10:00 AM - 12:00 AM" },
        bestTime: { en: "Evening or Rainy day", ms: "Petang atau Hari Hujan" },
        duration: { en: "2 hours", ms: "2 jam" },
        bookingRequired: false,
        image: "./assets/images/activities/mitc-bowling.jpg",
        mapUrl: "https://maps.app.goo.gl/9t8u7Y6b5a4V3c2b1",
        websiteUrl: ""
    }
,
// --- HISTORICAL & LANDMARKS ---
    {
        id: "stadthuys", categoryId: "historical", type: "outdoor",
        name: { en: "The Stadthuys", ms: "Bangunan Stadthuys" },
        area: "Bandar Hilir", location: "Jalan Gereja, Red Square",
        priceLevel: { en: "Free to view exterior", ms: "Percuma (luaran)" },
        priceNotes: { en: "Museum entry is paid", ms: "Masuk muzium berbayar" },
        suitableFor: ["Family", "Friends", "Photography", "Solo"],
        tags: { en: ["History", "Architecture", "Landmark"], ms: ["Sejarah", "Seni Bina", "Mercu Tanda"] },
        shortDesc: { en: "Iconic red Dutch administrative building built in the 1650s.", ms: "Bangunan pentadbiran ikonik Belanda berwarna merah yang dibina pada tahun 1650-an." },
        fullDesc: { en: "The Stadthuys is believed to be the oldest-surviving Dutch building in the East. Its bright terracotta red color makes it the centerpiece of Melaka's historic district.", ms: "Stadthuys dipercayai bangunan Belanda tertua yang masih wujud di Timur. Warna merah terakota yang terang menjadikannya pusat perhatian di daerah bersejarah Melaka." },
        openingHours: { en: "9:00 AM - 5:00 PM (Museum)", ms: "9:00 AM - 5:00 PM (Muzium)" },
        bestTime: { en: "Early Morning for photos", ms: "Awal pagi untuk gambar" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "./assets/images/activities/stadthuys.org&utm_campaign=api&utm_content=thumbnail", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "christ-church", categoryId: "historical", type: "indoor",
        name: { en: "Christ Church Melaka", ms: "Gereja Christ Melaka" },
        area: "Bandar Hilir", location: "Jalan Gereja, Red Square",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "Donations welcomed", ms: "Sumbangan dialu-alukan" },
        suitableFor: ["Friends", "Photography", "Solo", "Family"],
        tags: { en: ["History", "Architecture", "Religion"], ms: ["Sejarah", "Seni Bina", "Agama"] },
        shortDesc: { en: "An 18th-century Anglican church known for its distinct red facade.", ms: "Gereja Anglikan abad ke-18 yang terkenal dengan fasad merahnya." },
        fullDesc: { en: "Built by the Dutch when they took possession of Melaka from the Portuguese, it's one of the defining landmarks of the city and still a functioning church today.", ms: "Dibina oleh Belanda apabila mereka mengambil alih Melaka daripada Portugis, ia merupakan salah satu mercu tanda utama bandar ini dan masih berfungsi sebagai gereja hari ini." },
        openingHours: { en: "9:00 AM - 4:30 PM", ms: "9:00 AM - 4:30 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "30 mins", ms: "30 minit" }, bookingRequired: false,
         mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "st-paul-church", categoryId: "historical", type: "outdoor",
        name: { en: "St. Paul's Church Ruins", ms: "Runtuhan Gereja St. Paul" },
        area: "Bandar Hilir", location: "St. Paul's Hill",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Friends", "Photography", "Couples", "Solo"],
        tags: { en: ["History", "Ruins", "Views", "Walking"], ms: ["Sejarah", "Runtuhan", "Pemandangan", "Berjalan"] },
        shortDesc: { en: "Historic church ruins situated at the top of St. Paul's Hill with great views.", ms: "Runtuhan gereja bersejarah yang terletak di puncak Bukit St. Paul dengan pemandangan hebat." },
        fullDesc: { en: "Originally built in 1521, making it the oldest church building in Malaysia and Southeast Asia. It requires a short uphill walk but rewards you with ancient tombstones and panoramic views of Melaka city and coastline.", ms: "Mula dibina pada tahun 1521, menjadikannya bangunan gereja tertua di Malaysia dan Asia Tenggara. Ia memerlukan sedikit pendakian tetapi menawarkan pemandangan panorama bandar dan pantai Melaka." },
        openingHours: { en: "24 Hours", ms: "24 Jam" }, bestTime: { en: "Late Afternoon / Sunset", ms: "Lewat Petang / Senja" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/St_Paul_Church_Malacca.jpg/800px-St_Paul_Church_Malacca.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "melaka-sultanate-palace", categoryId: "historical", type: "indoor",
        name: { en: "Melaka Sultanate Palace Museum", ms: "Muzium Istana Kesultanan Melaka" },
        area: "Bandar Hilir", location: "Jalan Kota",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "MyKad rates apply", ms: "Kadar MyKad" },
        suitableFor: ["Family", "Students", "Culture"],
        tags: { en: ["Museum", "History", "Culture", "Architecture"], ms: ["Muzium", "Sejarah", "Budaya", "Seni Bina"] },
        shortDesc: { en: "A wooden replica of the 15th-century palace of Sultan Mansur Shah.", ms: "Replika kayu istana abad ke-15 Sultan Mansur Shah." },
        fullDesc: { en: "Meticulously constructed without the use of a single nail, this museum showcases the history and culture of the Melaka Sultanate, featuring dioramas, weapons, and traditional clothing.", ms: "Dibina dengan teliti tanpa menggunakan sebatang paku, muzium ini mempamerkan sejarah dan budaya Kesultanan Melaka, menampilkan diorama, senjata dan pakaian tradisional." },
        openingHours: { en: "9:00 AM - 5:00 PM (Closed Mondays)", ms: "9:00 AM - 5:00 PM (Tutup Isnin)" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Malacca_Sultanate_Palace_Museum.jpg/800px-Malacca_Sultanate_Palace_Museum.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "cheng-hoon-teng", categoryId: "historical", type: "indoor",
        name: { en: "Cheng Hoon Teng Temple", ms: "Kuil Cheng Hoon Teng" },
        area: "Jonker / Old Town", location: "Jalan Tokong (Harmony Street)",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "Donations welcomed", ms: "Sumbangan dialu-alukan" },
        suitableFor: ["Solo", "Photography", "Culture"],
        tags: { en: ["Temple", "Religion", "Architecture", "Culture"], ms: ["Kuil", "Agama", "Seni Bina", "Budaya"] },
        shortDesc: { en: "The oldest functioning traditional Chinese temple in Malaysia.", ms: "Kuil Cina tradisional tertua yang masih berfungsi di Malaysia." },
        fullDesc: { en: "Founded in the 1600s, this temple is a beautifully ornate sanctuary built using materials and artisans brought in from China. It practices the Three Doctrinal Systems of Taoism, Confucianism, and Buddhism.", ms: "Ditubuhkan pada tahun 1600-an, kuil ini adalah tempat perlindungan berhias indah yang dibina menggunakan bahan dan tukang dari China. Ia mengamalkan Tiga Sistem Doktrin iaitu Taoisme, Konfusianisme dan Buddhisme." },
        openingHours: { en: "7:00 AM - 4:00 PM", ms: "7:00 AM - 4:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "30 mins", ms: "30 minit" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Cheng_Hoon_Teng_Temple.jpg/800px-Cheng_Hoon_Teng_Temple.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "kampung-kling", categoryId: "historical", type: "indoor",
        name: { en: "Kampung Kling Mosque", ms: "Masjid Kampung Kling" },
        area: "Jonker / Old Town", location: "Jalan Tukang Emas (Harmony Street)",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Solo", "Culture", "Photography"],
        tags: { en: ["Mosque", "Religion", "Architecture", "Culture"], ms: ["Masjid", "Agama", "Seni Bina", "Budaya"] },
        shortDesc: { en: "Historic mosque featuring unique Sumatran and Moorish architectural styles.", ms: "Masjid bersejarah yang menampilkan gaya seni bina unik Sumatera dan Moor." },
        fullDesc: { en: "One of the oldest mosques in Malaysia, it stands out with its multi-tiered pagoda-like minaret instead of the traditional dome, reflecting the diverse architectural influences in Melaka.", ms: "Salah satu masjid tertua di Malaysia, ia menonjol dengan menara bertingkat seperti pagoda dan bukannya kubah tradisional, mencerminkan kepelbagaian pengaruh seni bina di Melaka." },
        openingHours: { en: "Check local times", ms: "Semak waktu tempatan" }, bestTime: { en: "Outside prayer times", ms: "Luar waktu solat" }, duration: { en: "30 mins", ms: "30 minit" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Kampung_Kling_Mosque.jpg/800px-Kampung_Kling_Mosque.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "portuguese-settlement", categoryId: "different_unusual", type: "outdoor",
        name: { en: "Portuguese Settlement", ms: "Perkampungan Portugis" },
        area: "Ujong Pasir", location: "Ujong Pasir",
        priceLevel: { en: "Free to visit", ms: "Percuma untuk lawatan" }, priceNotes: { en: "Food is paid", ms: "Makanan berbayar" },
        suitableFor: ["Friends", "Family", "Foodies", "Couples"],
        tags: { en: ["Culture", "Food", "Seafood", "Sunset"], ms: ["Budaya", "Makanan", "Makanan Laut", "Senja"] },
        shortDesc: { en: "A unique village home to the Kristang people, famous for its seafood and vibrant Christmas celebrations.", ms: "Perkampungan unik orang Kristang, terkenal dengan makanan laut dan sambutan Krismas yang meriah." },
        fullDesc: { en: "Home to descendants of the Portuguese who conquered Melaka in 1511. It's the best place in Melaka to eat fresh seafood at the local food court right by the sea while watching the sunset.", ms: "Tempat tinggal keturunan Portugis yang menakluki Melaka pada tahun 1511. Ia adalah tempat terbaik di Melaka untuk makan makanan laut segar di medan selera tempatan di tepi laut sambil melihat matahari terbenam." },
        openingHours: { en: "Evenings for food", ms: "Petang/Malam untuk makanan" }, bestTime: { en: "Dinner / Sunset", ms: "Makan Malam / Senja" }, duration: { en: "2-3 hours", ms: "2-3 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Portuguese_Square,_Melaka.jpg/800px-Portuguese_Square,_Melaka.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "kampung-morten", categoryId: "historical", type: "outdoor",
        name: { en: "Kampung Morten & Villa Sentosa", ms: "Kampung Morten & Villa Sentosa" },
        area: "City Centre", location: "Kampung Morten",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "Donations for Villa Sentosa", ms: "Sumbangan untuk Villa Sentosa" },
        suitableFor: ["Photography", "Solo", "Culture"],
        tags: { en: ["Village", "Culture", "Architecture", "History"], ms: ["Kampung", "Budaya", "Seni Bina", "Sejarah"] },
        shortDesc: { en: "A beautifully preserved traditional Malay village in the middle of the city.", ms: "Perkampungan tradisional Melayu yang dipelihara indah di tengah-tengah bandar." },
        fullDesc: { en: "Walking into Kampung Morten feels like stepping back in time. You can visit Villa Sentosa, a living museum within a traditional wooden Malay house, to learn about local customs and heritage.", ms: "Berjalan ke Kampung Morten terasa seperti melangkah kembali ke masa lalu. Anda boleh melawat Villa Sentosa, muzium hidup di dalam rumah kayu tradisional Melayu, untuk mengetahui tentang adat dan warisan tempatan." },
        openingHours: { en: "Daytime", ms: "Siang" }, bestTime: { en: "Late Morning", ms: "Lewat Pagi" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kampung_Morten_Malacca.jpg/800px-Kampung_Morten_Malacca.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "maritime-museum", categoryId: "heritage", type: "indoor",
        name: { en: "Maritime Museum (Flora de la Mar)", ms: "Muzium Samudera (Flora de la Mar)" },
        area: "Bandar Hilir", location: "Jalan Merdeka",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "MyKad ~RM10", ms: "MyKad ~RM10" },
        suitableFor: ["Family", "Students", "Friends"],
        tags: { en: ["Museum", "History", "Ship", "Educational"], ms: ["Muzium", "Sejarah", "Kapal", "Pendidikan"] },
        shortDesc: { en: "A museum housed inside a massive replica of a Portuguese galleon.", ms: "Muzium yang ditempatkan di dalam replika besar kapal geliung Portugis." },
        fullDesc: { en: "The museum is a replica of the Flora de la Mar, a Portuguese ship that sank off the coast of Melaka. It highlights Melaka's importance as an international emporium from the Melaka Sultanate period to the colonial eras.", ms: "Muzium ini merupakan replika Flora de la Mar, sebuah kapal Portugis yang karam di luar pantai Melaka. Ia menonjolkan kepentingan Melaka sebagai emporium antarabangsa dari zaman Kesultanan Melaka hingga zaman penjajah." },
        openingHours: { en: "9:00 AM - 5:00 PM", ms: "9:00 AM - 5:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Maritime_Museum_Malacca_2.jpg/800px-Maritime_Museum_Malacca_2.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "cheng-ho-museum", categoryId: "heritage", type: "indoor",
        name: { en: "Cheng Ho Cultural Museum", ms: "Muzium Budaya Cheng Ho" },
        area: "Jonker / Old Town", location: "Jalan Hang Jebat",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Adults ~RM10", ms: "Dewasa ~RM10" },
        suitableFor: ["Culture", "History", "Students"],
        tags: { en: ["Museum", "History", "Culture"], ms: ["Muzium", "Sejarah", "Budaya"] },
        shortDesc: { en: "Explores the life and voyages of Admiral Zheng He.", ms: "Meneroka kehidupan dan pelayaran Laksamana Cheng Ho." },
        fullDesc: { en: "Set in a large ancient building, this museum provides extensive exhibits on the Ming Dynasty admiral Cheng Ho (Zheng He) and his historical connections to Melaka.", ms: "Terletak di bangunan purba yang besar, muzium ini menyediakan pameran yang meluas tentang laksamana Dinasti Ming Cheng Ho dan kaitan sejarahnya dengan Melaka." },
        openingHours: { en: "9:00 AM - 6:00 PM", ms: "9:00 AM - 6:00 PM" }, bestTime: { en: "Afternoon", ms: "Petang" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "upside-down-house", categoryId: "unusual_museums", type: "indoor",
        name: { en: "Upside Down House Melaka", ms: "Rumah Terbalik Melaka" },
        area: "Bandar Hilir", location: "Plaza Mahkota",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "MyKad ~RM18", ms: "MyKad ~RM18" },
        suitableFor: ["Friends", "Photography", "Family", "Fun"],
        tags: { en: ["Fun", "Photography", "Indoor", "Illusion"], ms: ["Keserokkan", "Fotografi", "Tertutup", "Ilusi"] },
        shortDesc: { en: "A fun photography attraction where everything is mounted upside down.", ms: "Tarikan fotografi yang menyeronokkan di mana semuanya dipasang terbalik." },
        fullDesc: { en: "A quirky indoor attraction featuring multiple rooms (living room, bedroom, kitchen) fully furnished but completely upside down. Perfect for taking creative, reality-defying photos with friends.", ms: "Tarikan tertutup unik yang menampilkan pelbagai bilik berperabot lengkap tetapi terbalik. Sesuai untuk mengambil foto kreatif bersama rakan-rakan." },
        openingHours: { en: "10:00 AM - 7:00 PM", ms: "10:00 AM - 7:00 PM" }, bestTime: { en: "Anytime", ms: "Bila-bila masa" }, duration: { en: "45 mins", ms: "45 minit" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "submarine-museum", categoryId: "unusual_museums", type: "indoor",
        name: { en: "Melaka Submarine Museum", ms: "Muzium Kapal Selam Melaka" },
        area: "Klebang", location: "Dataran 1Malaysia, Klebang",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Cheap entry fee", ms: "Bayaran masuk murah" },
        suitableFor: ["Students", "History", "Family"],
        tags: { en: ["Museum", "Military", "Submarine"], ms: ["Muzium", "Ketenteraan", "Kapal Selam"] },
        shortDesc: { en: "Explore an actual decommissioned Agosta 70 class submarine.", ms: "Terokai kapal selam kelas Agosta 70 sebenar yang telah ditamatkan perkhidmatannya." },
        fullDesc: { en: "Step inside the SMD Quessant, a retired French-built submarine formerly used to train Royal Malaysian Navy crews. It offers a rare glimpse into the cramped and complex interior of a real military submarine.", ms: "Melangkah masuk ke dalam SMD Quessant, kapal selam buatan Perancis bersara yang dahulunya digunakan untuk melatih kru TLDM. Ia menawarkan pandangan yang jarang ke dalam bahagian dalaman kapal selam tentera yang sempit dan kompleks." },
        openingHours: { en: "9:00 AM - 5:30 PM", ms: "9:00 AM - 5:30 PM" }, bestTime: { en: "Afternoon (Combine with Klebang Beach)", ms: "Petang (Gabung dengan Pantai Klebang)" }, duration: { en: "45 mins", ms: "45 minit" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Melaka_Submarine_Museum_2.jpg/800px-Melaka_Submarine_Museum_2.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "taman-seribu-bunga", categoryId: "nature", type: "outdoor",
        name: { en: "Taman Seribu Bunga", ms: "Taman Seribu Bunga" },
        area: "Ayer Keroh", location: "Ayer Keroh",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Photography", "Relaxing", "Couples", "Solo"],
        tags: { en: ["Park", "Nature", "Flowers", "Photography"], ms: ["Taman", "Alam", "Bunga", "Fotografi"] },
        shortDesc: { en: "A beautifully landscaped park translating to 'Park of a Thousand Flowers'.", ms: "Taman yang indah dan dinamakan 'Taman Seribu Bunga'." },
        fullDesc: { en: "A scenic botanical park perfect for photography and relaxing walks. It features beautifully manicured gardens, fountains, and a wide variety of local flora. A quiet escape from the busy city.", ms: "Taman botani yang indah sesuai untuk bergambar dan berjalan santai. Ia mempunyai taman yang dijaga rapi, air pancut dan pelbagai jenis flora tempatan. Tempat melarikan diri yang sunyi dari bandar." },
        openingHours: { en: "Daytime", ms: "Waktu Siang" }, bestTime: { en: "Morning or Late Afternoon", ms: "Pagi atau Lewat Petang" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "sungai-udang-forest", categoryId: "nature", type: "outdoor",
        name: { en: "Sungai Udang Recreational Forest", ms: "Hutan Rekreasi Sungai Udang" },
        area: "Sungai Udang", location: "Sungai Udang",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Exercise", "Friends", "Nature lovers"],
        tags: { en: ["Forest", "Trekking", "Camping", "Nature"], ms: ["Hutan", "Trekking", "Perkhemahan", "Alam Semulajadi"] },
        shortDesc: { en: "A peaceful forest reserve offering trails, camping sites, and nature walks.", ms: "Hutan simpan yang tenang menawarkan denai, tapak perkhemahan dan alam semula jadi." },
        fullDesc: { en: "A well-maintained recreational forest that is excellent for jungle trekking and camping. It has concrete pathways for casual walkers as well as rugged trails for more adventurous hikers. Great for students wanting an escape into nature.", ms: "Hutan rekreasi yang diselenggara dengan baik yang sangat baik untuk meredah hutan dan berkhemah. Ia mempunyai laluan konkrit untuk pejalan kaki kasual serta laluan lasak untuk pendaki yang lebih mencabar." },
        openingHours: { en: "Daytime", ms: "Waktu Siang" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "2-3 hours", ms: "2-3 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "pantai-puteri", categoryId: "beaches", type: "outdoor",
        name: { en: "Pantai Puteri", ms: "Pantai Puteri" },
        area: "Tanjung Kling", location: "Tanjung Kling",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Friends", "Relaxing", "Family", "Foodies"],
        tags: { en: ["Beach", "Sunset", "Food", "Relaxing"], ms: ["Pantai", "Matahari Terbenam", "Makanan", "Beresantai"] },
        shortDesc: { en: "A quiet, scenic beach popular with locals for evening walks and street food.", ms: "Pantai yang sunyi dan indah yang popular di kalangan penduduk tempatan untuk bersiar-siar petang dan makanan jalanan." },
        fullDesc: { en: "Less crowded than Klebang, Pantai Puteri stretches for about 2.5km. It is a fantastic spot for a quiet evening watching the sunset, enjoying local street food by the coast, or fishing.", ms: "Kurang sesak berbanding Klebang, Pantai Puteri membentang sepanjang kira-kira 2.5km. Ia adalah tempat yang hebat untuk petang yang tenang menonton matahari terbenam, menikmati makanan jalanan atau memancing." },
        openingHours: { en: "24 Hours", ms: "24 Jam" }, bestTime: { en: "Sunset", ms: "Senja" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Pantai_Puteri_Melaka.jpg/800px-Pantai_Puteri_Melaka.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "tanjung-bidara", categoryId: "beaches", type: "outdoor",
        name: { en: "Tanjung Bidara Beach", ms: "Pantai Tanjung Bidara" },
        area: "Masjid Tanah", location: "Masjid Tanah",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Friends", "Family", "Relaxing"],
        tags: { en: ["Beach", "Swimming", "Picnic"], ms: ["Pantai", "Berenang", "Berkelah"] },
        shortDesc: { en: "One of the better beaches in Melaka for actual swimming and picnicking.", ms: "Salah satu pantai yang lebih baik di Melaka untuk berenang dan berkelah." },
        fullDesc: { en: "Located further away from the city centre, Tanjung Bidara features finer sand and clearer waters compared to city beaches. It is a popular weekend getaway spot for locals and students alike.", ms: "Terletak lebih jauh dari pusat bandar, Tanjung Bidara mempunyai pasir yang lebih halus dan air yang lebih jernih berbanding pantai bandar. Ia merupakan tempat percutian hujung minggu yang popular." },
        openingHours: { en: "24 Hours", ms: "24 Jam" }, bestTime: { en: "Afternoon", ms: "Petang" }, duration: { en: "2-4 hours", ms: "2-4 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "butterfly-sanctuary", categoryId: "animal_wildlife", type: "indoor",
        name: { en: "Melaka Butterfly & Reptile Sanctuary", ms: "Taman Rama-Rama & Reptilia Melaka" },
        area: "Ayer Keroh", location: "Lebuh Ayer Keroh",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Check for student promos", ms: "Semak promosi pelajar" },
        suitableFor: ["Family", "Photography", "Nature lovers"],
        tags: { en: ["Animals", "Insects", "Nature", "Photography"], ms: ["Haiwan", "Serangga", "Alam Semulajadi", "Fotografi"] },
        shortDesc: { en: "A beautifully maintained sanctuary featuring thousands of butterflies and various reptiles.", ms: "Tempat perlindungan yang diselenggara dengan indah yang menampilkan beribu-ribu rama-rama dan pelbagai reptilia." },
        fullDesc: { en: "More than just butterflies, this sanctuary acts as a conservation center and houses a diverse range of snakes, lizards, and crocodiles. The walk-through butterfly aviary is excellent for photography.", ms: "Lebih daripada sekadar rama-rama, tempat perlindungan ini bertindak sebagai pusat pemuliharaan dan menempatkan pelbagai jenis ular, cicak dan buaya. Sangkar rama-rama sangat baik untuk fotografi." },
        openingHours: { en: "8:30 AM - 5:30 PM", ms: "8:30 AM - 5:30 PM" }, bestTime: { en: "Morning (when butterflies are active)", ms: "Pagi (rama-rama aktif)" }, duration: { en: "1.5 hours", ms: "1.5 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Melaka_Butterfly_and_Reptile_Sanctuary_1.jpg/800px-Melaka_Butterfly_and_Reptile_Sanctuary_1.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: "https://www.butterflyreptile.com/"
    },
    {
        id: "crocodile-park", categoryId: "zoo_animals", type: "outdoor",
        name: { en: "Melaka Crocodile & Recreation Park", ms: "Taman Buaya & Rekreasi Melaka" },
        area: "Ayer Keroh", location: "Lebuh Ayer Keroh",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Family", "Friends"],
        tags: { en: ["Animals", "Reptiles", "Park"], ms: ["Haiwan", "Reptilia", "Taman"] },
        shortDesc: { en: "Home to over 100 species of crocodiles and a miniature Malaysia landmark park.", ms: "Menempatkan lebih 100 spesies buaya dan taman mercu tanda mini Malaysia." },
        fullDesc: { en: "Witness massive crocodiles up close, watch feeding shows, and explore the recreational park which includes a small water park and miniature replicas of famous Malaysian landmarks.", ms: "Saksikan buaya besar dari dekat, tonton pertunjukan memberi makan, dan terokai taman rekreasi yang merangkumi taman air kecil dan replika mini mercu tanda terkenal Malaysia." },
        openingHours: { en: "9:00 AM - 5:00 PM", ms: "9:00 AM - 5:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "2 hours", ms: "2 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Melaka_Crocodile_Farm.jpg/800px-Melaka_Crocodile_Farm.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "afamosa-water-park", categoryId: "amusement", type: "outdoor",
        name: { en: "A'Famosa Water Theme Park", ms: "Taman Tema Air A'Famosa" },
        area: "Alor Gajah", location: "A'Famosa Resort, Alor Gajah",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "High price", ms: "Harga tinggi" },
        suitableFor: ["Friends", "Groups", "Students"],
        tags: { en: ["Water Park", "Swimming", "Thrills", "Fun"], ms: ["Taman Tema Air", "Berenang", "Keserokkan"] },
        shortDesc: { en: "One of the largest water theme parks in Malaysia.", ms: "Salah satu taman tema air terbesar di Malaysia." },
        fullDesc: { en: "A massive water park featuring wave pools, lazy rivers, and thrilling high-speed slides. An excellent day trip destination for university students to relax and destress after exams.", ms: "Taman air besar yang menampilkan kolam ombak, sungai malas dan gelongsor berkelajuan tinggi yang mendebarkan. Destinasi percutian yang sangat baik untuk pelajar universiti bersantai selepas peperiksaan." },
        openingHours: { en: "10:00 AM - 6:00 PM (Closed Tuesdays)", ms: "10:00 AM - 6:00 PM (Tutup Selasa)" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "Half-day to Full-day", ms: "Separuh atau Sepenuh Hari" }, bookingRequired: true,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: "https://www.afamosa.com/water-theme-park"
    },
    {
        id: "afamosa-safari", categoryId: "zoo_animals", type: "outdoor",
        name: { en: "A'Famosa Safari Wonderland", ms: "A'Famosa Safari Wonderland" },
        area: "Alor Gajah", location: "A'Famosa Resort, Alor Gajah",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Friends", "Groups", "Family"],
        tags: { en: ["Animals", "Wildlife", "Shows", "Adventure"], ms: ["Haiwan", "Hidupan Liar", "Pertunjukan", "Pengembaraan"] },
        shortDesc: { en: "An interactive animal safari featuring free-roaming wildlife and daily shows.", ms: "Safari haiwan interaktif yang menampilkan hidupan liar perayauan bebas dan pertunjukan harian." },
        fullDesc: { en: "Experience an open-air safari ride where animals roam freely. You can feed animals, watch engaging multi-animal shows, and take a cruise to 'Monkey Island'.", ms: "Alami tunggangan safari terbuka di mana haiwan bebas berkeliaran. Anda boleh memberi makan haiwan, menonton pelbagai pertunjukan dan menaiki bot ke 'Pulau Monyet'." },
        openingHours: { en: "10:00 AM - 5:00 PM", ms: "10:00 AM - 5:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "Half-day", ms: "Separuh hari" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "afamosa-old-west", categoryId: "night_activities", type: "outdoor",
        name: { en: "A'Famosa Old West (Night Safari)", ms: "A'Famosa Old West" },
        area: "Alor Gajah", location: "A'Famosa Resort, Alor Gajah",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Friends", "Groups", "Night out"],
        tags: { en: ["Night", "Shows", "Entertainment", "Theme Park"], ms: ["Malam", "Pertunjukan", "Hiburan", "Taman Tema"] },
        shortDesc: { en: "A cowboy-themed night park with spectacular fire shows and a carnival atmosphere.", ms: "Taman malam bertemakan koboi dengan pertunjukan api yang menakjubkan dan suasana karnival." },
        fullDesc: { en: "Step into a rustic cowboy town bustling with entertainment. The main highlight is the spectacular Red Indian fire show, fireworks, and the colorful carnival parade. A great night activity for groups.", ms: "Melangkah ke bandar koboi yang sibuk dengan hiburan. Tarikan utama ialah pertunjukan api Red Indian yang menakjubkan, bunga api dan perarakan karnival yang berwarna-warni. Aktiviti malam yang hebat untuk kumpulan." },
        openingHours: { en: "6:00 PM - 12:00 AM", ms: "6:00 PM - 12:00 AM" }, bestTime: { en: "8:00 PM", ms: "8:00 Malam" }, duration: { en: "3 hours", ms: "3 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "breakout-melaka", categoryId: "indoor_activities", type: "indoor",
        name: { en: "Breakout Escape Room Melaka", ms: "Breakout Escape Room Melaka" },
        area: "City Centre", location: "The Shore Shopping Gallery",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Group rates apply", ms: "Kadar kumpulan" },
        suitableFor: ["Friends", "Students", "Groups", "Rainy day"],
        tags: { en: ["Escape Room", "Puzzle", "Indoor", "Fun"], ms: ["Escape Room", "Teka-teki", "Tertutup", "Keserokkan"] },
        shortDesc: { en: "An immersive and challenging physical escape room experience.", ms: "Pengalaman bilik pelepasan fizikal (escape room) yang mendalam dan mencabar." },
        fullDesc: { en: "Grab a group of friends and try to escape from elaborately themed locked rooms by solving puzzles, finding clues, and using teamwork before the 45-minute timer runs out.", ms: "Kumpul rakan dan cuba melarikan diri dari bilik terkunci bertema dengan menyelesaikan teka-teki, mencari petunjuk, dan menggunakan kerja berpasukan sebelum pemasa tamat." },
        openingHours: { en: "10:00 AM - 10:00 PM", ms: "10:00 AM - 10:00 PM" }, bestTime: { en: "Anytime", ms: "Bila-bila masa" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: true,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "gsc-dataran-pahlawan", categoryId: "indoor_activities", type: "indoor",
        name: { en: "GSC Dataran Pahlawan (Cinema)", ms: "GSC Dataran Pahlawan (Pawagam)" },
        area: "Bandar Hilir", location: "Dataran Pahlawan Megamall",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Student discounts on weekdays", ms: "Diskaun pelajar pada hari bekerja" },
        suitableFor: ["Friends", "Couples", "Solo", "Rainy day", "Night out"],
        tags: { en: ["Cinema", "Movies", "Entertainment", "Indoor"], ms: ["Pawagam", "Wayang", "Hiburan", "Tertutup"] },
        shortDesc: { en: "The largest cinema multiplex in central Melaka.", ms: "Multipleks pawagam terbesar di tengah Melaka." },
        fullDesc: { en: "Catch the latest blockbuster movies here. It's a highly popular spot for UTeM students to hang out during weekends or unwind after classes. Make use of the student price for cheaper tickets before 6 PM on weekdays.", ms: "Tonton filem blockbuster terkini di sini. Ia merupakan tempat yang sangat popular untuk pelajar UTeM melepak semasa hujung minggu. Manfaatkan harga pelajar sebelum jam 6 petang." },
        openingHours: { en: "10:00 AM - Midnight", ms: "10:00 AM - Tengah Malam" }, bestTime: { en: "Anytime", ms: "Bila-bila masa" }, duration: { en: "2-3 hours", ms: "2-3 jam" }, bookingRequired: true,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "jump-space-melaka", categoryId: "indoor_activities", type: "indoor",
        name: { en: "Jump Space Melaka (Trampoline Park)", ms: "Jump Space Melaka (Taman Trampolin)" },
        area: "Kota Laksamana", location: "Kota Laksamana",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Grip socks required", ms: "Stokin cengkaman diperlukan" },
        suitableFor: ["Friends", "Students", "Exercise"],
        tags: { en: ["Trampoline", "Sports", "Indoor", "Fun"], ms: ["Trampolin", "Sukan", "Tertutup", "Keserokkan"] },
        shortDesc: { en: "A massive indoor trampoline park perfect for burning energy.", ms: "Taman trampolin tertutup besar yang sesuai untuk membakar tenaga." },
        fullDesc: { en: "An excellent indoor workout and fun activity with friends. The park features interconnected trampolines, foam pits, and dodgeball courts. Highly recommended for a rainy day activity.", ms: "Senaman dalaman yang sangat baik dan aktiviti yang menyeronokkan bersama rakan-rakan. Taman ini menampilkan trampolin, lubang buih, dan gelanggang dodgeball." },
        openingHours: { en: "10:00 AM - 10:00 PM", ms: "10:00 AM - 10:00 PM" }, bestTime: { en: "Afternoon", ms: "Petang" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "golden-break-snooker", categoryId: "indoor_activities", type: "indoor",
        name: { en: "Golden Break Snooker & Pool Club", ms: "Kelab Snuker & Pool Golden Break" },
        area: "Melaka Raya", location: "Melaka Raya",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Hourly rates", ms: "Kadar setiap jam" },
        suitableFor: ["Friends", "Students", "Night out"],
        tags: { en: ["Billiards", "Pool", "Indoor", "Night"], ms: ["Biliard", "Pool", "Tertutup", "Malam"] },
        shortDesc: { en: "A popular, well-maintained pool and snooker hall.", ms: "Dewan pool dan snuker yang popular dan diselenggara dengan baik." },
        fullDesc: { en: "A clean and professional environment to play pool or snooker with friends. It's a common hangout spot for students late at night, offering reasonable hourly rates and good tables.", ms: "Persekitaran yang bersih dan profesional untuk bermain pool atau snuker bersama rakan-rakan. Ia adalah tempat lepak biasa untuk pelajar pada lewat malam." },
        openingHours: { en: "11:00 AM - 3:00 AM", ms: "11:00 AM - 3:00 AM" }, bestTime: { en: "Night", ms: "Malam" }, duration: { en: "2 hours", ms: "2 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "akcc-gokart", categoryId: "outdoor_adventure", type: "outdoor",
        name: { en: "Melaka International Motorsport Circuit (MIMC)", ms: "Litar Permotoran Antarabangsa Melaka" },
        area: "Ayer Keroh", location: "Ayer Keroh",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Per session", ms: "Kadar setiap sesi" },
        suitableFor: ["Friends", "Groups", "Adrenaline seekers"],
        tags: { en: ["Go Kart", "Racing", "Adventure", "Sports"], ms: ["Go Kart", "Perlumbaan", "Pengembaraan", "Sukan"] },
        shortDesc: { en: "A professional 1.7km go-kart and motorsport racing circuit.", ms: "Litar go-kart dan perlumbaan sukan permotoran profesional sepanjang 1.7km." },
        fullDesc: { en: "Satisfy your need for speed at this massive outdoor track. You can rent go-karts and race against your friends. The wide track layout allows for safe overtaking and a thrilling experience.", ms: "Penuhi keinginan anda untuk kelajuan di trek luar yang besar ini. Anda boleh menyewa go-kart dan berlumba dengan rakan anda. Susun atur trek yang luas membolehkan perlumbaan yang mendebarkan." },
        openingHours: { en: "Check local times", ms: "Semak waktu tempatan" }, bestTime: { en: "Late Afternoon", ms: "Lewat Petang" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "gadek-hot-springs", categoryId: "hot_springs", type: "outdoor",
        name: { en: "Gadek Hot Springs", ms: "Kolam Air Panas Gadek" },
        area: "Alor Gajah", location: "Gadek, Alor Gajah",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Low entry fee", ms: "Yuran masuk yang rendah" },
        suitableFor: ["Family", "Friends", "Relaxing", "Night out"],
        tags: { en: ["Hot Spring", "Relaxing", "Nature", "Health"], ms: ["Air Panas", "Beresantai", "Alam Semulajadi", "Kesihatan"] },
        shortDesc: { en: "Natural sulphur hot springs known for their therapeutic properties.", ms: "Kolam air panas sulfur semula jadi yang terkenal dengan khasiat terapeutiknya." },
        fullDesc: { en: "Features multiple communal pools of varying temperatures fed by natural hot springs. It's especially popular at night when the cool air contrasts perfectly with the hot water. Great for soothing tired muscles.", ms: "Menampilkan pelbagai kolam komunal dengan suhu berbeza-beza yang disalurkan oleh mata air panas semula jadi. Ia sangat popular pada waktu malam." },
        openingHours: { en: "24 Hours (Usually)", ms: "24 Jam (Biasa)" }, bestTime: { en: "Night", ms: "Malam" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gadek_Hot_Spring.jpg/800px-Gadek_Hot_Spring.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "melaka-planetarium", categoryId: "educational", type: "indoor",
        name: { en: "Melaka Planetarium Adventure Science Centre", ms: "Pusat Sains & Planetarium Melaka" },
        area: "Ayer Keroh", location: "MITC, Ayer Keroh",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Student prices available", ms: "Harga pelajar ada" },
        suitableFor: ["Students", "Family", "Science enthusiasts"],
        tags: { en: ["Science", "Space", "Educational", "Indoor"], ms: ["Sains", "Angkasa Lepas", "Pendidikan", "Tertutup"] },
        shortDesc: { en: "An interactive science and astronomy center featuring a dome theater.", ms: "Pusat sains dan astronomi interaktif yang menampilkan teater kubah." },
        fullDesc: { en: "Explore interactive exhibits related to space, astronomy, and physics. The main attraction is the large dome theater that screens immersive educational documentaries about the universe.", ms: "Teroka pameran interaktif berkaitan angkasa, astronomi dan fizik. Tarikan utama ialah teater kubah besar yang menayangkan dokumentari pendidikan tentang alam semesta." },
        openingHours: { en: "9:00 AM - 5:00 PM", ms: "9:00 AM - 5:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "2 hours", ms: "2 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "al-khawarizmi", categoryId: "educational", type: "indoor",
        name: { en: "Al-Khawarizmi Astronomy Complex", ms: "Kompleks Falak Al-Khawarizmi" },
        area: "Tanjung Bidara", location: "Masjid Tanah",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Students", "Photography", "Education"],
        tags: { en: ["Astronomy", "Science", "Educational", "Views"], ms: ["Astronomi", "Sains", "Pendidikan", "Pemandangan"] },
        shortDesc: { en: "An observatory and astronomy museum situated by the coast.", ms: "Sebuah balai cerap dan muzium astronomi yang terletak di tepi pantai." },
        fullDesc: { en: "Named after the famous Muslim astronomer, this complex includes an observatory, a planetarium, and an astronomy museum. Located near Tanjung Bidara beach, it offers both educational value and beautiful coastal views.", ms: "Dinamakan sempena nama ahli astronomi Islam yang terkenal, kompleks ini merangkumi balai cerap, planetarium, dan muzium astronomi. Terletak berhampiran pantai." },
        openingHours: { en: "Check local times", ms: "Semak waktu tempatan" }, bestTime: { en: "Afternoon", ms: "Petang" }, duration: { en: "2 hours", ms: "2 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "melaka-river-walk", categoryId: "night_activities", type: "outdoor",
        name: { en: "Melaka River Walk", ms: "Laluan Pejalan Kaki Sungai Melaka" },
        area: "City Centre", location: "Along Melaka River",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Couples", "Friends", "Photography", "Solo"],
        tags: { en: ["Walking", "Sightseeing", "Night", "Photography"], ms: ["Berjalan", "Melancong", "Malam", "Fotografi"] },
        shortDesc: { en: "A beautifully illuminated pathway alongside the Melaka River, perfect for night strolls.", ms: "Laluan yang diterangi indah di sepanjang Sungai Melaka, sesuai untuk bersiar-siar pada waktu malam." },
        fullDesc: { en: "Instead of taking the paid cruise, you can walk miles along the paved riverbanks. At night, the river is beautifully lit up, passing by historic bridges, cafes, bars, and colorful street art murals. It's highly atmospheric and extremely safe.", ms: "Selain menaiki bot pelancong, anda boleh berjalan batu di sepanjang tebing sungai berturap. Pada waktu malam, sungai ini diterangi cahaya yang indah, melepasi jambatan bersejarah, kafe, dan seni jalanan." },
        openingHours: { en: "24 Hours", ms: "24 Jam" }, bestTime: { en: "Night", ms: "Malam" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Malacca_River.jpg/800px-Malacca_River.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
// --- MORE HISTORICAL & LANDMARKS ---
    {
        id: "victoria-fountain", categoryId: "historical", type: "outdoor",
        name: { en: "Queen Victoria Fountain", ms: "Air Pancut Queen Victoria" },
        area: "Bandar Hilir", location: "Red Square",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Photography", "Friends", "Solo"],
        tags: { en: ["Landmark", "History", "Photography"], ms: ["Mercu Tanda", "Sejarah", "Fotografi"] },
        shortDesc: { en: "A beautiful marble fountain built in 1901 to commemorate Queen Victoria's Diamond Jubilee.", ms: "Air pancut marmar cantik yang dibina pada tahun 1901 untuk memperingati Jubli Intan Ratu Victoria." },
        fullDesc: { en: "Located in the Dutch Square, this functioning fountain is a colonial-era landmark featuring intricate carvings. It is one of the most photographed spots in Melaka.", ms: "Terletak di Dataran Belanda, air pancut yang masih berfungsi ini merupakan mercu tanda zaman kolonial. Ia adalah salah satu tempat yang paling banyak diambil gambar di Melaka." },
        openingHours: { en: "24 Hours", ms: "24 Jam" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "15 mins", ms: "15 minit" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Victoria_Fountain,_Malacca.jpg/800px-Victoria_Fountain,_Malacca.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "independence-memorial", categoryId: "historical", type: "indoor",
        name: { en: "Proclamation of Independence Memorial", ms: "Memorial Pengisytiharan Kemerdekaan" },
        area: "Bandar Hilir", location: "Jalan Parameswara",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Students", "History", "Solo"],
        tags: { en: ["Museum", "History", "Educational"], ms: ["Muzium", "Sejarah", "Pendidikan"] },
        shortDesc: { en: "Museum housed in a colonial Dutch mansion detailing Malaysia's journey to independence.", ms: "Muzium yang ditempatkan di rumah agam kolonial Belanda yang memperincikan perjalanan Malaysia ke arah kemerdekaan." },
        fullDesc: { en: "Contains historical documents, maps, treaties, and photographs concerning the struggle for independence from British rule. It is located exactly where the first Prime Minister announced the impending independence.", ms: "Mengandungi dokumen sejarah, peta, perjanjian, dan gambar mengenai perjuangan kemerdekaan dari pemerintahan British." },
        openingHours: { en: "9:00 AM - 5:00 PM (Closed Mondays)", ms: "9:00 AM - 5:00 PM (Tutup Isnin)" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Proclamation_of_Independence_Memorial.jpg/800px-Proclamation_of_Independence_Memorial.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "bastion-middleburg", categoryId: "historical", type: "outdoor",
        name: { en: "Bastion Middleburg", ms: "Kubu Middleburg" },
        area: "Bandar Hilir", location: "Melaka River mouth",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Photography", "Solo", "History"],
        tags: { en: ["Fort", "History", "Architecture", "River"], ms: ["Kubu", "Sejarah", "Seni Bina", "Sungai"] },
        shortDesc: { en: "A restored section of the historic Dutch defensive wall alongside the river.", ms: "Bahagian yang dipulihkan dari tembok pertahanan bersejarah Belanda di tepi sungai." },
        fullDesc: { en: "Discovered during the construction of a revolving tower, this bastion was reconstructed to show the immense scale of the fort that once protected Melaka. It sits beautifully by the Melaka River.", ms: "Ditemui semasa pembinaan menara berputar, kubu ini dibina semula untuk menunjukkan skala besar kubu yang pernah melindungi Melaka." },
        openingHours: { en: "24 Hours", ms: "24 Jam" }, bestTime: { en: "Afternoon", ms: "Petang" }, duration: { en: "30 mins", ms: "30 minit" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bastion_Middleburg_1.jpg/800px-Bastion_Middleburg_1.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "sri-poyyatha", categoryId: "historical", type: "indoor",
        name: { en: "Sri Poyyatha Vinayaga Moorthy Temple", ms: "Kuil Sri Poyyatha Vinayaga Moorthy" },
        area: "Jonker / Old Town", location: "Jalan Tukang Emas (Harmony Street)",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Solo", "Photography", "Culture"],
        tags: { en: ["Temple", "Religion", "Architecture", "History"], ms: ["Kuil", "Agama", "Seni Bina", "Sejarah"] },
        shortDesc: { en: "One of the oldest functioning Hindu temples in Malaysia.", ms: "Salah satu kuil Hindu tertua yang berfungsi di Malaysia." },
        fullDesc: { en: "Built in 1781, it is dedicated to Ganesha. The temple features a blend of architectural styles influenced by the Dutch colonial era, making it distinct from typical South Indian temples.", ms: "Dibina pada tahun 1781, ia didedikasikan kepada Ganesha. Kuil ini menampilkan gabungan gaya seni bina yang dipengaruhi oleh era kolonial Belanda." },
        openingHours: { en: "Morning to Evening", ms: "Pagi ke Petang" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "30 mins", ms: "30 minit" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sri_Poyatha_Moorthi_Temple.jpg/800px-Sri_Poyatha_Moorthi_Temple.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "st-peters-church", categoryId: "historical", type: "indoor",
        name: { en: "St. Peter's Church", ms: "Gereja St. Peter" },
        area: "City Centre", location: "Jalan Tun Sri Lanang",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Solo", "Architecture", "Culture"],
        tags: { en: ["Church", "Religion", "Architecture", "History"], ms: ["Gereja", "Agama", "Seni Bina", "Sejarah"] },
        shortDesc: { en: "The oldest functioning Roman Catholic church in Malaysia.", ms: "Gereja Roman Katolik tertua yang masih berfungsi di Malaysia." },
        fullDesc: { en: "Constructed in 1710, the church has a mix of Oriental and Occidental architectural styles. It remains a major center for the local Catholic and Kristang community.", ms: "Dibina pada 1710, gereja ini mempunyai gabungan gaya seni bina Oriental dan Occidental. Ia kekal sebagai pusat utama untuk komuniti Katolik dan Kristang tempatan." },
        openingHours: { en: "Check local times", ms: "Semak waktu tempatan" }, bestTime: { en: "Anytime", ms: "Bila-bila masa" }, duration: { en: "30 mins", ms: "30 minit" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/St._Peter's_Church_Melaka.jpg/800px-St._Peter's_Church_Melaka.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "bukit-cina", categoryId: "historical", type: "outdoor",
        name: { en: "Bukit Cina", ms: "Bukit Cina" },
        area: "City Centre", location: "Bukit Cina",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Solo", "Jogging", "History"],
        tags: { en: ["Hill", "History", "Jogging", "Views"], ms: ["Bukit", "Sejarah", "Berjoging", "Pemandangan"] },
        shortDesc: { en: "The largest and oldest traditional Chinese cemetery outside of China, now popular for jogging.", ms: "Perkuburan Cina tradisional terbesar dan tertua di luar China, kini popular untuk berjoging." },
        fullDesc: { en: "Dating back to the 15th century, the hill contains tens of thousands of graves. It has now transformed into a lush, peaceful area popular with locals for morning runs and enjoying panoramic views of Melaka.", ms: "Bukit ini mengandungi berpuluh-puluh ribu kubur sejak abad ke-15. Ia kini popular dalam kalangan penduduk tempatan untuk larian pagi dan menikmati pemandangan panorama Melaka." },
        openingHours: { en: "24 Hours", ms: "24 Jam" }, bestTime: { en: "Early Morning", ms: "Awal Pagi" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bukit_China_Melaka.JPG/800px-Bukit_China_Melaka.JPG", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },

    // --- MORE HERITAGE & MUSEUMS ---
    {
        id: "straits-chinese-jewellery", categoryId: "heritage", type: "indoor",
        name: { en: "Straits Chinese Jewellery Museum", ms: "Muzium Barang Kemas Peranakan Cina" },
        area: "Jonker / Old Town", location: "Jalan Tun Tan Cheng Lock",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "~RM20", ms: "~RM20" },
        suitableFor: ["Culture", "History", "Friends"],
        tags: { en: ["Museum", "Culture", "Jewellery", "Peranakan"], ms: ["Muzium", "Budaya", "Barang Kemas", "Peranakan"] },
        shortDesc: { en: "A beautifully restored house exhibiting traditional Peranakan jewellery.", ms: "Rumah yang dipulihkan dengan indah mempamerkan barang kemas tradisional Peranakan." },
        fullDesc: { en: "Learn about the intricate and wealthy lifestyle of the Straits Chinese. The museum displays stunning antique jewellery crafted with gold, diamonds, and precious stones, along with the furniture of the era.", ms: "Ketahui tentang gaya hidup Peranakan yang kaya. Muzium ini memaparkan barang kemas antik yang menakjubkan yang direka dengan emas, berlian, dan batu permata." },
        openingHours: { en: "10:00 AM - 5:00 PM", ms: "10:00 AM - 5:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "45 mins", ms: "45 minit" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "orang-asli-museum", categoryId: "heritage", type: "indoor",
        name: { en: "Aborigines Museum (Muzium Orang Asli)", ms: "Muzium Orang Asli" },
        area: "Ayer Keroh", location: "Ayer Keroh",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Cheap entry fee", ms: "Bayaran masuk murah" },
        suitableFor: ["Students", "History", "Family"],
        tags: { en: ["Museum", "Culture", "Educational"], ms: ["Muzium", "Budaya", "Pendidikan"] },
        shortDesc: { en: "A museum dedicated to the indigenous people (Orang Asli) of Malaysia.", ms: "Muzium khusus untuk orang asli di Malaysia." },
        fullDesc: { en: "Explore the fascinating cultures, traditions, and crafts of various Orang Asli tribes. The exhibits include hunting tools, traditional clothing, and beautifully crafted wooden carvings.", ms: "Terokai budaya, tradisi dan kraf pelbagai suku kaum Orang Asli yang menarik. Pameran termasuk alat memburu, pakaian tradisional, dan ukiran kayu." },
        openingHours: { en: "9:00 AM - 5:00 PM", ms: "9:00 AM - 5:00 PM" }, bestTime: { en: "Anytime", ms: "Bila-bila masa" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "melaka-islamic-museum", categoryId: "heritage", type: "indoor",
        name: { en: "Melaka Islamic Museum", ms: "Muzium Islam Melaka" },
        area: "Bandar Hilir", location: "Jalan Kota",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Students", "Culture", "Solo"],
        tags: { en: ["Museum", "Religion", "History", "Architecture"], ms: ["Muzium", "Agama", "Sejarah", "Seni Bina"] },
        shortDesc: { en: "Exhibits on the introduction and spread of Islam in the Malay Archipelago.", ms: "Pameran tentang pengenalan dan penyebaran Islam di Kepulauan Melayu." },
        fullDesc: { en: "Housed in the former State Islamic Council building, the museum details the profound impact of Islam on the region's culture, trade, and laws through artifacts, manuscripts, and architectural replicas.", ms: "Ditempatkan di bekas bangunan Majlis Agama Islam Negeri, muzium ini memperincikan kesan mendalam Islam terhadap budaya, perdagangan dan undang-undang serantau melalui artifak dan manuskrip." },
        openingHours: { en: "9:00 AM - 5:30 PM (Closed Mondays)", ms: "9:00 AM - 5:30 PM (Tutup Isnin)" }, bestTime: { en: "Afternoon", ms: "Petang" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Melaka_Islamic_Museum.jpg/800px-Melaka_Islamic_Museum.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    
    // --- MORE UNUSUAL MUSEUMS / INDOOR ---
    {
        id: "3d-art-museum", categoryId: "unusual_museums", type: "indoor",
        name: { en: "Magic Art 3D Museum", ms: "Muzium Seni 3D Magic Art" },
        area: "Ayer Keroh", location: "Bayou Lagoon Park Resort",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "MyKad ~RM20", ms: "MyKad ~RM20" },
        suitableFor: ["Friends", "Photography", "Family", "Fun"],
        tags: { en: ["Art", "Photography", "Indoor", "Illusion"], ms: ["Seni", "Fotografi", "Tertutup", "Ilusi"] },
        shortDesc: { en: "An interactive gallery filled with large-scale 3D murals.", ms: "Galeri interaktif yang dipenuhi dengan mural 3D berskala besar." },
        fullDesc: { en: "A fantastic indoor activity where visitors can take hilarious and surreal photos posing inside highly realistic 3D paintings. Great for a group of friends looking to update their social media.", ms: "Aktiviti dalaman yang hebat di mana pelawat boleh mengambil gambar posing yang realistik di dalam lukisan 3D. Bagus untuk sekumpulan rakan." },
        openingHours: { en: "9:00 AM - 7:00 PM", ms: "9:00 AM - 7:00 PM" }, bestTime: { en: "Anytime", ms: "Bila-bila masa" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "toy-museum", categoryId: "unusual_museums", type: "indoor",
        name: { en: "Toy Museum Melaka", ms: "Muzium Mainan Melaka" },
        area: "Bukit Baru", location: "Bukit Baru",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Friends", "Family", "Pop Culture"],
        tags: { en: ["Toys", "Pop Culture", "Museum", "Fun"], ms: ["Mainan", "Budaya Pop", "Muzium", "Keserokkan"] },
        shortDesc: { en: "A massive private collection of action figures, movie memorabilia, and toys.", ms: "Koleksi peribadi besar tokoh aksi, memorabilia filem dan mainan." },
        fullDesc: { en: "A nostalgic trip for adults and a wonderland for kids. The museum features thousands of pristine toys ranging from Star Wars and Marvel to classic anime figures.", ms: "Perjalanan nostalgia untuk orang dewasa dan kawasan ajaib untuk kanak-kanak. Muzium ini menampilkan beribu-ribu mainan daripada Star Wars dan Marvel kepada tokoh anime klasik." },
        openingHours: { en: "10:00 AM - 6:00 PM", ms: "10:00 AM - 6:00 PM" }, bestTime: { en: "Anytime", ms: "Bila-bila masa" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },

    // --- MORE NATURE, PARKS & BEACHES ---
    {
        id: "pengkalan-balak", categoryId: "beaches", type: "outdoor",
        name: { en: "Pengkalan Balak Beach", ms: "Pantai Pengkalan Balak" },
        area: "Alor Gajah", location: "Masjid Tanah",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Family", "Friends", "Foodies", "Relaxing"],
        tags: { en: ["Beach", "Swimming", "Food", "Sunset"], ms: ["Pantai", "Berenang", "Makanan", "Senja"] },
        shortDesc: { en: "A long, sandy beach popular for chalets, seafood, and swimming.", ms: "Pantai berpasir panjang yang popular dengan chalet, makanan laut dan renang." },
        fullDesc: { en: "One of the most popular beaches in Melaka, Pengkalan Balak offers a more traditional village vibe. It's famous for numerous seafood restaurants right on the beach, affordable chalets, and calm waters.", ms: "Salah satu pantai paling popular di Melaka, Pengkalan Balak menawarkan suasana kampung yang lebih tradisional. Ia terkenal dengan pelbagai restoran makanan laut betul-betul di pantai." },
        openingHours: { en: "24 Hours", ms: "24 Jam" }, bestTime: { en: "Late Afternoon to Dinner", ms: "Lewat Petang ke Makan Malam" }, duration: { en: "2-4 hours", ms: "2-4 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "tanjung-tuan", categoryId: "nature", type: "outdoor",
        name: { en: "Tanjung Tuan Recreational Forest", ms: "Hutan Rekreasi Tanjung Tuan" },
        area: "Alor Gajah", location: "Cape Rachado",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "RM1 entrance fee", ms: "Bayaran masuk RM1" },
        suitableFor: ["Exercise", "Friends", "Photography", "Nature lovers"],
        tags: { en: ["Forest", "Hiking", "Lighthouse", "Beach"], ms: ["Hutan", "Mendaki", "Rumah Api", "Pantai"] },
        shortDesc: { en: "A coastal forest reserve featuring hiking trails, hidden beaches, and a historic lighthouse.", ms: "Hutan simpan pesisir yang menampilkan denai mendaki, pantai tersembunyi dan rumah api bersejarah." },
        fullDesc: { en: "Located at Cape Rachado, this is a fantastic spot for light hiking. The trails lead you up to the historic 16th-century lighthouse, or down to secluded, beautiful beaches. It is also a major bird-watching hotspot during raptor migration seasons.", ms: "Terletak di Cape Rachado, ini adalah tempat yang hebat untuk mendaki ringan. Denai membawa anda ke rumah api bersejarah, atau turun ke pantai terpencil yang indah." },
        openingHours: { en: "7:00 AM - 6:00 PM", ms: "7:00 AM - 6:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "3-4 hours", ms: "3-4 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Cape_Rachado_Lighthouse.jpg/800px-Cape_Rachado_Lighthouse.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "asahan-waterfalls", categoryId: "nature", type: "outdoor",
        name: { en: "Asahan Waterfalls", ms: "Air Terjun Asahan" },
        area: "Jasin", location: "Gunung Ledang area",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Minor parking/entry fee", ms: "Bayaran masuk/parkir kecil" },
        suitableFor: ["Friends", "Family", "Adventure"],
        tags: { en: ["Waterfall", "Swimming", "Camping", "Nature"], ms: ["Air Terjun", "Berenang", "Perkhemahan", "Alam Semulajadi"] },
        shortDesc: { en: "A refreshing cascade located at the foothills of Gunung Ledang.", ms: "Air terjun yang menyegarkan terletak di kaki Gunung Ledang." },
        fullDesc: { en: "A great spot to cool down and swim in natural river water. The area is equipped with camping sites, basic facilities, and is an excellent day trip into nature for groups of friends.", ms: "Tempat yang sesuai untuk menyejukkan badan dan berenang di air sungai semula jadi. Kawasan ini dilengkapi dengan tapak perkhemahan dan kemudahan asas." },
        openingHours: { en: "8:00 AM - 6:00 PM", ms: "8:00 AM - 6:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "3-4 hours", ms: "3-4 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },

    // --- MORE ZOO / ANIMALS ---
    {
        id: "turtle-centre", categoryId: "animal_wildlife", type: "indoor",
        name: { en: "Padang Kemunting Turtle Management Centre", ms: "Pusat Konservasi Penyu Padang Kemunting" },
        area: "Alor Gajah", location: "Pantai Padang Kemunting",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "Donations welcomed", ms: "Sumbangan dialu-alukan" },
        suitableFor: ["Family", "Nature lovers", "Students"],
        tags: { en: ["Animals", "Conservation", "Educational", "Beach"], ms: ["Haiwan", "Pemuliharaan", "Pendidikan", "Pantai"] },
        shortDesc: { en: "A hawksbill turtle hatchery and conservation centre.", ms: "Pusat penetasan dan pemuliharaan penyu karah." },
        fullDesc: { en: "Dedicated to protecting the endangered Hawksbill turtles that land on Melaka's shores. Visitors can see the hatcheries, learn about the turtle life cycle, and sometimes see baby turtles in the holding pools before they are released.", ms: "Berdedikasi untuk melindungi penyu Karah terancam yang mendarat di pantai Melaka. Pelawat boleh melihat tempat penetasan, belajar tentang kitaran hidup penyu, dan kadangkala melihat anak penyu." },
        openingHours: { en: "9:00 AM - 4:00 PM (Closed Mon/Tue)", ms: "9:00 AM - 4:00 PM (Tutup Isn/Sel)" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "45 mins", ms: "45 minit" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },

    // --- MORE INDOOR / ENTERTAINMENT ---
    {
        id: "bayou-lagoon", categoryId: "amusement", type: "outdoor",
        name: { en: "Bayou Lagoon Water Park", ms: "Taman Air Bayou Lagoon" },
        area: "Ayer Keroh", location: "Bukit Katil",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Affordable entry", ms: "Kemasukan berpatutan" },
        suitableFor: ["Friends", "Family", "Students"],
        tags: { en: ["Water Park", "Swimming", "Fun"], ms: ["Taman Tema Air", "Berenang", "Keserokkan"] },
        shortDesc: { en: "A family-friendly resort water park featuring slides and splash pools.", ms: "Taman air mesra keluarga yang menampilkan gelongsor dan kolam." },
        fullDesc: { en: "While smaller than A'Famosa, Bayou Lagoon is much closer to the city center and UTeM. It offers a fun, affordable afternoon of swimming and water slides.", ms: "Walaupun lebih kecil daripada A'Famosa, Bayou Lagoon lebih dekat dengan pusat bandar dan UTeM. Ia menawarkan petang yang menyeronokkan dan berpatutan." },
        openingHours: { en: "9:00 AM - 7:00 PM", ms: "9:00 AM - 7:00 PM" }, bestTime: { en: "Morning or Late Afternoon", ms: "Pagi atau Lewat Petang" }, duration: { en: "3 hours", ms: "3 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: "https://www.bayoulagoon.com.my/"
    },
    {
        id: "tgv-aeon", categoryId: "indoor_activities", type: "indoor",
        name: { en: "TGV Cinemas AEON Bandaraya Melaka", ms: "TGV Cinemas AEON Bandaraya Melaka" },
        area: "City Centre", location: "AEON Bandaraya Melaka",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Student discounts available", ms: "Diskaun pelajar ada" },
        suitableFor: ["Friends", "Couples", "Night out", "Rainy day"],
        tags: { en: ["Cinema", "Movies", "Entertainment", "Indoor"], ms: ["Pawagam", "Wayang", "Hiburan", "Tertutup"] },
        shortDesc: { en: "A modern cinema equipped with IMAX halls inside a major shopping mall.", ms: "Pawagam moden yang dilengkapi dewan IMAX di dalam pusat beli-belah utama." },
        fullDesc: { en: "A premium movie-going experience featuring IMAX and comfortable seating. Located conveniently in one of Melaka's most popular malls, making it easy to combine with shopping and dining.", ms: "Pengalaman menonton wayang premium yang menampilkan IMAX dan tempat duduk yang selesa. Terletak di salah sebuah pusat beli-belah yang paling popular di Melaka." },
        openingHours: { en: "10:00 AM - Midnight", ms: "10:00 AM - Tengah Malam" }, bestTime: { en: "Anytime", ms: "Bila-bila masa" }, duration: { en: "2-3 hours", ms: "2-3 jam" }, bookingRequired: true,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "karaoke-superstar", categoryId: "indoor_activities", type: "indoor",
        name: { en: "Superstar Family KTV", ms: "Superstar Family KTV" },
        area: "Melaka Raya", location: "Melaka Raya",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Hourly or Package", ms: "Jam atau Pakej" },
        suitableFor: ["Friends", "Groups", "Night out", "Rainy day"],
        tags: { en: ["Karaoke", "Music", "Indoor", "Night", "Fun"], ms: ["Karaoke", "Muzik", "Tertutup", "Malam", "Keserokkan"] },
        shortDesc: { en: "A modern, student-friendly karaoke center with comfortable private rooms.", ms: "Pusat karaoke moden dan mesra pelajar dengan bilik peribadi yang selesa." },
        fullDesc: { en: "A great place for groups of friends to sing their hearts out. It offers excellent sound systems, food and drink packages, and very affordable student rates during the daytime.", ms: "Tempat yang sesuai untuk rakan-rakan menyanyi. Ia menawarkan sistem bunyi yang sangat baik, pakej makanan dan minuman, dan kadar pelajar yang sangat berpatutan pada waktu siang." },
        openingHours: { en: "11:00 AM - 3:00 AM", ms: "11:00 AM - 3:00 AM" }, bestTime: { en: "Night", ms: "Malam" }, duration: { en: "2-3 hours", ms: "2-3 jam" }, bookingRequired: true,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "encore-melaka", categoryId: "night_activities", type: "indoor",
        name: { en: "Encore Melaka", ms: "Encore Melaka" },
        area: "Kota Laksamana", location: "Impression City",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Premium ticket price", ms: "Harga tiket premium" },
        suitableFor: ["Family", "Couples", "Culture"],
        tags: { en: ["Theatre", "Shows", "Culture", "Indoor", "Night"], ms: ["Teater", "Pertunjukan", "Budaya", "Tertutup", "Malam"] },
        shortDesc: { en: "A world-class immersive theatrical performance housed in a stunning 360-degree rotating auditorium.", ms: "Persembahan teater mendalam bertaraf dunia yang ditempatkan di auditorium berputar 360 darjah." },
        fullDesc: { en: "An awe-inspiring cultural performance that tells the history of Melaka through dance, music, and incredible stage effects. The architecture of the building itself is a masterpiece and a popular photo spot.", ms: "Persembahan kebudayaan yang mengagumkan menceritakan sejarah Melaka melalui tarian, muzik dan kesan pentas yang luar biasa. Seni bina bangunan itu sendiri merupakan karya agung." },
        openingHours: { en: "Evening Shows", ms: "Pertunjukan Petang" }, bestTime: { en: "Evening", ms: "Petang/Malam" }, duration: { en: "2 hours", ms: "2 jam" }, bookingRequired: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Encore_Melaka_building.jpg/800px-Encore_Melaka_building.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: "https://encore-melaka.com/"
    },
    {
        id: "freeport-afamosa", categoryId: "different_unusual", type: "outdoor",
        name: { en: "Freeport A'Famosa Outlet", ms: "Freeport A'Famosa Outlet" },
        area: "Alor Gajah", location: "Alor Gajah",
        priceLevel: { en: "Free to visit", ms: "Percuma (Melawat)" }, priceNotes: { en: "Shopping costs vary", ms: "Kos membeli-belah berbeza" },
        suitableFor: ["Friends", "Family", "Shopping"],
        tags: { en: ["Shopping", "Food", "Photography", "Walking"], ms: ["Membeli-belah", "Makanan", "Fotografi", "Berjalan"] },
        shortDesc: { en: "A massive open-air outlet shopping village with Dutch heritage-inspired architecture.", ms: "Sebuah kampung beli-belah terbuka yang besar dengan seni bina berinspirasikan warisan Belanda." },
        fullDesc: { en: "Features over 80 fashion, sports, and lifestyle brands at discounted prices. The beautiful open-air layout with fountains, windmills, and a lake makes it a relaxing place to walk around even if you aren't shopping.", ms: "Menampilkan lebih 80 jenama fesyen dan gaya hidup pada harga diskaun. Susun atur terbuka yang cantik dengan air pancut, kincir angin dan tasik menjadikannya tempat yang santai untuk bersiar-siar." },
        openingHours: { en: "10:00 AM - 10:00 PM", ms: "10:00 AM - 10:00 PM" }, bestTime: { en: "Late Afternoon", ms: "Lewat Petang" }, duration: { en: "2-3 hours", ms: "2-3 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
// --- MORE MUSEUMS & HERITAGE ---
    {
        id: "ethnographic-museum", categoryId: "heritage", type: "indoor",
        name: { en: "History and Ethnography Museum", ms: "Muzium Sejarah dan Etnografi" },
        area: "Bandar Hilir", location: "Inside the Stadthuys",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Included in Stadthuys ticket", ms: "Termasuk tiket Stadthuys" },
        suitableFor: ["Students", "History", "Solo"],
        tags: { en: ["Museum", "History", "Culture", "Educational"], ms: ["Muzium", "Sejarah", "Budaya", "Pendidikan"] },
        shortDesc: { en: "The premier museum detailing the history of Melaka from its founding.", ms: "Muzium utama yang memperincikan sejarah Melaka sejak diasaskan." },
        fullDesc: { en: "Housed inside the iconic Stadthuys building, this museum provides a comprehensive timeline of Melaka's history, starting from the Melaka Sultanate through the Portuguese, Dutch, and British colonial periods.", ms: "Ditempatkan di dalam bangunan Stadthuys, muzium ini menyediakan garis masa komprehensif sejarah Melaka, bermula dari Kesultanan Melaka hingga penjajahan." },
        openingHours: { en: "9:00 AM - 5:00 PM", ms: "9:00 AM - 5:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "hang-tuah-centre", categoryId: "heritage", type: "indoor",
        name: { en: "Hang Tuah Centre", ms: "Pusat Hang Tuah" },
        area: "Duyong", location: "Kampung Duyong",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Cheap entry fee", ms: "Bayaran masuk murah" },
        suitableFor: ["Students", "History", "Family"],
        tags: { en: ["Museum", "History", "Culture"], ms: ["Muzium", "Sejarah", "Budaya"] },
        shortDesc: { en: "A cultural centre dedicated to the legendary Malay warrior Hang Tuah.", ms: "Pusat kebudayaan khusus untuk pahlawan Melayu legenda Hang Tuah." },
        fullDesc: { en: "Explore a complex of traditional Malay houses depicting the life and times of Hang Tuah and his four companions. It offers a deep dive into Malay martial arts (silat) and historical folklore.", ms: "Terokai kompleks rumah tradisional Melayu yang menggambarkan kehidupan Hang Tuah dan empat sahabatnya. Menawarkan penyelaman mendalam tentang seni mempertahankan diri (silat)." },
        openingHours: { en: "9:00 AM - 5:00 PM", ms: "9:00 AM - 5:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hang_Tuah_Center.jpg/800px-Hang_Tuah_Center.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "heritage-studios", categoryId: "heritage", type: "outdoor",
        name: { en: "Malaysia Heritage Studios (Mini Malaysia)", ms: "Malaysia Heritage Studios (Mini Malaysia)" },
        area: "Ayer Keroh", location: "Lebuh Ayer Keroh",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "MyKad rates available", ms: "Kadar MyKad" },
        suitableFor: ["Family", "Students", "Photography", "Culture"],
        tags: { en: ["Park", "Culture", "Architecture", "Educational"], ms: ["Taman", "Budaya", "Seni Bina", "Pendidikan"] },
        shortDesc: { en: "A cultural park featuring life-sized replicas of traditional houses from all 13 states.", ms: "Taman kebudayaan yang menampilkan replika saiz sebenar rumah tradisional dari semua 13 negeri." },
        fullDesc: { en: "Formerly known as Mini Malaysia, it has been upgraded to Malaysia Heritage Studios. Explore beautifully crafted traditional wooden houses representing the unique architecture of every state in Malaysia. Great for photos and cultural education.", ms: "Dahulunya dikenali sebagai Mini Malaysia, ia telah dinaik taraf. Terokai rumah kayu tradisional yang direka dengan cantik mewakili seni bina unik setiap negeri di Malaysia." },
        openingHours: { en: "9:00 AM - 6:00 PM", ms: "9:00 AM - 6:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "2 hours", ms: "2 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },

    // --- MORE INDOOR / ENTERTAINMENT / STUDENTS ---
    {
        id: "mbo-elements", categoryId: "indoor_activities", type: "indoor",
        name: { en: "MBO Cinemas Elements Mall", ms: "MBO Cinemas Elements Mall" },
        area: "Melaka Raya", location: "Elements Mall Melaka",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Student discounts available", ms: "Diskaun pelajar ada" },
        suitableFor: ["Friends", "Couples", "Night out", "Rainy day"],
        tags: { en: ["Cinema", "Movies", "Entertainment", "Indoor"], ms: ["Pawagam", "Wayang", "Hiburan", "Tertutup"] },
        shortDesc: { en: "A modern cinema offering specialized halls including family and big screen options.", ms: "Pawagam moden yang menawarkan dewan khusus termasuk pilihan keluarga dan skrin besar." },
        fullDesc: { en: "Another excellent option for students looking to watch movies. It's usually less crowded than Dataran Pahlawan and offers highly comfortable seating and unique cinema concepts.", ms: "Pilihan terbaik untuk pelajar yang ingin menonton filem. Selalunya kurang sesak dan menawarkan tempat duduk yang sangat selesa dan konsep pawagam yang unik." },
        openingHours: { en: "10:00 AM - Midnight", ms: "10:00 AM - Tengah Malam" }, bestTime: { en: "Anytime", ms: "Bila-bila masa" }, duration: { en: "2-3 hours", ms: "2-3 jam" }, bookingRequired: true,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "atv-extreme-park", categoryId: "outdoor_adventure", type: "outdoor",
        name: { en: "Melaka ATV Extreme Park", ms: "Melaka ATV Extreme Park" },
        area: "Ayer Keroh", location: "Hutan Rekreasi Ayer Keroh",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Per session", ms: "Kadar setiap sesi" },
        suitableFor: ["Friends", "Adrenaline seekers", "Groups"],
        tags: { en: ["ATV", "Adventure", "Sports", "Nature"], ms: ["ATV", "Pengembaraan", "Sukan", "Alam Semulajadi"] },
        shortDesc: { en: "An exciting off-road ATV riding experience through the forest.", ms: "Pengalaman menunggang ATV off-road yang menarik melalui hutan." },
        fullDesc: { en: "Get your adrenaline pumping by navigating rough, muddy, and uneven jungle tracks on an ATV. Briefings and safety gear are provided. A fantastic group activity for university students.", ms: "Tingkatkan adrenalin anda dengan mengemudi trek hutan yang kasar, berlumpur dan tidak rata di atas ATV. Taklimat dan peralatan keselamatan disediakan." },
        openingHours: { en: "9:00 AM - 6:00 PM", ms: "9:00 AM - 6:00 PM" }, bestTime: { en: "Morning", ms: "Pagi" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: true,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "mamee-jonker", categoryId: "unusual_museums", type: "indoor",
        name: { en: "Mamee Jonker House", ms: "Mamee Jonker House" },
        area: "Jonker / Old Town", location: "Jalan Hang Jebat",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "Workshops are paid", ms: "Bengkel berbayar" },
        suitableFor: ["Friends", "Family", "Foodies"],
        tags: { en: ["Food", "Fun", "Workshop", "Indoor"], ms: ["Makanan", "Keserokkan", "Bengkel", "Tertutup"] },
        shortDesc: { en: "A concept store dedicated to Malaysia's famous Mamee Monster snack.", ms: "Kedai konsep yang didedikasikan untuk snek Mamee Monster yang terkenal di Malaysia." },
        fullDesc: { en: "Not just a shop, but an experience! You can join a noodle-making workshop, customize your own Mamee Monster cup, and buy exclusive merchandise. Great fun for all ages.", ms: "Bukan sekadar kedai, tetapi satu pengalaman! Anda boleh menyertai bengkel membuat mi, menyesuaikan cawan Mamee Monster anda sendiri dan membeli barangan eksklusif." },
        openingHours: { en: "10:00 AM - 5:00 PM (Closed Tuesdays)", ms: "10:00 AM - 5:00 PM (Tutup Selasa)" }, bestTime: { en: "Afternoon", ms: "Petang" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: "https://mameejonkerhouse.com/"
    },
    {
        id: "shore-oceanarium", categoryId: "zoo_animals", type: "indoor",
        name: { en: "The Shore Oceanarium", ms: "The Shore Oceanarium" },
        area: "City Centre", location: "The Shore Shopping Gallery",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "MyKad rates available", ms: "Kadar MyKad" },
        suitableFor: ["Family", "Students", "Rainy day"],
        tags: { en: ["Aquarium", "Animals", "Educational", "Indoor"], ms: ["Akuarium", "Haiwan", "Pendidikan", "Tertutup"] },
        shortDesc: { en: "An interactive indoor aquarium featuring marine life and touch pools.", ms: "Akuarium dalaman interaktif yang menampilkan hidupan marin dan kolam sentuhan." },
        fullDesc: { en: "Conveniently located inside a mall, this oceanarium offers interactive touch pools, a 3D theater, and various marine exhibits. A great indoor alternative to outdoor animal parks.", ms: "Terletak dengan mudah di dalam pusat beli-belah, oseanarium ini menawarkan kolam sentuhan, teater 3D dan pelbagai pameran marin. Pilihan dalaman yang hebat." },
        openingHours: { en: "10:30 AM - 7:00 PM", ms: "10:30 AM - 7:00 PM" }, bestTime: { en: "Afternoon", ms: "Petang" }, duration: { en: "1-2 hours", ms: "1-2 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "dataran-pahlawan", categoryId: "indoor_activities", type: "indoor",
        name: { en: "Dataran Pahlawan Megamall", ms: "Dataran Pahlawan Megamall" },
        area: "Bandar Hilir", location: "Jalan Merdeka",
        priceLevel: { en: "Free to visit", ms: "Percuma (Melawat)" }, priceNotes: { en: "Shopping costs vary", ms: "Kos membeli-belah berbeza" },
        suitableFor: ["Friends", "Shopping", "Foodies", "Rainy day"],
        tags: { en: ["Shopping", "Food", "Entertainment", "Indoor"], ms: ["Membeli-belah", "Makanan", "Hiburan", "Tertutup"] },
        shortDesc: { en: "The largest shopping mall in Melaka's historic district.", ms: "Pusat beli-belah terbesar di daerah bersejarah Melaka." },
        fullDesc: { en: "A massive multi-level mall offering everything from international fashion brands to local boutiques, a huge variety of restaurants, and entertainment options like a cinema and arcades.", ms: "Pusat beli-belah berbilang tingkat yang besar yang menawarkan segala-galanya daripada jenama fesyen antarabangsa kepada butik tempatan, restoran, dan hiburan." },
        openingHours: { en: "10:00 AM - 10:00 PM", ms: "10:00 AM - 10:00 PM" }, bestTime: { en: "Afternoon", ms: "Petang" }, duration: { en: "2-4 hours", ms: "2-4 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },

    // --- MORE NIGHT & UNUSUAL ---
    {
        id: "shore-sky-tower", categoryId: "different_unusual", type: "outdoor",
        name: { en: "The Shore Sky Tower", ms: "The Shore Sky Tower" },
        area: "City Centre", location: "The Shore",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "~RM25", ms: "~RM25" },
        suitableFor: ["Couples", "Photography", "Friends", "Night out"],
        tags: { en: ["Views", "Photography", "Landmark", "Night"], ms: ["Pemandangan", "Fotografi", "Mercu Tanda", "Malam"] },
        shortDesc: { en: "The tallest man-made structure in Melaka offering 360-degree panoramic views.", ms: "Struktur buatan manusia tertinggi di Melaka yang menawarkan pemandangan panorama 360 darjah." },
        fullDesc: { en: "Take an elevator to the 43rd floor to walk on a glass-bottom ledge and enjoy stunning, unobstructed views of the entire Melaka city, the coastline, and beyond. Especially beautiful at sunset and night.", ms: "Naik lif ke tingkat 43 untuk berjalan di atas langkan bahagian bawah kaca dan nikmati pemandangan menakjubkan seluruh bandar Melaka. Sangat cantik pada waktu matahari terbenam." },
        openingHours: { en: "10:00 AM - 10:00 PM", ms: "10:00 AM - 10:00 PM" }, bestTime: { en: "Sunset / Night", ms: "Senja / Malam" }, duration: { en: "1 hour", ms: "1 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    },
    {
        id: "menara-taming-sari", categoryId: "different_unusual", type: "outdoor",
        name: { en: "Menara Taming Sari", ms: "Menara Taming Sari" },
        area: "Bandar Hilir", location: "Bandar Hilir",
        priceLevel: { en: "Paid (RM)", ms: "Berbayar (RM)" }, priceNotes: { en: "MyKad rates available", ms: "Kadar MyKad" },
        suitableFor: ["Family", "Friends", "Sightseeing"],
        tags: { en: ["Views", "Sightseeing", "Landmark"], ms: ["Pemandangan", "Melancong", "Mercu Tanda"] },
        shortDesc: { en: "Malaysia's first and only gyro tower, offering a revolving panoramic view.", ms: "Menara giro pertama dan satu-satunya di Malaysia, menawarkan pemandangan berputar." },
        fullDesc: { en: "Step into the air-conditioned cabin and slowly rise 80 meters into the air. The cabin rotates 360 degrees, giving you a comprehensive bird's-eye view of Melaka's historic district and the sea.", ms: "Melangkah ke kabin berhawa dingin dan naik 80 meter ke udara. Kabin berputar 360 darjah, memberikan pandangan mata burung." },
        openingHours: { en: "10:00 AM - 11:00 PM", ms: "10:00 AM - 11:00 PM" }, bestTime: { en: "Late Afternoon / Night", ms: "Lewat Petang / Malam" }, duration: { en: "30 mins", ms: "30 minit" }, bookingRequired: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Menara_Taming_Sari.jpg/800px-Menara_Taming_Sari.jpg", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: "https://menaratamingsari.com/"
    },
    {
        id: "pantai-siring", categoryId: "beaches", type: "outdoor",
        name: { en: "Pantai Siring", ms: "Pantai Siring" },
        area: "Merlimau", location: "Serkam",
        priceLevel: { en: "Free", ms: "Percuma" }, priceNotes: { en: "", ms: "" },
        suitableFor: ["Relaxing", "Foodies", "Family"],
        tags: { en: ["Beach", "Sunset", "Food", "Relaxing"], ms: ["Pantai", "Matahari Terbenam", "Makanan", "Beresantai"] },
        shortDesc: { en: "A peaceful coastal area famous for its beautiful sunsets and seafood.", ms: "Kawasan pantai yang damai terkenal dengan matahari terbenam yang indah dan makanan laut." },
        fullDesc: { en: "Located in the Jasin district (Merlimau area), Pantai Siring is much less commercialized. It is an excellent place to sit back, relax, watch the fishermen, and eat cheap and fresh seafood like ikan bakar.", ms: "Terletak di daerah Jasin (kawasan Merlimau), Pantai Siring kurang dikomersialkan. Tempat yang sangat baik untuk berehat dan makan makanan laut segar yang murah." },
        openingHours: { en: "24 Hours", ms: "24 Jam" }, bestTime: { en: "Late Afternoon / Dinner", ms: "Lewat Petang / Makan Malam" }, duration: { en: "2 hours", ms: "2 jam" }, bookingRequired: false,
        image: "", mapUrl: "https://maps.app.goo.gl/dummy", websiteUrl: ""
    }
];


if (typeof window !== "undefined") {
    window.activitiesData = activitiesData;
}










