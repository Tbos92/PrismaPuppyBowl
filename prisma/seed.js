const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create 10 players
  const players = [
    { name: "Buddy", breed: "Golden Retriever", status: "Field" },
    { name: "Max", breed: "Labrador", status: "Bench" },
    { name: "Bella", breed: "Beagle", status: "Field" },
    { name: "Charlie", breed: "German Shepherd", status: "Bench" },
    { name: "Lucy", breed: "Poodle", status: "Field" },
    { name: "Daisy", breed: "Bulldog", status: "Bench" },
    { name: "Milo", breed: "Cocker Spaniel", status: "Field" },
    { name: "Luna", breed: "Doberman", status: "Bench" },
    { name: "Rocky", breed: "Boxer", status: "Field" },
    { name: "Sadie", breed: "Shih Tzu", status: "Bench" },
  ];

  for (const player of players) {
    await prisma.player.create({
      data: player,
    });
  }

  console.log("Seeding complete: 10 players created.");
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
