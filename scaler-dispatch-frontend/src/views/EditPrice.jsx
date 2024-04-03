import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/HeaderComponent";
import PriceTable from "../components/PriceTable";
import PriceEditor from "../components/PriceEditor";

const EditPrice = () => {
  const [taxiData, setTaxiData] = useState([]);
  const [selectedCabType, setSelectedCabType] = useState("");
  const [farePrice, setFarePrice] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_BASE_URL}/api/tariff/tariffRate`)
      .then((response) => {
        setTaxiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tariff rates:", error);
      });
  }, []); 

  const handleSave = () => {
    const selectedCab = taxiData.find(
      (taxi) => taxi.vehicleType === selectedCabType
    );

    const updatedTaxiData = taxiData.map((taxi) => {
      if (taxi.vehicleType === selectedCabType) {
        return {
          ...taxi,
          distanceRate: parseFloat(farePrice),
        };
      }
      return taxi;
    });

    axios
      .put(`${import.meta.env.VITE_APP_BASE_URL}/api/tariff/updateTariff`, {
        id: selectedCab.id,
        distanceRate: parseFloat(farePrice),
      })
      .then((response) => {
        setTaxiData(updatedTaxiData);
        console.log("Fare price updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating fare price:", error);
      });
  };

  const handleEditClick = (cabType) => {
    setSelectedCabType(cabType);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <PriceEditor
          taxiData={taxiData}
          selectedCabType={selectedCabType}
          setSelectedCabType={setSelectedCabType}
          farePrice={farePrice}
          setFarePrice={setFarePrice}
          handleSave={handleSave}
        />
        <PriceTable taxiData={taxiData} handleEditClick={handleEditClick} />
      </div>
    </>
  );
};

export default EditPrice;
