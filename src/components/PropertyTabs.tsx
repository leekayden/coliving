import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PropertyList } from "../global/data";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
    property: string;
}

export default function BasicTabs({property}: BasicTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const filteredList = PropertyList.find((item) => item.title === property);

  return (
    <Box sx={{ width: "100%", padding: "7px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Room Features" {...a11yProps(0)} />
          <Tab label="Apartment Features" {...a11yProps(1)} />
          <Tab label="Common Facilities" {...a11yProps(2)} />
          <Tab label="Transport" {...a11yProps(3)} />
          <Tab label="Surrounding Amenities" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul>
          {filteredList?.roomFeatures.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
    </Box>
  );
}
