-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "score" DOUBLE PRECISION,
    "birthDate" TIMESTAMP(3),
    "additionalData" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
