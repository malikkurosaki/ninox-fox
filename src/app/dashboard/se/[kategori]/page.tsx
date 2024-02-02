import { MasterProvinceGetAll } from "@/modules/_global"
import { ViewJaminanHariTua, ViewJaminanKecelakaanKerja, ViewJaminanKematian, ViewJaminanKesehatan, ViewJaminanPensiun, ViewPengangguran, funDownloadJaminanHariTua, funDownloadJaminanKecelakaanKerja, funDownloadJaminanKematian, funDownloadJaminanKesehatan, funDownloadJaminanPensiun, funDownloadPengangguran, funGetJaminanHariTua, funGetJaminanKecelakaanKerja, funGetJaminanKematian, funGetJaminanKesehatan, funGetJaminanPensiun, funGetPengangguran } from "@/modules/temporary"

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
    if (params.kategori == "permukaan-jalan")
        return (<></>)
    if (params.kategori == "jalan-dilalui-kendaraan")
        return (<></>)
    if (params.kategori == "kecelakaan")
        return (<></>)
    if (params.kategori == "rumah-ibadah")
        return (<></>)
    if (params.kategori == "jarak-fasilitas")
        return (<></>)
    if (params.kategori == "jalan-kaki-kurang-4-jam")
        return (<></>)
    if (params.kategori == "guru-tersertifikasi")
        return (<></>)
    if (params.kategori == "guru-honorer")
        return (<></>)
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