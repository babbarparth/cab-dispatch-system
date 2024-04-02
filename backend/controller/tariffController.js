import { getAllTariff } from "../db/function.js";

const allTariffs = async (req, res) => {
  try {
    const tariffAll = await getAllTariff();
    console.log("Tariif: ", tariffAll);

    res.json(tariffAll);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

export { allTariffs };
