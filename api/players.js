const router = require("express").Router();
module.exports = router;

const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
  try {
    const players = await prisma.player.findMany();
    res.json(players);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      const error = {
        status: 400,
        message: "Player must have a name",
      };

      return next(error);
    }

    const player = await prisma.player.create({ data: { name } });
    res.json(player);
  } catch (error) {
    next(error);
  }
});
