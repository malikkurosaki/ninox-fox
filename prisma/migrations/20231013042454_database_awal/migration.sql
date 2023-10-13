-- CreateTable
CREATE TABLE "CategoryPublicConcernTrend" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryPublicConcernTrend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryLeaderTraitAssessment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryLeaderTraitAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Component" (
    "id" SERIAL NOT NULL,
    "menu" TEXT,
    "group" TEXT,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAccess" (
    "id" TEXT NOT NULL,
    "idUserRole" INTEGER NOT NULL,
    "idComponent" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAccess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "idUserRole" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLog" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "activity" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AreaProvinsi" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AreaProvinsi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AreaKabkot" (
    "id" SERIAL NOT NULL,
    "idProvinsi" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AreaKabkot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AreaKecamatan" (
    "id" SERIAL NOT NULL,
    "idKabkot" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AreaKecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AreaKelurahan" (
    "id" SERIAL NOT NULL,
    "idKecamatan" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AreaKelurahan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserArea" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "idProvinsi" INTEGER,
    "idKabkot" INTEGER,
    "idKecamatan" INTEGER,
    "idKelurahan" INTEGER,
    "isAllArea" BOOLEAN NOT NULL DEFAULT false,
    "isFront" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaderTraitAssessment" (
    "id" TEXT NOT NULL,
    "idProvinsi" INTEGER,
    "idKabkot" INTEGER,
    "idKecamatan" INTEGER,
    "idKelurahan" INTEGER,
    "idCategory" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeaderTraitAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicConcernTrend" (
    "id" TEXT NOT NULL,
    "idProvinsi" INTEGER,
    "idKabkot" INTEGER,
    "idKecamatan" INTEGER,
    "idKelurahan" INTEGER,
    "idCategory" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PublicConcernTrend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegionHotIssues" (
    "id" TEXT NOT NULL,
    "idProvinsi" INTEGER,
    "idKabkot" INTEGER,
    "idKecamatan" INTEGER,
    "idKelurahan" INTEGER,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegionHotIssues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "idProvinsi" INTEGER NOT NULL,
    "idKabkot" INTEGER NOT NULL,
    "tingkat" INTEGER NOT NULL DEFAULT 1,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MlAi" (
    "id" SERIAL NOT NULL,
    "idCandidate" INTEGER NOT NULL,
    "category" TEXT,
    "content" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MlAi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Swot" (
    "id" SERIAL NOT NULL,
    "idCandidate" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Swot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Step" (
    "id" SERIAL NOT NULL,
    "idCandidate" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "sentiment" INTEGER NOT NULL DEFAULT 1,
    "content" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Audience" (
    "id" SERIAL NOT NULL,
    "idProvinsi" INTEGER,
    "idKabkot" INTEGER,
    "idKecamatan" INTEGER,
    "idKelurahan" INTEGER,
    "value" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Audience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateEmotion" (
    "id" TEXT NOT NULL,
    "idProvinsi" INTEGER,
    "idKabkot" INTEGER,
    "idKecamatan" INTEGER,
    "idKelurahan" INTEGER,
    "idCandidate" INTEGER NOT NULL,
    "dateEmotion" DATE NOT NULL,
    "confidence" INTEGER NOT NULL,
    "supportive" INTEGER NOT NULL,
    "positive" INTEGER NOT NULL,
    "undecided" INTEGER NOT NULL,
    "unsupportive" INTEGER NOT NULL,
    "uncomfortable" INTEGER NOT NULL,
    "negative" INTEGER NOT NULL,
    "dissapproval" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CandidateEmotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidatePairing" (
    "id" TEXT NOT NULL,
    "idCandidate1" INTEGER NOT NULL,
    "idCandidate2" INTEGER NOT NULL,
    "idProvinsi" INTEGER,
    "idKabkot" INTEGER,
    "idKecamatan" INTEGER,
    "rate" DECIMAL(65,30) NOT NULL,
    "dateEmotion" DATE NOT NULL,
    "confidence" INTEGER NOT NULL,
    "supportive" INTEGER NOT NULL,
    "positive" INTEGER NOT NULL,
    "undecided" INTEGER NOT NULL,
    "unsupportive" INTEGER NOT NULL,
    "uncomfortable" INTEGER NOT NULL,
    "negative" INTEGER NOT NULL,
    "dissapproval" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CandidatePairing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserAccess" ADD CONSTRAINT "UserAccess_idUserRole_fkey" FOREIGN KEY ("idUserRole") REFERENCES "UserRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAccess" ADD CONSTRAINT "UserAccess_idComponent_fkey" FOREIGN KEY ("idComponent") REFERENCES "Component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idUserRole_fkey" FOREIGN KEY ("idUserRole") REFERENCES "UserRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLog" ADD CONSTRAINT "UserLog_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaKabkot" ADD CONSTRAINT "AreaKabkot_idProvinsi_fkey" FOREIGN KEY ("idProvinsi") REFERENCES "AreaProvinsi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaKecamatan" ADD CONSTRAINT "AreaKecamatan_idKabkot_fkey" FOREIGN KEY ("idKabkot") REFERENCES "AreaKabkot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaKelurahan" ADD CONSTRAINT "AreaKelurahan_idKecamatan_fkey" FOREIGN KEY ("idKecamatan") REFERENCES "AreaKecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArea" ADD CONSTRAINT "UserArea_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArea" ADD CONSTRAINT "UserArea_idProvinsi_fkey" FOREIGN KEY ("idProvinsi") REFERENCES "AreaProvinsi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArea" ADD CONSTRAINT "UserArea_idKabkot_fkey" FOREIGN KEY ("idKabkot") REFERENCES "AreaKabkot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArea" ADD CONSTRAINT "UserArea_idKecamatan_fkey" FOREIGN KEY ("idKecamatan") REFERENCES "AreaKecamatan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArea" ADD CONSTRAINT "UserArea_idKelurahan_fkey" FOREIGN KEY ("idKelurahan") REFERENCES "AreaKelurahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaderTraitAssessment" ADD CONSTRAINT "LeaderTraitAssessment_idProvinsi_fkey" FOREIGN KEY ("idProvinsi") REFERENCES "AreaProvinsi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaderTraitAssessment" ADD CONSTRAINT "LeaderTraitAssessment_idKabkot_fkey" FOREIGN KEY ("idKabkot") REFERENCES "AreaKabkot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaderTraitAssessment" ADD CONSTRAINT "LeaderTraitAssessment_idKecamatan_fkey" FOREIGN KEY ("idKecamatan") REFERENCES "AreaKecamatan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaderTraitAssessment" ADD CONSTRAINT "LeaderTraitAssessment_idKelurahan_fkey" FOREIGN KEY ("idKelurahan") REFERENCES "AreaKelurahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaderTraitAssessment" ADD CONSTRAINT "LeaderTraitAssessment_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "CategoryLeaderTraitAssessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicConcernTrend" ADD CONSTRAINT "PublicConcernTrend_idProvinsi_fkey" FOREIGN KEY ("idProvinsi") REFERENCES "AreaProvinsi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicConcernTrend" ADD CONSTRAINT "PublicConcernTrend_idKabkot_fkey" FOREIGN KEY ("idKabkot") REFERENCES "AreaKabkot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicConcernTrend" ADD CONSTRAINT "PublicConcernTrend_idKecamatan_fkey" FOREIGN KEY ("idKecamatan") REFERENCES "AreaKecamatan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicConcernTrend" ADD CONSTRAINT "PublicConcernTrend_idKelurahan_fkey" FOREIGN KEY ("idKelurahan") REFERENCES "AreaKelurahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicConcernTrend" ADD CONSTRAINT "PublicConcernTrend_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "CategoryPublicConcernTrend"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionHotIssues" ADD CONSTRAINT "RegionHotIssues_idProvinsi_fkey" FOREIGN KEY ("idProvinsi") REFERENCES "AreaProvinsi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionHotIssues" ADD CONSTRAINT "RegionHotIssues_idKabkot_fkey" FOREIGN KEY ("idKabkot") REFERENCES "AreaKabkot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionHotIssues" ADD CONSTRAINT "RegionHotIssues_idKecamatan_fkey" FOREIGN KEY ("idKecamatan") REFERENCES "AreaKecamatan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionHotIssues" ADD CONSTRAINT "RegionHotIssues_idKelurahan_fkey" FOREIGN KEY ("idKelurahan") REFERENCES "AreaKelurahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_idProvinsi_fkey" FOREIGN KEY ("idProvinsi") REFERENCES "AreaProvinsi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_idKabkot_fkey" FOREIGN KEY ("idKabkot") REFERENCES "AreaKabkot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MlAi" ADD CONSTRAINT "MlAi_idCandidate_fkey" FOREIGN KEY ("idCandidate") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Swot" ADD CONSTRAINT "Swot_idCandidate_fkey" FOREIGN KEY ("idCandidate") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_idCandidate_fkey" FOREIGN KEY ("idCandidate") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audience" ADD CONSTRAINT "Audience_idProvinsi_fkey" FOREIGN KEY ("idProvinsi") REFERENCES "AreaProvinsi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audience" ADD CONSTRAINT "Audience_idKabkot_fkey" FOREIGN KEY ("idKabkot") REFERENCES "AreaKabkot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audience" ADD CONSTRAINT "Audience_idKecamatan_fkey" FOREIGN KEY ("idKecamatan") REFERENCES "AreaKecamatan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audience" ADD CONSTRAINT "Audience_idKelurahan_fkey" FOREIGN KEY ("idKelurahan") REFERENCES "AreaKelurahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateEmotion" ADD CONSTRAINT "CandidateEmotion_idProvinsi_fkey" FOREIGN KEY ("idProvinsi") REFERENCES "AreaProvinsi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateEmotion" ADD CONSTRAINT "CandidateEmotion_idKabkot_fkey" FOREIGN KEY ("idKabkot") REFERENCES "AreaKabkot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateEmotion" ADD CONSTRAINT "CandidateEmotion_idKecamatan_fkey" FOREIGN KEY ("idKecamatan") REFERENCES "AreaKecamatan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateEmotion" ADD CONSTRAINT "CandidateEmotion_idKelurahan_fkey" FOREIGN KEY ("idKelurahan") REFERENCES "AreaKelurahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateEmotion" ADD CONSTRAINT "CandidateEmotion_idCandidate_fkey" FOREIGN KEY ("idCandidate") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidatePairing" ADD CONSTRAINT "CandidatePairing_idProvinsi_fkey" FOREIGN KEY ("idProvinsi") REFERENCES "AreaProvinsi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidatePairing" ADD CONSTRAINT "CandidatePairing_idKabkot_fkey" FOREIGN KEY ("idKabkot") REFERENCES "AreaKabkot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidatePairing" ADD CONSTRAINT "CandidatePairing_idKecamatan_fkey" FOREIGN KEY ("idKecamatan") REFERENCES "AreaKecamatan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidatePairing" ADD CONSTRAINT "Candidate1Map" FOREIGN KEY ("idCandidate1") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidatePairing" ADD CONSTRAINT "Candidate2Map" FOREIGN KEY ("idCandidate2") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
