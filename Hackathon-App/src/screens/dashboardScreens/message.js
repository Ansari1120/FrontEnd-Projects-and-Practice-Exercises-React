import React from "react";
import Input from "../../components/Input";
import MySwitch from "../../components/Switch";
import Dashboard from "../dashboard";

export default function Message() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <MySwitch
        checked={checked}
        handleChange={handleChange}
        label="disable logout"
      />
      <Dashboard checked={checked} />
      <Input label="Enter SOmething" />
    </div>
  );
}
