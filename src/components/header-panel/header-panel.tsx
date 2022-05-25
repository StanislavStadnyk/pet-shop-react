import React from "react";
import { InputGroup, InputGroupText, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";

// styles
import "./header-panel.scss";

const HeaderPanel = () => {
  return (
    <header className="header-panel">
      <div className="header-panel__info">
        <h1 className="header-panel__title">Paww petshop</h1>
        <span className="header-panel__id">PetshopId: 34234234</span>
      </div>

      <div className="header-panel__config">
        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <Input placeholder="username" />
        </InputGroup>

        <Button color="info" outline>
          <FontAwesomeIcon icon={faAnchor} />
        </Button>
      </div>
    </header>
  );
};

export default HeaderPanel;
