import { ProductType } from "@/types";
import React from "react";
import DataTable from "./tableContainer/DataTable";
import {
  productColumns,
  filterInventory,
  filterPublishment,
  dateRangeFilter,
} from "./tableColumns/ProductColumns";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";

const ProductsTable = () => {
  const fakeProducts: ProductType[] = [
    {
      _id: "01JDCS6YVJVVSKM6EFFXAVZSGV",
      name: "Lid - 10,12,16 Oz",
      price: 802.0,
      inventory: 14,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description:
        "Excision of Uterus, Via Natural or Artificial Opening, Diagnostic",
      category: "bike",
      score: 2,
      customPart: true,
      isPublished: true,
      createdAt: "2024-10-26T22:48:34Z",
      updatedAt: "2024-07-19T05:14:28Z",
    },
    {
      _id: "01JDCS6Z37NZCF871NVKAZ1ZST",
      name: "Pepper - Cubanelle",
      price: 498.83,
      inventory: 2,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Replacement of Right Thorax Tendon with Synthetic Substitute, Percutaneous Endoscopic Approach",
      category: "car",
      score: 4,
      customPart: true,
      isPublished: true,
      createdAt: "2024-09-19T01:17:47Z",
      updatedAt: "2024-03-05T22:55:10Z",
    },
    {
      _id: "01JDCS6Z398A2X74W63901GP2G",
      name: "Butter - Salted",
      price: 185.49,
      inventory: 20,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Computerized Tomography (CT Scan) of Left Pulmonary Artery using High Osmolar Contrast",
      category: "bike",
      score: 1,
      customPart: false,
      isPublished: false,
      createdAt: "2023-12-27T19:36:54Z",
      updatedAt: "2024-08-23T21:48:39Z",
    },
    {
      _id: "01JDCS6Z3ANEA1JC3YZNGYD03V",
      name: "Wine - Fat Bastard Merlot",
      price: 991.92,
      inventory: 20,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Drainage of Right Upper Extremity Bursa and Ligament, Open Approach",
      category: "car",
      score: 4,
      customPart: true,
      isPublished: false,
      createdAt: "2024-09-01T11:24:17Z",
      updatedAt: "2024-01-05T05:46:54Z",
    },
    {
      _id: "01JDCS6Z3B797V5D1S61NY2RCB",
      name: "Chives - Fresh",
      price: 382.21,
      inventory: 15,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Supplement Lumbosacral Joint with Synthetic Substitute, Open Approach",
      category: "scooter",
      score: 2,
      customPart: true,
      isPublished: true,
      createdAt: "2024-08-23T08:59:54Z",
      updatedAt: "2023-12-31T01:08:01Z",
    },
    {
      _id: "01JDCS6Z3CJY36074Z6S2P2RZJ",
      name: "Pectin",
      price: 859.06,
      inventory: 3,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Restriction of Left Axillary Lymphatic, Percutaneous Endoscopic Approach",
      category: "scooter",
      score: 2,
      customPart: false,
      isPublished: false,
      createdAt: "2024-03-05T06:15:24Z",
      updatedAt: "2023-12-26T13:36:53Z",
    },
    {
      _id: "01JDCS6Z3EXXHGCYTWNG83KD1Y",
      name: "Beer - Muskoka Cream Ale",
      price: 502.46,
      inventory: 17,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description:
        "Fusion of Cervicothoracic Vertebral Joint with Nonautologous Tissue Substitute, Anterior Approach, Anterior Column, Percutaneous Approach",
      category: "bike",
      score: 2,
      customPart: false,
      isPublished: false,
      createdAt: "2024-02-20T06:20:22Z",
      updatedAt: "2024-09-27T11:07:04Z",
    },
    {
      _id: "01JDCS6Z3FGZ1PW0RAXERB9PFE",
      name: "Oranges",
      price: 354.95,
      inventory: 11,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description:
        "Revision of Stimulator Lead in Ureter, Percutaneous Endoscopic Approach",
      category: "bike",
      score: 3,
      customPart: true,
      isPublished: true,
      createdAt: "2024-11-22T05:01:19Z",
      updatedAt: "2024-02-09T17:28:58Z",
    },
    {
      _id: "01JDCS6Z3G7N245X5EKBVS7ABE",
      name: "Flour - Teff",
      price: 359.59,
      inventory: 5,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description: "Repair Left Foot, Open Approach",
      category: "bike",
      score: 4,
      customPart: true,
      isPublished: true,
      createdAt: "2024-02-08T23:45:07Z",
      updatedAt: "2024-03-24T06:17:20Z",
    },
    {
      _id: "01JDCS6Z3H2EVQTGSAS4699ZXW",
      name: "Yukon Jack",
      price: 808.79,
      inventory: 3,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description:
        "Bypass Left Popliteal Artery to Lower Extremity Artery, Percutaneous Endoscopic Approach",
      category: "bike",
      score: 4,
      customPart: true,
      isPublished: true,
      createdAt: "2024-10-25T07:58:44Z",
      updatedAt: "2023-12-04T02:47:38Z",
    },
    {
      _id: "01JDCS6Z3JHK2A3HWZVZWCKRFC",
      name: "Cheese - Wine",
      price: 972.95,
      inventory: 13,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Inspection of Mouth and Throat, Via Natural or Artificial Opening Endoscopic",
      category: "car",
      score: 3,
      customPart: true,
      isPublished: true,
      createdAt: "2024-03-01T07:54:45Z",
      updatedAt: "2023-11-26T00:19:02Z",
    },
    {
      _id: "01JDCS6Z3KTQKGM1DVNGDAEKXZ",
      name: "Veal - Round, Eye Of",
      price: 891.31,
      inventory: 1,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Restriction of Right Common Carotid Artery with Bioactive Intraluminal Device, Percutaneous Approach",
      category: "scooter",
      score: 3,
      customPart: false,
      isPublished: true,
      createdAt: "2024-03-29T11:46:06Z",
      updatedAt: "2024-03-21T16:25:26Z",
    },
    {
      _id: "01JDCS6Z3NX1R8GWPXJPJR9HQR",
      name: "Wine - Red, Mosaic Zweigelt",
      price: 729.46,
      inventory: 12,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Alteration of Right Lower Leg with Autologous Tissue Substitute, Open Approach",
      category: "scooter",
      score: 2,
      customPart: false,
      isPublished: false,
      createdAt: "2024-07-09T17:51:01Z",
      updatedAt: "2024-04-02T17:36:53Z",
    },
    {
      _id: "01JDCS6Z3PFRKFYM2XARW63YTZ",
      name: "Pants Custom Dry Clean",
      price: 909.73,
      inventory: 18,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description:
        "Computerized Tomography (CT Scan) of Chest, Abdomen and Pelvis using Low Osmolar Contrast, Unenhanced and Enhanced",
      category: "scooter",
      score: 3,
      customPart: true,
      isPublished: true,
      createdAt: "2024-03-15T23:36:17Z",
      updatedAt: "2024-07-11T02:09:47Z",
    },
    {
      _id: "01JDCS6Z3QZB956TVS57QA5R8F",
      name: "Yogurt - Banana, 175 Gr",
      price: 230.55,
      inventory: 9,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Bypass Left Common Iliac Artery to Left External Iliac Artery with Autologous Venous Tissue, Open Approach",
      category: "scooter",
      score: 1,
      customPart: false,
      isPublished: false,
      createdAt: "2024-10-24T10:04:33Z",
      updatedAt: "2024-07-16T06:28:22Z",
    },
    {
      _id: "01JDCS6Z3R452TWSJXFS3HT97G",
      name: "Latex Rubber Gloves Size 9",
      price: 423.56,
      inventory: 18,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description:
        "Insertion of External Fixation Device into Right Radius, Percutaneous Endoscopic Approach",
      category: "car",
      score: 4,
      customPart: true,
      isPublished: true,
      createdAt: "2024-10-16T16:04:04Z",
      updatedAt: "2024-08-06T10:33:26Z",
    },
    {
      _id: "01JDCS6Z3S9JWYHQY718HV7R9P",
      name: "Stock - Veal, Brown",
      price: 254.87,
      inventory: 16,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Dilation of Right Subclavian Artery with Two Drug-eluting Intraluminal Devices, Open Approach",
      category: "car",
      score: 3,
      customPart: false,
      isPublished: false,
      createdAt: "2023-11-30T16:17:46Z",
      updatedAt: "2024-05-03T11:26:46Z",
    },
    {
      _id: "01JDCS6Z3V0517BP037QY0KE9D",
      name: "Sprouts - Baby Pea Tendrils",
      price: 854.53,
      inventory: 4,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description:
        "Bypass Left Pleural Cavity to Left Pleural Cavity with Synthetic Substitute, Open Approach",
      category: "scooter",
      score: 2,
      customPart: true,
      isPublished: false,
      createdAt: "2023-11-28T11:52:06Z",
      updatedAt: "2024-04-09T23:46:00Z",
    },
    {
      _id: "01JDCS6Z3W0RXACA05HKW1RHD7",
      name: "Calypso - Pineapple Passion",
      price: 779.9,
      inventory: 3,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description: "Drainage of Right Brachial Artery, Open Approach",
      category: "scooter",
      score: 3,
      customPart: false,
      isPublished: true,
      createdAt: "2024-01-22T10:37:14Z",
      updatedAt: "2024-05-31T05:25:02Z",
    },
    {
      _id: "01JDCS6Z3XZ1ZGN6SX4HWPS2XD",
      name: "Chivas Regal - 12 Year Old",
      price: 333.26,
      inventory: 1,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Drainage of Right Kidney with Drainage Device, Percutaneous Endoscopic Approach",
      category: "bike",
      score: 1,
      customPart: false,
      isPublished: true,
      createdAt: "2024-03-07T13:46:50Z",
      updatedAt: "2024-08-16T10:07:36Z",
    },
    {
      _id: "01JDCS6Z3Y4AB0KF84AYB3TC77",
      name: "Sandwich Wrap",
      price: 775.7,
      inventory: 17,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description:
        "Supplement Right Neck Muscle with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
      category: "car",
      score: 3,
      customPart: false,
      isPublished: true,
      createdAt: "2024-04-29T05:22:34Z",
      updatedAt: "2024-10-22T01:20:39Z",
    },
    {
      _id: "01JDCS6Z3ZKNQHQQQXWSN836BE",
      name: "Lamb - Bones",
      price: 471.94,
      inventory: 16,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description: "Excision of Glomus Jugulare, Open Approach",
      category: "car",
      score: 3,
      customPart: true,
      isPublished: false,
      createdAt: "2024-10-01T13:52:10Z",
      updatedAt: "2024-07-20T16:42:38Z",
    },
    {
      _id: "01JDCS6Z408C78BE9067SDJART",
      name: "Venison - Denver Leg Boneless",
      price: 220.73,
      inventory: 15,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Drainage of Bilateral Adrenal Glands with Drainage Device, Open Approach",
      category: "bike",
      score: 5,
      customPart: false,
      isPublished: true,
      createdAt: "2024-08-03T20:00:14Z",
      updatedAt: "2024-10-01T04:02:19Z",
    },
    {
      _id: "01JDCS6Z425HB1T9HVKDPZ0074",
      name: "Oil - Pumpkinseed",
      price: 656.05,
      inventory: 3,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description:
        "Drainage of Right Brachial Artery, Percutaneous Approach, Diagnostic",
      category: "car",
      score: 1,
      customPart: true,
      isPublished: true,
      createdAt: "2024-01-31T15:17:26Z",
      updatedAt: "2024-10-11T02:54:14Z",
    },
    {
      _id: "01JDCS6Z444S6QKJH7117TGJZD",
      name: "Juice - Orange 1.89l",
      price: 670.28,
      inventory: 3,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Drainage of Right Upper Extremity Lymphatic, Percutaneous Approach, Diagnostic",
      category: "scooter",
      score: 1,
      customPart: false,
      isPublished: false,
      createdAt: "2024-05-17T14:29:01Z",
      updatedAt: "2024-09-26T03:01:37Z",
    },
    {
      _id: "01JDCS6Z458WJQ895TXZJ7ECDW",
      name: "Potatoes - Purple, Organic",
      price: 365.59,
      inventory: 7,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Replacement of Right Occipital Bone with Nonautologous Tissue Substitute, Open Approach",
      category: "scooter",
      score: 5,
      customPart: true,
      isPublished: false,
      createdAt: "2024-04-24T01:16:58Z",
      updatedAt: "2024-11-14T22:16:08Z",
    },
    {
      _id: "01JDCS6Z46WSBA90VN7EGVR59G",
      name: "Tomatoes - Plum, Canned",
      price: 401.27,
      inventory: 11,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Dilation of Left Hand Artery, Bifurcation, with Four or More Drug-eluting Intraluminal Devices, Percutaneous Approach",
      category: "bike",
      score: 2,
      customPart: false,
      isPublished: true,
      createdAt: "2024-03-25T04:11:04Z",
      updatedAt: "2024-03-10T01:53:02Z",
    },
    {
      _id: "01JDCS6Z48Q9ZZE7FGY1FHA83F",
      name: "Veal - Kidney",
      price: 335.5,
      inventory: 8,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description: "Excision of Left Metatarsal-Tarsal Joint, Open Approach",
      category: "car",
      score: 4,
      customPart: true,
      isPublished: false,
      createdAt: "2024-06-24T12:15:01Z",
      updatedAt: "2024-04-19T18:13:45Z",
    },
    {
      _id: "01JDCS6Z49SP30REN8ZXHWC7QT",
      name: "Appetizer - Tarragon Chicken",
      price: 538.56,
      inventory: 12,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description:
        "Destruction of Left Femoral Vein, Percutaneous Endoscopic Approach",
      category: "car",
      score: 5,
      customPart: true,
      isPublished: true,
      createdAt: "2024-04-24T02:17:21Z",
      updatedAt: "2024-07-02T20:10:27Z",
    },
    {
      _id: "01JDCS6Z4AC0S7YW2DAD9HQ1V2",
      name: "Lumpfish Black",
      price: 904.66,
      inventory: 1,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description:
        "Computerized Tomography (CT Scan) of Left Humerus using High Osmolar Contrast",
      category: "scooter",
      score: 2,
      customPart: false,
      isPublished: true,
      createdAt: "2024-06-26T11:18:05Z",
      updatedAt: "2024-08-08T05:25:47Z",
    },
    {
      _id: "01JDCS6Z4D03G438XWJDXYQSC9",
      name: "Coffee - Decafenated",
      price: 231.82,
      inventory: 20,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Supplement of Right Lower Leg Subcutaneous Tissue and Fascia with Nonautologous Tissue Substitute, Open Approach",
      category: "scooter",
      score: 5,
      customPart: false,
      isPublished: true,
      createdAt: "2024-06-23T01:05:19Z",
      updatedAt: "2024-10-22T16:25:44Z",
    },
    {
      _id: "01JDCS6Z4E9G33HT0T2C01705G",
      name: "Crackers - Water",
      price: 604.42,
      inventory: 3,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description: "Insertion of Spacer into Right Wrist Joint, Open Approach",
      category: "scooter",
      score: 5,
      customPart: false,
      isPublished: true,
      createdAt: "2024-09-10T09:27:30Z",
      updatedAt: "2024-03-17T16:40:58Z",
    },
    {
      _id: "01JDCS6Z4GH78VYRMXWYRD2E5C",
      name: "Sugar - Fine",
      price: 719.88,
      inventory: 11,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description: "Drainage of Sacrum, Percutaneous Approach, Diagnostic",
      category: "bike",
      score: 3,
      customPart: true,
      isPublished: true,
      createdAt: "2024-11-17T20:04:35Z",
      updatedAt: "2024-11-20T04:58:19Z",
    },
    {
      _id: "01JDCS6Z4J4TKKP7ZFVWNRX44M",
      name: "Longos - Cheese Tortellini",
      price: 320.35,
      inventory: 3,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description: "Reposition Skull, Percutaneous Approach",
      category: "car",
      score: 4,
      customPart: true,
      isPublished: false,
      createdAt: "2024-02-24T22:53:52Z",
      updatedAt: "2024-10-12T15:59:31Z",
    },
    {
      _id: "01JDCS6Z4MRFAWBMQS0QK6R7BY",
      name: "Juice - Prune",
      price: 111.52,
      inventory: 7,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Supplement Left Upper Extremity Bursa and Ligament with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
      category: "bike",
      score: 2,
      customPart: true,
      isPublished: false,
      createdAt: "2024-05-09T17:05:32Z",
      updatedAt: "2024-01-25T17:42:53Z",
    },
    {
      _id: "01JDCS6Z4N1ASGSKE448C7TXB3",
      name: "Beef - Cow Feet Split",
      price: 580.41,
      inventory: 0,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Drainage of Left External Iliac Artery, Percutaneous Approach",
      category: "car",
      score: 4,
      customPart: true,
      isPublished: false,
      createdAt: "2024-05-30T22:17:09Z",
      updatedAt: "2024-02-25T14:08:27Z",
    },
    {
      _id: "01JDCS6Z4P6J972FAWQ312KAX4",
      name: "Coffee Cup 8oz 5338cd",
      price: 634.35,
      inventory: 8,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description:
        "Augmentative/Alternative Communication System Assessment using Other Equipment",
      category: "bike",
      score: 2,
      customPart: false,
      isPublished: true,
      createdAt: "2024-11-03T07:09:26Z",
      updatedAt: "2024-08-06T18:04:03Z",
    },
    {
      _id: "01JDCS6Z4S66DW5YC3HRRZGMY6",
      name: "Puree - Raspberry",
      price: 487.32,
      inventory: 3,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Introduction of Other Therapeutic Substance into Peripheral Artery, Percutaneous Approach",
      category: "scooter",
      score: 3,
      customPart: false,
      isPublished: true,
      createdAt: "2024-07-10T06:42:45Z",
      updatedAt: "2023-12-07T22:43:44Z",
    },
    {
      _id: "01JDCS6Z4VR26CKK7KT4D5Q7CJ",
      name: "Wine - Ej Gallo Sonoma",
      price: 915.42,
      inventory: 2,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Drainage of Multiple Parathyroid Glands, Percutaneous Approach, Diagnostic",
      category: "car",
      score: 4,
      customPart: false,
      isPublished: true,
      createdAt: "2024-02-09T17:58:39Z",
      updatedAt: "2024-06-15T09:45:50Z",
    },
    {
      _id: "01JDCS6Z4W7FRDQ9SPXWAG1HP9",
      name: "Quail - Jumbo",
      price: 699.96,
      inventory: 3,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description: "Destruction of Right Mastoid Sinus, Open Approach",
      category: "scooter",
      score: 3,
      customPart: false,
      isPublished: true,
      createdAt: "2024-01-26T08:12:47Z",
      updatedAt: "2024-09-29T20:29:55Z",
    },
    {
      _id: "01JDCS6Z4XK60F9ES3JVH9SXV2",
      name: "Chocolate - Sugar Free Semi Choc",
      price: 302.59,
      inventory: 6,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description:
        "Drainage of Left Hepatic Duct, Percutaneous Endoscopic Approach, Diagnostic",
      category: "car",
      score: 3,
      customPart: true,
      isPublished: true,
      createdAt: "2024-08-01T18:47:48Z",
      updatedAt: "2023-12-01T20:19:24Z",
    },
    {
      _id: "01JDCS6Z4YDJ7DJYEPJZSF0JF0",
      name: "Bar - Sweet And Salty Chocolate",
      price: 492.94,
      inventory: 14,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Supplement Lingula Bronchus with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
      category: "car",
      score: 2,
      customPart: true,
      isPublished: false,
      createdAt: "2024-11-19T21:27:16Z",
      updatedAt: "2024-04-23T01:45:05Z",
    },
    {
      _id: "01JDCS6Z4ZJA9WCGFJ61TRDV2W",
      name: "Grouper - Fresh",
      price: 203.85,
      inventory: 0,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description: "Excision of Optic Nerve, Percutaneous Approach, Diagnostic",
      category: "scooter",
      score: 2,
      customPart: false,
      isPublished: true,
      createdAt: "2024-05-04T15:49:30Z",
      updatedAt: "2024-04-21T18:20:35Z",
    },
    {
      _id: "01JDCS6Z51VQ7VZ0F0H0YZ6WFB",
      name: "Ice Cream - Strawberry",
      price: 886.02,
      inventory: 15,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Supplement Mitral Valve with Autologous Tissue Substitute, Open Approach",
      category: "bike",
      score: 1,
      customPart: false,
      isPublished: true,
      createdAt: "2024-02-25T17:46:22Z",
      updatedAt: "2024-02-02T10:33:40Z",
    },
    {
      _id: "01JDCS6Z526RNDQPEP1GYKM5ZM",
      name: "Sole - Fillet",
      price: 740.76,
      inventory: 4,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description:
        "Extirpation of Matter from Left Common Iliac Artery, Percutaneous Approach",
      category: "bike",
      score: 5,
      customPart: false,
      isPublished: false,
      createdAt: "2024-02-22T14:23:27Z",
      updatedAt: "2024-10-22T11:35:50Z",
    },
    {
      _id: "01JDCS6Z534T71EDTFVXMVTXPD",
      name: "Container Clear 8 Oz",
      price: 979.9,
      inventory: 14,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description: "Release Left Palatine Bone, Open Approach",
      category: "scooter",
      score: 4,
      customPart: false,
      isPublished: false,
      createdAt: "2024-01-03T11:27:33Z",
      updatedAt: "2024-11-01T10:51:34Z",
    },
    {
      _id: "01JDCS6Z55RXMKBYM938QGM16E",
      name: "Food Colouring - Red",
      price: 283.94,
      inventory: 10,
      gallery: ["/images/product-fallback.png"],
      options: ["remote control"],
      description:
        "Occlusion of Bilateral Fallopian Tubes with Extraluminal Device, Percutaneous Approach",
      category: "car",
      score: 2,
      customPart: true,
      isPublished: true,
      createdAt: "2024-10-06T08:12:29Z",
      updatedAt: "2024-03-12T22:50:43Z",
    },
    {
      _id: "01JDCS6Z56FY0QQ99EHXNMM9EE",
      name: "Table Cloth 53x53 White",
      price: 511.36,
      inventory: 15,
      gallery: ["/images/product-fallback.png"],
      options: ["bluetooth"],
      description:
        "Supplement of Right Eye with Nonautologous Tissue Substitute, Percutaneous Approach",
      category: "car",
      score: 3,
      customPart: true,
      isPublished: false,
      createdAt: "2023-11-29T13:03:40Z",
      updatedAt: "2024-07-15T19:03:09Z",
    },
    {
      _id: "01JDCS6Z57HNGBQT41AJZVT7C1",
      name: "Wine - Remy Pannier Rose",
      price: 465.77,
      inventory: 10,
      gallery: ["/images/product-fallback.png"],
      options: ["4x24v gearbox"],
      description:
        "Occlusion of Left Subclavian Artery with Extraluminal Device, Percutaneous Approach",
      category: "car",
      score: 4,
      customPart: false,
      isPublished: false,
      createdAt: "2023-12-16T04:33:49Z",
      updatedAt: "2024-08-20T18:09:56Z",
    },
    {
      _id: "01JDCS6Z581MB8HQ750281P6C2",
      name: "Beef - Top Sirloin",
      price: 184.97,
      inventory: 20,
      gallery: ["/images/product-fallback.png"],
      options: ["3.5mm audio input"],
      description:
        "Dilation of Left Renal Artery with Three Drug-eluting Intraluminal Devices, Percutaneous Approach",
      category: "scooter",
      score: 4,
      customPart: true,
      isPublished: false,
      createdAt: "2024-04-22T08:24:50Z",
      updatedAt: "2023-12-17T03:36:02Z",
    },
  ];

  return (
    <DataTable
      tableData={fakeProducts}
      dataColumnsDef={productColumns}
      filterFns={{ filterInventory, filterPublishment, dateRangeFilter }}
      extraAction={
        <Link
          href="/admin/products/add"
          className={cn(buttonVariants({ size: "sm" }))}
        >
          Add New Product
          <SquarePlus className="text-white" />
        </Link>
      }
    />
  );
};

export default ProductsTable;
