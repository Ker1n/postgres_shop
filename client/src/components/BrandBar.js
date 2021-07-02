import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

import { Card,  Row } from "react-bootstrap";

export const BrandBar = observer(() => {
  const { device } = React.useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3 mr-2 ml-2"
          style={{ cursor: "pointer" }}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
