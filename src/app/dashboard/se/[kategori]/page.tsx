import { MasterProvinceGetAll } from "@/modules/_global"
import { ViewGuruHonorer, ViewGuruTersertifikasi, ViewJalanDilaluiKendaraan, ViewJalanKakiKurang4Jam, ViewJaminanHariTua, ViewJaminanKecelakaanKerja, ViewJaminanKematian, ViewJaminanKesehatan, ViewJaminanPensiun, ViewJarakFasilitas, ViewKecelakaan, ViewPengangguran, ViewPermukaanJalan, ViewRumahIbadah, funDownloadGuruHonorer, funDownloadGuruTersertifikasi, funDownloadJalanDilaluiKendaraan, funDownloadJalanKakiKurang4Jam, funDownloadJaminanHariTua, funDownloadJaminanKecelakaanKerja, funDownloadJaminanKematian, funDownloadJaminanKesehatan, funDownloadJaminanPensiun, funDownloadJarakFasilitas, funDownloadKecelakaan, funDownloadPengangguran, funDownloadPermukaanJalan, funDownloadRumahIbadah, funGetGuruHonorer, funGetGuruTersertifikasi, funGetJalanDilaluiKendaraan, funGetJalanKakiKurang4Jam, funGetJaminanHariTua, funGetJaminanKecelakaanKerja, funGetJaminanKematian, funGetJaminanKesehatan, funGetJaminanPensiun, funGetJarakFasilitas, funGetKecelakaan, funGetPengangguran, funGetPermukaanJalan, funGetRumahIbadah } from "@/modules/temporary"

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
    if (params.kategori == "kelas-ibu-hamil")
        return (<></>)
    if (params.kategori == "ibu-hamil-dari-keluarga-miskin")
        return (<></>)
    if (params.kategori == "jaminan-untuk-baduta")
        return (<></>)
    if (params.kategori == "pos-pelayanan")
        return (<></>)
    if (params.kategori == "fasilitas")
        return (<></>)
    if (params.kategori == "rata-rata-jarak-fasilitas")
        return (<></>)
    if (params.kategori == "jumlah-dokter")
        return (<></>)
    if (params.kategori == "perkelahian")
        return (<></>)
    if (params.kategori == "pencurian")
        return (<></>)
    if (params.kategori == "pencurian-dan-kekerasan")
        return (<></>)
    if (params.kategori == "penipuan-dan-penggelapan")
        return (<></>)
    if (params.kategori == "penganiayaan")
        return (<></>)
    if (params.kategori == "perkosaan")
        return (<></>)
    if (params.kategori == "narkoba")
        return (<></>)
    if (params.kategori == "jumlah-pasar")
        return (<></>)
    if (params.kategori == "lembaga-keuangan")
        return (<></>)
    if (params.kategori == "jenis-prasarana-transportasi")
        return (<></>)
    if (params.kategori == "irigasi")
        return (<></>)
    if (params.kategori == "data-kemiskinan")
        return (<></>)
    if (params.kategori == "bpjs")
        return (<></>)

}