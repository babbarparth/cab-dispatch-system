import { getAllTariff, updateTariffById } from "../db/function.js";

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

const updateTariff = async (req, res) => {
  const { id, distanceRate } = req.body;
  console.log("req.body: ", req.body);
  console.log("id: ", id);
  console.log("distanceRate: ", distanceRate);
  try {
    const updatedTariff = await updateTariffById(id, distanceRate);
    res.json(updatedTariff);
  } catch (error) {
    console.error("Error updating tariff:", error);
    res.status(500).send("Internal server error");
  }
};

export { allTariffs, updateTariff };
