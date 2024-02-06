import { ViewPermukaanJalan, ViewUploadJalanDilaluiKendaraan, ViewUploadJaminanHariTua, ViewUploadJaminanKecelakaanKerja, ViewUploadJaminanKematian, ViewUploadJaminanKesehatan, ViewUploadJaminanPensiun, ViewUploadJarakFasilitas, ViewUploadKecelakaan, ViewUploadPengangguran, ViewUploadPermukaanJalan, ViewUploadRumahIbadah } from "@/modules/temporary"

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
        </>)
    }
    if (params.kategori == "guru-tersertifikasi") {
        return (<>
        </>)
    }
    if (params.kategori == "guru-honorer") {
        return (<>
        </>)
    }
    if (params.kategori == "kelas-ibu-hamil") {
        return (<>
        </>)
    }
    if (params.kategori == "ibu-hamil-dari-keluarga-miskin") {
        return (<>
        </>)
    }
    if (params.kategori == "jaminan-untuk-baduta") {
        return (<>
        </>)
    }
    if (params.kategori == "pos-pelayanan") {
        return (<>
        </>)
    }
    if (params.kategori == "fasilitas") {
        return (<>
        </>)
    }
    if (params.kategori == "rata-rata-jarak-fasilitas") {
        return (<>
        </>)
    }
    if (params.kategori == "jumlah-dokter") {
        return (<>
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