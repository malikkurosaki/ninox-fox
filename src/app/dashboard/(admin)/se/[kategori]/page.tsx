import { MasterProvinceGetAll } from "@/modules/_global"
import { ViewFasilitas, ViewGuruHonorer, ViewGuruTersertifikasi, ViewIbuHamilDariKeluargaMiskin, ViewJalanDilaluiKendaraan, ViewJalanKakiKurang4Jam, ViewJaminanHariTua, ViewJaminanKecelakaanKerja, ViewJaminanKematian, ViewJaminanKesehatan, ViewJaminanPensiun, ViewJaminanUntukBaduta, ViewJarakFasilitas, ViewJumlahDokter, ViewJumlahPasar, ViewKecelakaan, ViewKelasIbuHamil, ViewLembagaKeuangan, ViewNarkoba, ViewPencurian, ViewPencurianDanKekerasan, ViewPengangguran, ViewPenganiayaan, ViewPenipuanDanPenggelapan, ViewPerkelahian, ViewPerkosaan, ViewPermukaanJalan, ViewPosPelayanan, ViewRataRataJarakFasilitas, ViewRumahIbadah, funDownloadFasilitas, funDownloadGuruHonorer, funDownloadGuruTersertifikasi, funDownloadIbuHamilDariKeluargaMiskin, funDownloadJalanDilaluiKendaraan, funDownloadJalanKakiKurang4Jam, funDownloadJaminanHariTua, funDownloadJaminanKecelakaanKerja, funDownloadJaminanKematian, funDownloadJaminanKesehatan, funDownloadJaminanPensiun, funDownloadJaminanUntukBaduta, funDownloadJarakFasilitas, funDownloadJumlahDokter, funDownloadJumlahPasar, funDownloadKecelakaan, funDownloadKelasIbuHamil, funDownloadLembagaKeuangan, funDownloadNarkoba, funDownloadPencurian, funDownloadPencurianDanKekerasan, funDownloadPengangguran, funDownloadPenganiayaan, funDownloadPenipuanDanPenggelapan, funDownloadPerkelahian, funDownloadPerkosaan, funDownloadPermukaanJalan, funDownloadPosPelayanan, funDownloadRataRataJarakFasilitas, funDownloadRumahIbadah, funGetFasilitas, funGetGuruHonorer, funGetGuruTersertifikasi, funGetIbuHamilDariKeluargaMiskin, funGetJalanDilaluiKendaraan, funGetJalanKakiKurang4Jam, funGetJaminanHariTua, funGetJaminanKecelakaanKerja, funGetJaminanKematian, funGetJaminanKesehatan, funGetJaminanPensiun, funGetJaminanUntukBaduta, funGetJarakFasilitas, funGetJumlahDokter, funGetJumlahPasar, funGetKecelakaan, funGetKelasIbuHamil, funGetLembagaKeuangan, funGetNarkoba, funGetPencurian, funGetPencurianDanKekerasan, funGetPengangguran, funGetPenganiayaan, funGetPenipuanDanPenggelapan, funGetPerkelahian, funGetPerkosaan, funGetPermukaanJalan, funGetPosPelayanan, funGetRataRataJarakFasilitas, funGetRumahIbadah } from "@/modules/temporary"

