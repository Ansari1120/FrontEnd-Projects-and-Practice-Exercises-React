import MyButton from "../../components/Button";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MyRadioButton from "../../components/RadioButton";

export default function Notify() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <div>
      <MyButton label={"mybutton"} startIcon={<AcUnitIcon />} />
      <MyRadioButton
        value={value}
        error={error}
        variant="standard"
        handleSubmit={handleSubmit}
        handleRadioChange={handleRadioChange}
        helperText={helperText}
      />
    </div>
  );
}
