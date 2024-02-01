'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funSeederSosialEkonomi() {
    const area = await prisma.areaKecamatan.findMany({
        select: {
            id: true,
            AreaKabkot: {
                select: {
                    id: true,
                    AreaProvinsi: {
                        select: {
                            id: true,
                        }
                    }
                }
            }
        },
        orderBy: {
            id: 'asc'
        }
    })

    const data = area.map((v: any) => ({
        ..._.omit(v, ["id", "AreaKabkot", "AreaProvinsi"]),
        idKecamatan: v.id,
        idKabkot: v.AreaKabkot.id,
        idProvinsi: v.AreaKabkot.AreaProvinsi.id,
    }));



    // KETENAGAKERJAAN - JAMINAN KESEHATAN
    const cek1 = await prisma.sE_Ketenagakerjaan_JaminanKesehatan.count()
    if (cek1 == 0) {
        const ins = await prisma.sE_Ketenagakerjaan_JaminanKesehatan.createMany({
            data: data
        })
    }

    // KETENAGAKERJAAN - JAMINAN KECELAKAAN KERJA
    const cek2 = await prisma.sE_Ketenagakerjaan_JaminanKecelakaanKerja.count()
    if (cek2 == 0) {
        const ins = await prisma.sE_Ketenagakerjaan_JaminanKecelakaanKerja.createMany({
            data: data
        })
    }

    // KETENAGAKERJAAN - JAMINAN KEMATIAN
    const cek3 = await prisma.sE_Ketenagakerjaan_JaminanKematian.count()
    if (cek3 == 0) {
        const ins = await prisma.sE_Ketenagakerjaan_JaminanKematian.createMany({
            data: data
        })
    }

    // KETENAGAKERJAAN - JAMINAN HARI TUA
    const cek4 = await prisma.sE_Ketenagakerjaan_JaminanHariTua.count()
    if (cek4 == 0) {
        const ins = await prisma.sE_Ketenagakerjaan_JaminanHariTua.createMany({
            data: data
        })
    }

    // KETENAGAKERJAAN - JAMINAN PENSIUN
    const cek5 = await prisma.sE_Ketenagakerjaan_JaminanPensiun.count()
    if (cek5 == 0) {
        const ins = await prisma.sE_Ketenagakerjaan_JaminanPensiun.createMany({
            data: data
        })
    }

    // KETENAGAKERJAAN - PENGANGGURAN
    const cek6 = await prisma.sE_Ketenagakerjaan_Pengangguran.count()
    if (cek6 == 0) {
        const ins = await prisma.sE_Ketenagakerjaan_Pengangguran.createMany({
            data: data
        })
    }

    // TRANSPORTASI - PERMUKAAN JALAN YG TERLUAS
    const cek7 = await prisma.sE_Transportasi_PermukaanJalanYgTerluas.count()
    if (cek7 == 0) {
        const ins = await prisma.sE_Transportasi_PermukaanJalanYgTerluas.createMany({
            data: data
        })
    }

    // TRANSPORTASI - JALAN DILALUI KENDARAAN
    const cek8 = await prisma.sE_Transportasi_JalanDiLaluiKendaraan.count()
    if (cek8 == 0) {
        const ins = await prisma.sE_Transportasi_JalanDiLaluiKendaraan.createMany({
            data: data
        })
    }

    // TRANSPORTASI - KECELAKAAN
    const cek9 = await prisma.sE_Transportasi_Kecelakaan.count()
    if (cek9 == 0) {
        const ins = await prisma.sE_Transportasi_Kecelakaan.createMany({
            data: data
        })
    }

    // AGAMA - RUMAH IBADAH
    const cek10 = await prisma.sE_Agama_RumahIbadah.count()
    if (cek10 == 0) {
        const ins = await prisma.sE_Agama_RumahIbadah.createMany({
            data: data
        })
    }

    // PENDIDIKAN - JARAK FASILITAS
    const cek11 = await prisma.sE_Pendidikan_JarakFasilitas.count()
    if (cek11 == 0) {
        const ins = await prisma.sE_Pendidikan_JarakFasilitas.createMany({
            data: data
        })
    }

    // PENDIDIKAN - JALAN KAKI < 4 JAM 
    const cek12 = await prisma.sE_Pendidikan_JalanKakiKurangEmpatJam.count()
    if (cek12 == 0) {
        const ins = await prisma.sE_Pendidikan_JalanKakiKurangEmpatJam.createMany({
            data: data
        })
    }

    // PENDIDIKAN - GURU TERSERTIFIKASI
    const cek13 = await prisma.sE_Pendidikan_GuruTersertifikasi.count()
    if (cek13 == 0) {
        const ins = await prisma.sE_Pendidikan_GuruTersertifikasi.createMany({
            data: data
        })
    }

    // PENDIDIKAN - GURU HONORER
    const cek14 = await prisma.sE_Pendidikan_GuruHonorer.count()
    if (cek14 == 0) {
        const ins = await prisma.sE_Pendidikan_GuruHonorer.createMany({
            data: data
        })
    }

    // KESEHATAN - KELAS IBU HAMIL
    const cek15 = await prisma.sE_Kesehatan_KelasIbuHamil.count()
    if (cek15 == 0) {
        const ins = await prisma.sE_Kesehatan_KelasIbuHamil.createMany({
            data: data
        })
    }

    // KESEHATAN - IBU HAMIL DARI KELUARGA MISKIN
    const cek16 = await prisma.sE_Kesehatan_IbuHamilDariKeluargaMiskin.count()
    if (cek16 == 0) {
        const ins = await prisma.sE_Kesehatan_IbuHamilDariKeluargaMiskin.createMany({
            data: data
        })
    }

    // KESEHATAN - JAMINAN UNTUK BADUTA
    const cek17 = await prisma.sE_Kesehatan_JaminanUntukBaduta.count()
    if (cek17 == 0) {
        const ins = await prisma.sE_Kesehatan_JaminanUntukBaduta.createMany({
            data: data
        })
    }

    // KESEHATAN - POS PELAYANAN
    const cek18 = await prisma.sE_Kesehatan_PosPelayanan.count()
    if (cek18 == 0) {
        const ins = await prisma.sE_Kesehatan_PosPelayanan.createMany({
            data: data
        })
    }

    // KESEHATAN - FASILITAS
    const cek19 = await prisma.sE_Kesehatan_Fasilitas.count()
    if (cek19 == 0) {
        const ins = await prisma.sE_Kesehatan_Fasilitas.createMany({
            data: data
        })
    }

    // KESEHATAN - RATA RATA JARAK FASILITAS
    const cek20 = await prisma.sE_Kesehatan_RataRataJarakFasilitas.count()
    if (cek20 == 0) {
        const ins = await prisma.sE_Kesehatan_RataRataJarakFasilitas.createMany({
            data: data
        })
    }

    // KESEHATAN - JUMLAH DOKTER
    const cek21 = await prisma.sE_Kesehatan_JumlahDokter.count()
    if (cek21 == 0) {
        const ins = await prisma.sE_Kesehatan_JumlahDokter.createMany({
            data: data
        })
    }

    // KEAMANAN - PERKELAHIAN
    const cek22 = await prisma.sE_Keamanan_Perkelahian.count()
    if (cek22 == 0) {
        const ins = await prisma.sE_Keamanan_Perkelahian.createMany({
            data: data
        })
    }

    // KEAMANAN - PENCURIAN
    const cek23 = await prisma.sE_Keamanan_Pencurian.count()
    if (cek23 == 0) {
        const ins = await prisma.sE_Keamanan_Pencurian.createMany({
            data: data
        })
    }

    // KEAMANAN - PENCURIAN DAN KEKERASAN
    const cek24 = await prisma.sE_Keamanan_PencurianDanKekerasan.count()
    if (cek24 == 0) {
        const ins = await prisma.sE_Keamanan_PencurianDanKekerasan.createMany({
            data: data
        })
    }

    // KEAMANAN - PENIPUAN DAN PENGGELAPAN
    const cek25 = await prisma.sE_Keamanan_PenipuanDanPenggelapan.count()
    if (cek25 == 0) {
        const ins = await prisma.sE_Keamanan_PenipuanDanPenggelapan.createMany({
            data: data
        })
    }

    // KEAMANAN - PENGANIAYAAN
    const cek26 = await prisma.sE_Keamanan_Penganiayaan.count()
    if (cek26 == 0) {
        const ins = await prisma.sE_Keamanan_Penganiayaan.createMany({
            data: data
        })
    }

    // KEAMANAN - PERKOSAAN
    const cek27 = await prisma.sE_Keamanan_Perkosaan.count()
    if (cek27 == 0) {
        const ins = await prisma.sE_Keamanan_Perkosaan.createMany({
            data: data
        })
    }

    // KEAMANAN - NARKOBA
    const cek28 = await prisma.sE_Keamanan_Narkoba.count()
    if (cek28 == 0) {
        const ins = await prisma.sE_Keamanan_Narkoba.createMany({
            data: data
        })
    }

    // EKONOMI - JUMLAH PASAR
    const cek29 = await prisma.sE_Ekonomi_JumlahPasar.count()
    if (cek29 == 0) {
        const ins = await prisma.sE_Ekonomi_JumlahPasar.createMany({
            data: data
        })
    }

    // EKONOMI - LEMBAGA KEUANGAN
    const cek30 = await prisma.sE_Ekonomi_LembagaKeuangan.count()
    if (cek30 == 0) {
        const ins = await prisma.sE_Ekonomi_LembagaKeuangan.createMany({
            data: data
        })
    }

    // PERTANIAN - JENIS PRASARANA TRANSPORTASI
    const cek31 = await prisma.sE_Pertanian_JenisPrasaranaTransportasi.count()
    if (cek31 == 0) {
        const ins = await prisma.sE_Pertanian_JenisPrasaranaTransportasi.createMany({
            data: data
        })
    }

    // PERTANIAN - IRIGASI
    const cek32 = await prisma.sE_Pertanian_Irigasi.count()
    if (cek32 == 0) {
        const ins = await prisma.sE_Pertanian_Irigasi.createMany({
            data: data
        })
    }

    // KEMISKINAN - DATA
    const cek33 = await prisma.sE_Kemiskinan_Data.count()
    if (cek33 == 0) {
        const ins = await prisma.sE_Kemiskinan_Data.createMany({
            data: data
        })
    }

    // KEMISKINAN - BPJS
    const cek34 = await prisma.sE_Kemiskinan_BPJS.count()
    if (cek34 == 0) {
        const ins = await prisma.sE_Kemiskinan_BPJS.createMany({
            data: data
        })
    }

    return {
        success: true,
        message: "Seeder Data Sosial Ekonomi Success"
    }
}