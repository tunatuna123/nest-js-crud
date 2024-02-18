-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
