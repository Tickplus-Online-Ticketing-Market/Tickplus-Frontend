import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import PhoneInput from "./PhoneInput";
import Checkbox from "./Checkbox";

export default function Customfoam({ visible, onClose }) {
  const [isChecked, setIsChecked] = useState(false);
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [confirmClicked, setConfirmClicked] = useState(false); // New state

  if (!visible) return null;

  const handleConfirm = () => {
    setConfirmClicked(true); // Set confirmClicked to true when confirm button is clicked

    if (!isChecked) {
      toast.error("Please accept the terms and conditions.");
      return;
    }

    if (!fullname.trim()) {
      setNameError("Name field cannot be empty");
      return;
    }

    if (!phoneNumber) {
      setPhoneError("Phone number cannot be empty");
      return;
    }

    if (phoneNumber.length < 10) {
      setPhoneError("Phone number must be 10 digits long");
      return;
    }

    // If all validations pass, proceed with the confirm action
    handleCreate();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
    setNameError("");
  };

  const handlePhoneChange = (value) => {
    if (!value) {
      setPhoneNumber("");
      setPhoneError(confirmClicked ? "Phone number cannot be empty" : "");
    } else if (isNaN(value)) {
      setPhoneNumber("");
      setPhoneError(
        confirmClicked ? "Please enter only numeric characters" : ""
      );
    } else if (value.length !== 10) {
      setPhoneNumber(value);
      setPhoneError(
        confirmClicked ? "Phone number must be 10 digits long" : ""
      );
    } else {
      setPhoneNumber(value);
      setPhoneError("");
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3030/ticket-launching/customfoam",
        {
          fullname,
          phoneNumber,
        }
      );

      if (response.data.customfoam) {
        toast.success("Record saved successfully!");
        onClose();
      } else {
        toast.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error creating customfoam:", error);
      toast.error("Failed to save data");
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-accent bg-opacity-0 backdrop-blur-sm flex justify-center items-center shadow-2xl">
        <div className="bg-secondary shadow-2xl border border-primary outline-transparent h-[37rem] w-2/5 p-2 rounded-lg">
          <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb scrollbar-track h-[36rem] overflow-y-scroll">
            <div className="font-bold text-primary flex justify-center text-3xl pt-2 pb-1">
              Consultation Service
            </div>
            <div className="text-accent pl-4 pb-2 text-lg">
              We are bound to provide a quality service for you
            </div>
            <div className="text-accent font-bold text-2xl pl-4 ">
              Enter your Name
            </div>
            <div className="pl-4 pb-4 ">
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={handleFullnameChange}
                className="mt-1 block w-[28rem] p-2 border border-primary rounded-md shadow-lg text-base"
                placeholder="Your full name"
              />
              {nameError && (
                <div className="text-red font-semibold text-base">
                  {nameError}
                </div>
              )}
            </div>

            <div className="text-accent font-bold text-2xl pl-4 ">
              Enter your Phone Number
            </div>
            <PhoneInput onChange={handlePhoneChange} />

            {phoneError && (
              <div className="text-red pl-4 font-semibold text-base ">
                {phoneError}
              </div>
            )}
            <div className="text-accent font-bold text-2xl pl-4 pt-4 ">
              Description
            </div>

            <div className="pt-2 pl-3">
              <div className=" bg-background border border-primary h-40 pb-2 w-11/12 shadow-xl rounded-lg">
                <input
                  className="pl-2 h-40 pb-32 w-full"
                  placeholder="Add Your Description..."
                />
              </div>

              <div className="pt-8">
                <div
                  className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb scrollbar-track overflow-y-scroll 
           bg-background border border-primary w-11/12 h-40 pb-2 shadow-xl rounded-lg"
                >
                  <div className="flex justify-center text-2xl font-semibold p-2">
                    Terms and Conditions
                  </div>
                  <div className="text-xl font-semibold m-2 pl-2">
                    Introduction
                  </div>
                  <div className="text-base pl-3 pb-2">
                    These terms and conditions govern the customization services
                    offered by Tickplus for event tickets. By using our
                    Services, you agree to comply with and be bound by the
                    following terms and conditions.
                  </div>
                  <div className="text-xl font-semibold m-2 pl-2 pb-2">
                    Customization Process
                  </div>
                  <div className="text-base pl-3 pb-2">
                    1.{" "}
                    <strong className="font-semibold">Order Submission:</strong>{" "}
                    Customers must provide accurate and complete information
                    when placing an order for ticket customization.
                  </div>
                  <div className="text-base pl-3 pb-2">
                    2.{" "}
                    <strong className="font-semibold">Proof Approval:</strong>{" "}
                    Once the customization is done, we will provide a proof for
                    your review and approval. It is your responsibility to
                    review the proof carefully for any errors or discrepancies.
                  </div>
                  <div className="text-base pl-3 pb-2">
                    3.{" "}
                    <strong className="font-semibold">
                      Approval Deadline:
                    </strong>{" "}
                    Any delays in approving the proof beyond the specified
                    deadline may result in delays in the delivery of the
                    customized tickets.
                  </div>
                  <div className="text-xl font-semibold m-2 pl-2">
                    Payment Terms
                  </div>
                  <div className="text-base pl-3 pb-2">
                    1. <strong className="font-semibold">Payment:</strong>{" "}
                    Payment for the Services is due at the time of order
                    placement unless otherwise agreed upon in writing.
                  </div>
                  <div className="text-base pl-3 pb-2">
                    1. <strong className="font-semibold">Refunds:</strong>{" "}
                    Customized tickets are non-refundable once the customization
                    process has begun.
                  </div>
                  <div className="text-xl font-semibold m-2 pl-2">
                    Contact Us
                  </div>
                  <div className="text-base pl-3 pb-2">
                    If you have any questions or concerns regarding these terms
                    and conditions, please contact us at Tickplus@lk
                  </div>
                </div>
              </div>
            </div>

            <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />

            <div className="flex justify-end pr-4 pt-4 gap-3">
              <button
                onClick={handleConfirm}
                className="bg-accent h-10 w-28 font-bold rounded-full py-2 text-background 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-accent duration-300"
              >
                Confirm
              </button>
              <button
                onClick={onClose}
                className="bg-primary h-10 w-28 font-bold rounded-full py-2 text-background 
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-primary duration-300"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
