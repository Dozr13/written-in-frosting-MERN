import React, { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import CakeDataService from "../../services/cake";
import styled from "styled-components";

const CakePage = styled.div`
  height: 100%;
  width: 100%;
`;

const PageHeader = styled.h3`
  font-size: 3.5rem;
  margin-top: 5%;
`;

const ToggleSearchBtn = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 50px;
  background-color: #efefa1;
  padding: 0.3rem 1rem;
  margin: 1rem;
`;

const SearchMenu = styled.div`
  height: 50vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 5px;
`;

const SearchInput = styled.input`
  height: 1.5rem;
  width: 30%;
  text-align: center;
  margin: 0.7rem 0;
`;

const SearchSelect = styled.select`
  height: 1.5rem;
  width: 30%;
  text-align: center;
  margin: 0.7rem 0;
`;

const SearchBtn = styled.button`
  height: 1.5rem;
  width: 10%;
`;

const SliderFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5%;
`;

const BrowseCakes = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Card = styled.div`
  height: 25vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border: 2px solid #000;
  border-radius: 50px;
`;

const Cakes = (props) => {
  const [cakes, setCakes] = useState([]);
  const [searchColor, setSearchColor] = useState("");
  const [searchAllergyInfo, setSearchAllergyInfo] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [searchFlavor, setSearchFlavor] = useState("");
  const [flavors, setFlavors] = useState(["All Flavors"]);

  const [isOpen, setIsOpen] = useState(false);

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

  const onChangeSearchFlavor = (e) => {
    const searchFlavor = e.target.value;
    setSearchFlavor(searchFlavor);
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

  const findByFlavor = () => {
    if (searchFlavor === "All Flavors") {
      refreshList();
    } else {
      find(searchFlavor, "flavor");
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CakePage>
      <PageHeader>Cakes</PageHeader>

      <SliderFlexBox>
        <Slider />
      </SliderFlexBox>

      <ToggleSearchBtn isOpen={isOpen} onClick={toggle}>
        Open Search
      </ToggleSearchBtn>

      {isOpen && (
        <SearchMenu>
          <SearchInput
            className='input1'
            type='text'
            placeholder='Search by color'
            value={searchColor}
            onChange={onChangeSearchColor}
          />
          <SearchBtn type='button' onClick={findByColor}>
            Search
          </SearchBtn>
          <SearchInput
            className='input2'
            type='number'
            placeholder='Search by price'
            value={searchPrice}
            onChange={onChangeSearchPrice}
          />
          <SearchBtn type='button' onClick={findByPrice}>
            Search
          </SearchBtn>
          <SearchInput
            type='text'
            placeholder='Search by allergy info'
            value={searchAllergyInfo}
            onChange={onChangeSearchAllergyInfo}
          />
          <SearchBtn type='button' onClick={findByAllergyInfo}>
            Search
          </SearchBtn>

          <SearchSelect onChange={onChangeSearchFlavor}>
            {flavors.map((flavor) => {
              return <option value={flavor}> {flavor.substr(0, 20)} </option>;
            })}
          </SearchSelect>
          <SearchBtn
            className='btn btn-outline-secondary'
            type='button'
            onClick={findByFlavor}
          >
            Search
          </SearchBtn>
        </SearchMenu>
      )}

      <BrowseCakes>
        {cakes.map((cake) => {
          return (
            <Card>
              <p style={{ fontSize: 18, fontWeight: 700, overflow: "hidden" }}>
                {cake.cake_name}
              </p>
              <p style={{ overflow: "hidden" }}>{cake.flavor}</p>
              <p style={{ overflow: "hidden" }}>{cake.price}</p>
            </Card>
          );
        })}
      </BrowseCakes>
    </CakePage>
  );
};

export default Cakes;
