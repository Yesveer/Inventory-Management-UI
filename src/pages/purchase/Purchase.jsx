import "./purchase.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SearchAdd, PurchaseTableInfo } from "../../components";
import { purchaseTitle } from "../../utilities";
import { toast } from "react-toastify";

export default function Purchase() {
  const [purchaseData, setPurchaseData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  async function getpurchase() {
    const res = await fetch(`${API_BASE_URL}/purchase`);
    const data = await res.json();

    setPurchaseData(data);
  }

  useEffect(() => {
    getpurchase();
  }, []);

  const filteredData =
    searchQuery.trim() !== ""
      ? purchaseData.filter((item) => {
          return item.purchase
            .toLowerCase()
            .includes(searchQuery.toLocaleLowerCase());
        })
      : purchaseData;

  function handleDelete(id) {
    const delteAlert = window.confirm("Delete the product");
    if (delteAlert) {
      fetch(`${API_BASE_URL}/delete/purchase/${id}`).then((res) => {
        if (res.status === 500) {
          toast.error("Internal server error");
        } else if (res.status === 404) {
          toast.error("purchase not found");
        } else if (res.status === 200) {
          toast.success("purchase deleted successfully");
          setPurchaseData((prevData) =>
            prevData.filter((item) => item._id !== id)
          );
        }
      });
    } else return;
  }

  return (
    <div className="purchase">
      <div className="purchase_container">
        <SearchAdd
          title="purchase"
          handleClick={() => {
            navigate("/purchase/addpurchase");
          }}
          setSearchQuery={setSearchQuery}
        />
        <PurchaseTableInfo
          title="purchase"
          purchaseTitle={purchaseTitle}
          purchaseData={filteredData}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
