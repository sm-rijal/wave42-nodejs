const toko = {
    nama: "",
    alamat: "",
    product: [
        {
            namaProduk: "",
            harga: ""
        },
        {
            namaProduk: "",
            harga: ""
        },
        {
            namaProduk: "",
            harga: ""
        },
    ]
}

// detail product
// akan menampilkan isi dari productnya
const product = {
    namaProduk: "",
    harga: "",
    toko: {
        nama: "",
        alamat: "",
    }
}


// buat table user sama profile -> relasi antar table one to one
// const user = {
//     id: "",
//     nama: "",
//     email: "",
//     password: ""
// }

const profile = {
    id: "",
    alamat: "",
    hobi: "",
    idUser: ''
}

// response data, tampilkan user dan profile berdasarkan relasi one to one
const user = {
    id: "",
    nama: "",
    email: "",
    password: "",
        profile: [
            {
                id: "",
                alamat: "",
                hobi: ""
            },
    ]
}



// user 
// id  nama  
// 1   asep
// 2   irfan

// {
//     "alamat": "Bandung",
//     "hobi": "olahraga",
//     "idUser": "2"
// }
// {
//     "alamat": "Jakarta",
//     "hobi": "Beranang",
//     "idUser": "2"
// }