export default async function Page({ params }: { params: { kategori: any } }) {
    const prov = await MasterProvinceGetAll()

    if (params.kategori == "jaminan-kesehatan") {
        const dataDownload = await funDownloadJaminanKesehatan()
        const dataTable = await funGetJaminanKesehatan({})
        return (<>
            <ViewJaminanKesehatan provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }

    if (params.kategori == "jaminan-kecelakaan-kerja") {
        const dataDownload = await funDownloadJaminanKecelakaanKerja()
        const dataTable = await funGetJaminanKecelakaanKerja({})
        return (<>
            <ViewJaminanKecelakaanKerja provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "jaminan-kematian") {
        const dataDownload = await funDownloadJaminanKematian()
        const dataTable = await funGetJaminanKematian({})
        return (<>
            <ViewJaminanKematian provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "jaminan-hari-tua") {
        const dataDownload = await funDownloadJaminanHariTua()
        const dataTable = await funGetJaminanHariTua({})
        return (<>
            <ViewJaminanHariTua provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "jaminan-pensiun") {
        const dataDownload = await funDownloadJaminanPensiun()
        const dataTable = await funGetJaminanPensiun({})
        return (<>
            <ViewJaminanPensiun provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "pengangguran") {
        const dataDownload = await funDownloadPengangguran()
        const dataTable = await funGetPengangguran({})
        return (<>
            <ViewPengangguran provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "permukaan-jalan") {
        const dataDownload = await funDownloadPermukaanJalan()
        const dataTable = await funGetPermukaanJalan({})
        return (<>
            <ViewPermukaanJalan provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "jalan-dilalui-kendaraan") {
        const dataDownload = await funDownloadJalanDilaluiKendaraan()
        const dataTable = await funGetJalanDilaluiKendaraan({})
        return (<>
            <ViewJalanDilaluiKendaraan provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "kecelakaan") {
        const dataDownload = await funDownloadKecelakaan()
        const dataTable = await funGetKecelakaan({})
        return (<>
            <ViewKecelakaan provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "rumah-ibadah") {
        const dataDownload = await funDownloadRumahIbadah()
        const dataTable = await funGetRumahIbadah({})
        return (<>
            <ViewRumahIbadah provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "jarak-fasilitas") {
        const dataDownload = await funDownloadJarakFasilitas()
        const dataTable = await funGetJarakFasilitas({})
        return (<>
            <ViewJarakFasilitas provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "jalan-kaki-kurang-4-jam") {
        const dataDownload = await funDownloadJalanKakiKurang4Jam()
        const dataTable = await funGetJalanKakiKurang4Jam({})
        return (<>
            <ViewJalanKakiKurang4Jam provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "guru-tersertifikasi") {
        const dataDownload = await funDownloadGuruTersertifikasi()
        const dataTable = await funGetGuruTersertifikasi({})
        return (<>
            <ViewGuruTersertifikasi provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }

    if (params.kategori == "guru-honorer") {
        const dataDownload = await funDownloadGuruHonorer()
        const dataTable = await funGetGuruHonorer({})
        return (<>
            <ViewGuruHonorer provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "kelas-ibu-hamil") {
        const dataDownload = await funDownloadKelasIbuHamil()
        const dataTable = await funGetKelasIbuHamil({})
        return (<>
            <ViewKelasIbuHamil provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "ibu-hamil-dari-keluarga-miskin") {
        const dataDownload = await funDownloadIbuHamilDariKeluargaMiskin()
        const dataTable = await funGetIbuHamilDariKeluargaMiskin({})
        return (<>
            <ViewIbuHamilDariKeluargaMiskin provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "jaminan-untuk-baduta") {
        const dataDownload = await funDownloadJaminanUntukBaduta()
        const dataTable = await funGetJaminanUntukBaduta({})
        return (<>
            <ViewJaminanUntukBaduta provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "pos-pelayanan") {
        const dataDownload = await funDownloadPosPelayanan()
        const dataTable = await funGetPosPelayanan({})
        return (<>
            <ViewPosPelayanan provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "fasilitas") {
        const dataDownload = await funDownloadFasilitas()
        const dataTable = await funGetFasilitas({})
        return (<>
            <ViewFasilitas provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "rata-rata-jarak-fasilitas") {
        const dataDownload = await funDownloadRataRataJarakFasilitas()
        const dataTable = await funGetRataRataJarakFasilitas({})
        return (<>
            <ViewRataRataJarakFasilitas provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "jumlah-dokter") {
        const dataDownload = await funDownloadJumlahDokter()
        const dataTable = await funGetJumlahDokter({})
        return (<>
            <ViewJumlahDokter provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "perkelahian") {
        const dataDownload = await funDownloadPerkelahian()
        const dataTable = await funGetPerkelahian({})
        return (<>
            <ViewPerkelahian provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "pencurian") {
        const dataDownload = await funDownloadPencurian()
        const dataTable = await funGetPencurian({})
        return (<>
            <ViewPencurian provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "pencurian-dan-kekerasan") {
        const dataDownload = await funDownloadPencurianDanKekerasan()
        const dataTable = await funGetPencurianDanKekerasan({})
        return (<>
            <ViewPencurianDanKekerasan provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "penipuan-dan-penggelapan") {
        const dataDownload = await funDownloadPenipuanDanPenggelapan()
        const dataTable = await funGetPenipuanDanPenggelapan({})
        return (<>
            <ViewPenipuanDanPenggelapan provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "penganiayaan") {
        const dataDownload = await funDownloadPenganiayaan()
        const dataTable = await funGetPenganiayaan({})
        return (<>
            <ViewPenganiayaan provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "perkosaan") {
        const dataDownload = await funDownloadPerkosaan()
        const dataTable = await funGetPerkosaan({})
        return (<>
            <ViewPerkosaan provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "narkoba") {
        const dataDownload = await funDownloadNarkoba()
        const dataTable = await funGetNarkoba({})
        return (<>
            <ViewNarkoba provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "jumlah-pasar") {
        const dataDownload = await funDownloadJumlahPasar()
        const dataTable = await funGetJumlahPasar({})
        return (<>
            <ViewJumlahPasar provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "lembaga-keuangan") {
        const dataDownload = await funDownloadLembagaKeuangan()
        const dataTable = await funGetLembagaKeuangan({})
        return (<>
            <ViewLembagaKeuangan provinsi={prov} download={dataDownload} table={dataTable} />
        </>)
    }
    if (params.kategori == "jenis-prasarana-transportasi")
        return (<></>)
    if (params.kategori == "irigasi")
        return (<></>)
    if (params.kategori == "data-kemiskinan")
        return (<></>)
    if (params.kategori == "bpjs")
        return (<></>)

}