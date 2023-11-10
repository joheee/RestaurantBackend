var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        const owner = yield prisma.owner.create({
            data: {
                username: 'owner',
                password: '$2y$10$W4iQkSsSpEtZKXao8UM0T.6TuM9potlE7Q8YCnZzFXEqXEaSczkwi'
            }
        });
        const kasir = yield prisma.kasir.createMany({
            data: [
                {
                    username: 'salwa@gmail.com',
                    password: '$2y$10$xY0WS5R/5VmQ1zJbFzrgTOlXEE2aKIkSCEsGc.z/wNvkuy2ZJ9VHu',
                    nama: 'salwa amalia'
                },
                {
                    username: 'salwaamel42@gmail.com',
                    password: '$2y$10$h493rFXD5EVOyMw2ypI80u9w8XZLPDuhvQsHT889jrsULWIof6qQy',
                    nama: 'salwa amalia irawati putri',
                },
            ]
        });
        const kategori = yield prisma.kategori.createMany({
            data: [
                {
                    nama: 'Coffee'
                },
                {
                    nama: 'Non Coffee'
                },
                {
                    nama: 'Ricebowl'
                },
                {
                    nama: 'Dessert'
                }
            ]
        });
        const menu = yield prisma.menu.createMany({
            data: [
                {
                    id_kategori: 3,
                    nama: 'chicken katsu',
                    harga: 15000,
                    gambar: '64377b47855ae.webp',
                    jenis: 'Makanan',
                },
                {
                    id_kategori: 1,
                    nama: 'Espresso',
                    harga: 20000,
                    gambar: '64379933aef4f.jpg',
                    jenis: 'Minuman',
                },
            ],
        });
        const pesanan = yield prisma.pesanan.createMany({
            data: [
                {
                    username_kasir: 'salwaamel42@gmail.com',
                    id_menu: 1,
                    jenis_minuman: null,
                    harga: 15000,
                    jumlah: 2,
                    jenis_pembayaran: 'Tunai',
                    status: 'Sukses',
                    nama: null,
                    kode_pesanan: '112SALWAAMEL42@GMAIL.COM130423135652',
                    waktu_pesan: '13 April 2023 13:56',
                    bayar: 100000,
                    tanggal: new Date('2023-04-13'),
                },
                {
                    username_kasir: 'salwaamel42@gmail.com',
                    id_menu: 2,
                    jenis_minuman: 'Dingin',
                    harga: 20000,
                    jumlah: 1,
                    jenis_pembayaran: 'Tunai',
                    status: 'Sukses',
                    nama: null,
                    kode_pesanan: '112SALWAAMEL42@GMAIL.COM130423135652',
                    waktu_pesan: '13 April 2023 13:56',
                    bayar: 100000,
                    tanggal: new Date('2023-04-13'),
                },
            ],
        });
        console.log({
            owner,
            kasir,
            kategori,
            menu,
            pesanan
        });
    });
}
seed()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
