import React, { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import CakeDataService from "../../services/cake";
import styled from "styled-components";

const Page = styled.div`
  margin: 10%auto;
`;

const PageColFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5%;
`;

function Cakes(props) {
  const [cakes, setCakes] = useState([]);
  const [searchColor, setSearchColor] = useState("");
  const [searchAllergyInfo, setSearchAllergyInfo] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchFlavor, setSearchFlavor] = useState("");
  const [flavors, setFlavors] = useState(["All Flavors"]);

  useEffect(() => {
    retrieveCakes();
    retrieveFlavors();
  }, []);

  const onChangeSearchColor = (e) => {
    const searchColor = e.target.value;
    setSearchColor(searchColor);
  };

  const onChangeSearchAllergyInfo = (e) => {
    const searchAllergyInfo = e.target.value;
    setSearchAllergyInfo(searchAllergyInfo);
  };

  const onChangeSearchPrice = (e) => {
    const searchPrice = e.target.value;
    setSearchPrice(searchPrice);
  };

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveCakes = () => {
    CakeDataService.getAll()
      .then((res) => {
        console.log(res.data);
        setCakes(res.data.cakes);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveFlavors = () => {
    CakeDataService.getFlavors()
      .then((res) => {
        console.log(res.data);
        setFlavors(["All Flavors"].concat(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveCakes();
  };

  const find = (query, by) => {
    CakeDataService.find(query, by)
      .then((res) => {
        console.log(res.data);
        setCakes(res.data.cakes);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByColor = () => {
    find(searchColor, "color");
  };

  const findByAllergyInfo = () => {
    find(searchAllergyInfo, "allergyInfo");
  };

  const findByPrice = () => {
    find(searchPrice, "price");
  };

  const findByName = () => {
    find(searchName, "name");
  };

  const findByFlavor = () => {
    if (searchFlavor === "All Flavors") {
      refreshList();
    } else {
      find(searchFlavor, "flavor");
    }
  };

  return (
    <Page>
      <PageColFlex>
        <Slider />
      </PageColFlex>
    </Page>
  );
}

export default Cakes;
