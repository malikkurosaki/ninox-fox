import { ViewPermukaanJalan, ViewUploadFasilitas, ViewUploadGuruHonorer, ViewUploadGuruTersertifikasi, ViewUploadIbuHamilDariKeluargaMiskin, ViewUploadJalanDilaluiKendaraan, ViewUploadJalanKakiKurang4Jam, ViewUploadJaminanHariTua, ViewUploadJaminanKecelakaanKerja, ViewUploadJaminanKematian, ViewUploadJaminanKesehatan, ViewUploadJaminanPensiun, ViewUploadJaminanUntukBaduta, ViewUploadJarakFasilitas, ViewUploadJumlahDokter, ViewUploadKecelakaan, ViewUploadKelasIbuHamil, ViewUploadPengangguran, ViewUploadPermukaanJalan, ViewUploadPosPelayanan, ViewUploadRataRataJarakFasilitas, ViewUploadRumahIbadah } from "@/modules/temporary"

export default function Page({ params }: { params: { kategori: any } }) {

    if (params.kategori == "jaminan-kesehatan") {
        return (<>
            <ViewUploadJaminanKesehatan />
        </>)
    }
    if (params.kategori == "jaminan-kecelakaan-kerja") {
        return (<>
            <ViewUploadJaminanKecelakaanKerja />
        </>)
    }
    if (params.kategori == "jaminan-kematian") {
        return (<>
            <ViewUploadJaminanKematian />
        </>)
    }
    if (params.kategori == "jaminan-hari-tua") {
        return (<>
            <ViewUploadJaminanHariTua />
        </>)
    }
    if (params.kategori == "jaminan-pensiun") {
        return (<>
            <ViewUploadJaminanPensiun />
        </>)
    }
    if (params.kategori == "pengangguran") {
        return (<>
            <ViewUploadPengangguran />
        </>)
    }
    if (params.kategori == "permukaan-jalan") {
        return (<>
            <ViewUploadPermukaanJalan />
        </>)
    }
    if (params.kategori == "jalan-dilalui-kendaraan") {
        return (<>
            <ViewUploadJalanDilaluiKendaraan />
        </>)
    }
    if (params.kategori == "kecelakaan") {
        return (<>
            <ViewUploadKecelakaan />
        </>)
    }
    if (params.kategori == "rumah-ibadah") {
        return (<>
            <ViewUploadRumahIbadah />
        </>)
    }
    if (params.kategori == "jarak-fasilitas") {
        return (<>
            <ViewUploadJarakFasilitas />
        </>)
    }
    if (params.kategori == "jalan-kaki-kurang-4-jam") {
        return (<>
            <ViewUploadJalanKakiKurang4Jam />
        </>)
    }
    if (params.kategori == "guru-tersertifikasi") {
        return (<>
            <ViewUploadGuruTersertifikasi />
        </>)
    }
    if (params.kategori == "guru-honorer") {
        return (<>
            <ViewUploadGuruHonorer />
        </>)
    }
    if (params.kategori == "kelas-ibu-hamil") {
        return (<>
            <ViewUploadKelasIbuHamil />
        </>)
    }
    if (params.kategori == "ibu-hamil-dari-keluarga-miskin") {
        return (<>
            <ViewUploadIbuHamilDariKeluargaMiskin />
        </>)
    }
    if (params.kategori == "jaminan-untuk-baduta") {
        return (<>
            <ViewUploadJaminanUntukBaduta />
        </>)
    }
    if (params.kategori == "pos-pelayanan") {
        return (<>
            <ViewUploadPosPelayanan />
        </>)
    }
    if (params.kategori == "fasilitas") {
        return (<>
            <ViewUploadFasilitas />
        </>)
    }
    if (params.kategori == "rata-rata-jarak-fasilitas") {
        return (<>
            <ViewUploadRataRataJarakFasilitas />
        </>)
    }
    if (params.kategori == "jumlah-dokter") {
        return (<>
            <ViewUploadJumlahDokter />
        </>)
    }
    if (params.kategori == "perkelahian") {
        return (<>
        </>)
    }
    if (params.kategori == "pencurian") {
        return (<>
        </>)
    }
    if (params.kategori == "pencurian-dan-kekerasan") {
        return (<>
        </>)
    }
    if (params.kategori == "penipuan-dan-penggelapan") {
        return (<>
        </>)
    }
    if (params.kategori == "penganiayaan") {
        return (<>
        </>)
    }
    if (params.kategori == "perkosaan") {
        return (<>
        </>)
    }
    if (params.kategori == "narkoba") {
        return (<>
        </>)
    }
    if (params.kategori == "jumlah-pasar") {
        return (<>
        </>)
    }
    if (params.kategori == "lembaga-keuangan") {
        return (<>
        </>)
    }
    if (params.kategori == "jenis-prasarana-transportasi") {
        return (<>
        </>)
    }
    if (params.kategori == "irigasi") {
        return (<>
        </>)
    }
    if (params.kategori == "data-kemiskinan") {
        return (<>
        </>)
    }
    if (params.kategori == "bpjs") {
        return (<>
        </>)
    }
}