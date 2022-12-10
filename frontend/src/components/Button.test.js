import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./Button.jsx";
import SignupModal from "./SignupModal";

// Unit Tests

// test("button should be disabled when modal opens", () => {
//   render(
//     <Button isDisabled={true} text={"Hello World"} clickHandler={() => {}} />
//   );

//   expect(screen.getByRole("button", { name: "Hello World" })).toBeDisabled();
//   expect(screen.getByRole("button", { name: "Hello World" })).toHaveTextContent(
//     "Hello World"
//   );
// });

// test("First Name field should be empty when modal opens", () => {
//   render(
//     <SignupModal
//       handleSignupClose={() => {}}
//       handleTransition={() => {}}
//       openSignup={() => {}}
//     />
//   );

//   expect(screen.getByRole('textbox', {  name: /first name/i})).toHaveTextContent("")
// });

// Integration Test

// test("Testing first name field and button is disabled when modal loads", () => {
//   render(
//     <Button isDisabled={true} text={"Hello World"} clickHandler={() => {}} />
//   );

//   expect(screen.getByRole("button", { name: "Hello World" })).toBeDisabled();
//   expect(screen.getByRole("button", { name: "Hello World" })).toHaveTextContent(
//     "Hello World"
//   );


//   render(
//     <SignupModal
//       handleSignupClose={() => {}}
//       handleTransition={() => {}}
//       openSignup={() => {}}
//     />
//   );

  
//   expect(screen.getByRole('textbox', {  name: /first name/i})).toHaveTextContent("")
// });
