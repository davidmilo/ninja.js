import { mount, shallow } from "enzyme";
import React from "react";
import { App } from "./App";

const rows = [
  {
    edit_path: "http://google.com",
    email: "MadsLKlausen@jourrapide.com",
    name1: "Mads L. Klausen",
    per_id: 1,
  },
  {
    edit_path: "http://google.com",
    email: "AlfredKKrogh@armyspy.com",
    name1: "Alfred K. Krogh",
    per_id: 2,
  },
  {
    edit_path: "http://google.com",
    email: "SilasLBertelsen@armyspy.com",
    name1: "Silas L. Bertelsen",
    per_id: 3,
  },
  {
    edit_path: "http://google.com",
    email: "MiaAJohnsen@dayrep.com",
    name1: "Mia A. Johnsen",
    per_id: 4,
  },
  {
    edit_path: "http://google.com",
    email: "AlfredSSchou@jourrapide.com",
    name1: "Alfred S. Schou",
    per_id: 5,
  },
];

it("renders without crashing", () => {
  shallow(<App locale="da" rows={[]} rowsPerPage={5} />);
});

it("renders 5 rows", () => {
  const wrapper = mount(<App locale="da" rows={rows} rowsPerPage={5} />);
  expect(wrapper.find("tr").length).toBe(5);
});

it("filters rows based on input", () => {
  const wrapper = mount(<App locale="da" rows={rows} rowsPerPage={5} />);
  wrapper.find("input").simulate("change", { target: { value: "k" } });
  expect(wrapper.find("tr").length).toBe(2);
});
