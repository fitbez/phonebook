import React from "react";

const PersonForm = ({
  valueName,
  valueNumber,
  onChangeName,
  addPerson,
  onChangeNumber,
  persons,
  newName
}) => {
  return (
    <div>
      <form>
        <div>
          <input
            className="input-name"
            placeholder="Jhon Doe"
            value={valueName}
            onChange={onChangeName}
          />

          <input
            className="input-number"
            placeholder="xxx-xxx-xxxx"
            value={valueNumber}
            onChange={onChangeNumber}
          />
        </div>
        <div className="btn-btn">
          <button className="btn" type="submit" onClick={addPerson}>
            add new contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
