import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
// @ts-ignore
// import { Terminal } from "react-window-ui";
import { FaDiscord, FaGithub } from "react-icons/fa";

import logo from "../assets/icon.png";
import ExternalLinkWithText from "./ExternalLinkWithText";
const demo = require("../assets/demo.mp4");

export default function CallToAction() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 4, md: 15 }}
        style={{ paddingTop: "0 !important" }}
        mb={36}
      >
        <img src={logo} alt="Logo" width={120} height={120} style={{
          animation: "bob 0.75s ease-in-out infinite alternate",
        }} />
        <style>
          {`
            @keyframes bob {

import React from 'react';
import { changePriceToUf } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import actions from '@/store/actions';
import { Checkout } from '@/store/reducers/checkout';
import moment from 'moment';
import { useState } from 'react';
import AppButton from '../AppButton';
import AppDropdown from '../AppDropdown';
import AppToggle from '../AppToggle';

const QuoteSummary = ({ quote, onSave }: { quote: Checkout["quote_set"][number]; onSave: () => {} }) => {
  const [editing, setEditing] = useState(false);
  const uf = useAppSelector((state) => state.finance.uf);
  const [settings, setSettings] = useState({
    bill_percentage: quote.plan_object.bill_percentage as PercentageCovered,
    amount_covered: quote.plan_object.amount_covered as AmountCovered,
    deductible: quote.plan_object.deductible as Deductible,
    preventive_package: quote.plan_object.preventive_package
  });

  const dispatch = useAppDispatch();

  const PERCENTAGE_COVERED_OPTIONS = [
    { value: 1, label: "100%" },
    { value: 0.9, label: "90%" },
    { value: 0.8, label: "80%" },
    { value: 0.7, label: "70%" },
  ] as const;
  type PercentageCovered = typeof PERCENTAGE_COVERED_OPTIONS[number]["value"];

  const AMOUNT_COVERED_OPTIONS = [
    {
      value: 40,
      label: changePriceToUf(40, false, uf, 10000, "annual", 0, "down"),
    },
    {
      value: 80,
      label: changePriceToUf(80, false, uf, 10000, "annual", 0, "down"),
    }
  ] as const;
  type AmountCovered = typeof AMOUNT_COVERED_OPTIONS[number]["value"];

  const DEDUCTIBLE_OPTIONS = [
    { value: 0, label: changePriceToUf(0, false, uf, 1000, "annual", 0, "up") },
    {
      value: 1.25,
      label: changePriceToUf(1.25, false, uf, 1000, "annual", 0, "up"),
    },
    {
  );
}

