-- CreateTable
CREATE TABLE "AdditionalData" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "score" DOUBLE PRECISION,
    "birthDate" TIMESTAMP(3),

    CONSTRAINT "AdditionalData_pkey" PRIMARY KEY ("id")
);
