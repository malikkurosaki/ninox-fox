'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funCopyPairing({ dateFrom, dateTo, candidate1, candidate2 }: { dateFrom: any, dateTo: any, candidate1: any, candidate2: any }) {
    const data = await prisma.candidatePairing.findMany({
        where: {
            dateEmotion: dateFrom,
            idCandidate1: candidate1,
            idCandidate2: candidate2,
        },
        select: {
            idCandidate1: true,
            idCandidate2: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            rate: true,
            confidence: true,
            supportive: true,
            positive: true,
            undecided: true,
            unsupportive: true,
            uncomfortable: true,
            negative: true,
            dissapproval: true,
        }
    })

    const dataTrue = data.map((v: any) => ({
        ..._.omit(v, ["idCandidate1", "idCandidate2", "idProvinsi", "idKabkot", "idKecamatan", "rate", "confidence", "supportive", "positive", "undecided", "unsupportive", "uncomfortable", "negative", "dissapproval"]),
        dateEmotion: dateTo,
        idCandidate1: v.idCandidate1,
        idCandidate2: v.idCandidate2,
        idProvinsi: v.idProvinsi,
        idKabkot: v.idKabkot,
        idKecamatan: v.idKecamatan,
        rate: v.rate,
        confidence: v.confidence,
        supportive: v.supportive,
        positive: v.positive,
        undecided: v.undecided,
        unsupportive: v.unsupportive,
        uncomfortable: v.uncomfortable,
        negative: v.negative,
        dissapproval: v.dissapproval,
    }));

    const insert = await prisma.candidatePairing.createMany({
        data: dataTrue
    })

    return {
        success: true,
        message: 'Success'
    }
}