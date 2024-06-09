import heroImage1 from '../assets/images/Fortuner1.png';
import heroImage2 from '../assets/images/Fortuner2.png';
import heroImage3 from '../assets/images/Fortuner3.png';


const carData = [
    {
        id: 1,
        name: "Toyota Calya 2024",
        price: "Rp. 172.860.000 - Rp. 191.600.000",
        images: [
            heroImage1,
            heroImage2,
            heroImage3,
        ],
        description: "Toyota Calya adalah MPV (Multi-Purpose Vehicle) kompak yang dikenal dengan kapasitas penumpang yang cukup dan efisiensi bahan bakar yang baik. Model 2024 dari Toyota Calya mungkin akan memiliki beberapa pembaruan dan peningkatan dibandingkan model sebelumnya.",
        specifications: {
            colorOptions: ["#FF0000", "#00FF00", "#0000FF"],
            engine: "Mesin bensin berkapasitas 1.2L",
            transmission: "Manual 5-percepatan atau otomatis 4-percepatan",
            fuelType: "Bensin",
            seatingCapacity: "7 kursi",
        },
    },
    // Tambahkan data mobil lain di sini
];

export default carData;
