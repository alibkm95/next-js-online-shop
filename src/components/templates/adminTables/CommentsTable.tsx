import { CommentType } from "@/types";
import {
  CommentColumns,
  dateRangeFilter,
  emailFilter,
  productFilter,
} from "./tableColumns/CommentColumns";
import DataTable from "./tableContainer/DataTable";

const CommentsTable = () => {
  const fakeComments: CommentType[] = [
    {
      _id: "01JDHE27KGNYQKDP43CBTSHBHC",
      product: {
        _id: "01JDHE27KHAT528YQEP1KZ8XP1",
        name: "Bread - White Mini Epi",
      },
      user: {
        _id: "01JDHE27KHCT79C1MTX0GA4CJN",
        fullName: "Mitchael Yuill",
        email: "myuill0@abc.net.au",
        avatar: "/images/user3.png",
      },
      commentText: "Hydroxyapatite deposition disease, left knee",
      score: 5,
      status: "rejected",
      createdAt: "2024-02-08T06:30:34Z",
      updatedAt: "2024-03-29T00:05:37Z",
    },
    {
      _id: "01JDHE27KM5D9HX1EA49QCYHKE",
      product: {
        _id: "01JDHE27KMHT521A3HM42JQNTP",
        name: "Coffee - Almond Amaretto",
      },
      user: {
        _id: "01JDHE27KNRKXD5MVAVE5F6PW2",
        fullName: "Rebe Scoggin",
        email: "rscoggin1@toplist.cz",
        avatar: "/images/user2.png",
      },
      commentText: "Oth inflammatory spondylopathies, occipt-atlan-ax region",
      score: 2,
      status: "rejected",
      createdAt: "2024-11-10T00:20:01Z",
      updatedAt: "2024-04-07T07:44:51Z",
    },
    {
      _id: "01JDHE27KP54FR17QZ03ZQ177M",
      product: {
        _id: "01JDHE27KP8B6HRTSAEBD2B6R9",
        name: "Puree - Pear",
      },
      user: {
        _id: "01JDHE27KQDSSVZ8QE1J10131S",
        fullName: "Chrissy Fiddeman",
        email: "cfiddeman2@sciencedaily.com",
        avatar: "/images/user2.png",
      },
      commentText: "Partial traumatic amputation at knee level, unsp lower leg",
      score: 2,
      status: "approved",
      createdAt: "2024-08-14T01:02:28Z",
      updatedAt: "2024-09-13T22:17:52Z",
    },
    {
      _id: "01JDHE27KR1FVX3JQHXPRZBNXV",
      product: {
        _id: "01JDHE27KR4G7VJ19T71XFT1R2",
        name: "Parasol Pick Stir Stick",
      },
      user: {
        _id: "01JDHE27KSVP6YGVYWKY0T291W",
        fullName: "Jenda Adger",
        email: "jadger3@jimdo.com",
        avatar: "/images/user4.png",
      },
      commentText:
        "Legal intervnt w injury by handgun, law enforc offl injured",
      score: 4,
      status: "approved",
      createdAt: "2024-11-07T05:37:52Z",
      updatedAt: "2023-12-19T05:00:40Z",
    },
    {
      _id: "01JDHE27KTWMZKNXRXBAEHJBTG",
      product: {
        _id: "01JDHE27KT8VWJF2RXMGNKMJ1D",
        name: "Whmis - Spray Bottle Trigger",
      },
      user: {
        _id: "01JDHE27KV9WB9QDYEGY5T3763",
        fullName: "Camala Dreng",
        email: "cdreng4@etsy.com",
        avatar: "/images/user1.png",
      },
      commentText: "Thrombosis due to nervous system prosth dev/grft",
      score: 1,
      status: "rejected",
      createdAt: "2024-09-04T11:09:23Z",
      updatedAt: "2024-05-21T08:18:02Z",
    },
    {
      _id: "01JDHE27KXJRX0P7FVVGMYDGC3",
      product: {
        _id: "01JDHE27KXEKY0JP7Z8T8FBHF0",
        name: "Bread - Rolls, Corn",
      },
      user: {
        _id: "01JDHE27KXJSA7ZAMXEXB5GPTX",
        fullName: "Delores Ducker",
        email: "dducker5@oakley.com",
        avatar: "/images/user3.png",
      },
      commentText: "Drown due to fall/jump fr crushed water-skis, subs",
      score: 2,
      status: "rejected",
      createdAt: "2023-12-01T14:04:44Z",
      updatedAt: "2024-06-23T00:00:54Z",
    },
    {
      _id: "01JDHE27KZXMJWVPTJEKFDSYQD",
      product: {
        _id: "01JDHE27KZP7WAGEXPE91ZQ74W",
        name: "Bread - Granary Small Pull",
      },
      user: {
        _id: "01JDHE27M02QFJBWDF57XCF0V7",
        fullName: "Ava Kasting",
        email: "akasting6@bloglovin.com",
        avatar: "/images/user2.png",
      },
      commentText: "Other specified fracture of left ischium",
      score: 2,
      status: "approved",
      createdAt: "2024-08-05T18:31:04Z",
      updatedAt: "2024-07-28T04:07:48Z",
    },
    {
      _id: "01JDHE27M24KB28JM3VTAP2P12",
      product: {
        _id: "01JDHE27M22BSW90Z86D58CF4R",
        name: "Bay Leaf",
      },
      user: {
        _id: "01JDHE27M2DZX5NABVJKYJF1AG",
        fullName: "Federica Nunns",
        email: "fnunns7@newyorker.com",
        avatar: "/images/user3.png",
      },
      commentText: "Puncture wound with foreign body of larynx, sequela",
      score: 4,
      status: "pending",
      createdAt: "2024-05-12T06:54:01Z",
      updatedAt: "2024-03-24T04:58:53Z",
    },
    {
      _id: "01JDHE27M4NM0HAPRWYP6WWNAF",
      product: {
        _id: "01JDHE27M47A0PPAMARMDRNSM0",
        name: "Ranchero - Primerba, Paste",
      },
      user: {
        _id: "01JDHE27M4A201H3118TD2X4V6",
        fullName: "Abeu Lutas",
        email: "alutas8@pinterest.com",
        avatar: "/images/user2.png",
      },
      commentText: "Periprosth fx around internal prosth r elbow joint, init",
      score: 2,
      status: "pending",
      createdAt: "2024-08-04T03:27:59Z",
      updatedAt: "2024-05-23T04:18:17Z",
    },
    {
      _id: "01JDHE27M6NAH85NHB0PGPGKCN",
      product: {
        _id: "01JDHE27M6W7346VK6D8HSYNEH",
        name: "Container - Foam Dixie 12 Oz",
      },
      user: {
        _id: "01JDHE27M6KPBXZR1VPG7SASGG",
        fullName: "Gael Harrad",
        email: "gharrad9@businessinsider.com",
        avatar: "/images/user1.png",
      },
      commentText:
        "Disp fx of capitate bone, r wrist, subs for fx w delay heal",
      score: 3,
      status: "pending",
      createdAt: "2024-10-10T05:42:59Z",
      updatedAt: "2024-03-04T13:32:36Z",
    },
    {
      _id: "01JDHE27M7PZJTPQR4FRZG35ER",
      product: {
        _id: "01JDHE27M764ZJQQZE78HTS760",
        name: "Paper - Brown Paper Mini Cups",
      },
      user: {
        _id: "01JDHE27M86534VNRKGQ6YT6XE",
        fullName: "Scarface Santoro",
        email: "ssantoroa@360.cn",
        avatar: "/images/user1.png",
      },
      commentText: "Stress fx, unsp tibia and fibula, subs for fx w routn heal",
      score: 4,
      status: "pending",
      createdAt: "2024-03-03T18:11:44Z",
      updatedAt: "2023-12-07T03:14:37Z",
    },
    {
      _id: "01JDHE27M9SEVY3EACZ5675E10",
      product: {
        _id: "01JDHE27M922MF1Y8MT5XB568H",
        name: "Ranchero - Primerba, Paste",
      },
      user: {
        _id: "01JDHE27M9AHP95Y5Y03Y4RYQD",
        fullName: "Tomkin Hlavecek",
        email: "thlavecekb@homestead.com",
        avatar: "/images/user3.png",
      },
      commentText:
        "Toxic effect of beryllium and its compounds, undet, sequela",
      score: 2,
      status: "rejected",
      createdAt: "2023-12-21T06:49:23Z",
      updatedAt: "2024-01-25T10:42:59Z",
    },
    {
      _id: "01JDHE27MBC5V4RNJYT7WY16X6",
      product: {
        _id: "01JDHE27MBYBDDXHM3RGYDN389",
        name: "Tomatoes - Orange",
      },
      user: {
        _id: "01JDHE27MB3JE0TF3YN5B4S2YA",
        fullName: "Hillary Mughal",
        email: "hmughalc@globo.com",
        avatar: "/images/user2.png",
      },
      commentText: "Fetal hydantoin syndrome",
      score: 3,
      status: "pending",
      createdAt: "2024-08-28T02:41:58Z",
      updatedAt: "2024-03-01T20:12:30Z",
    },
    {
      _id: "01JDHE27MC7KX7NCZ3492SW7GD",
      product: {
        _id: "01JDHE27MC1ZR0DN5X7DGEZWQP",
        name: "Beef - Striploin",
      },
      user: {
        _id: "01JDHE27MDW2J4D8CXP3291TNJ",
        fullName: "Manuel Axtell",
        email: "maxtelld@uiuc.edu",
        avatar: "/images/user4.png",
      },
      commentText:
        "Gastric contents in bronchus causing oth injury, subs encntr",
      score: 4,
      status: "approved",
      createdAt: "2023-12-01T20:12:37Z",
      updatedAt: "2024-07-04T04:14:46Z",
    },
    {
      _id: "01JDHE27MEK67583XT4TDN11TY",
      product: {
        _id: "01JDHE27MEV0TB6GTCY35HYRX7",
        name: "Yucca",
      },
      user: {
        _id: "01JDHE27MEP2QW0T01ZKZ6YN0R",
        fullName: "Lauren Bruni",
        email: "lbrunie@woothemes.com",
        avatar: "/images/user4.png",
      },
      commentText:
        "Sublux of symphysis (pubis) in preg, chldbrth and the puerp",
      score: 4,
      status: "rejected",
      createdAt: "2024-03-31T06:41:41Z",
      updatedAt: "2024-06-04T08:19:48Z",
    },
    {
      _id: "01JDHE27MFWGNV64ATV3BAK7AT",
      product: {
        _id: "01JDHE27MGFH6H12KKGSMBPHPH",
        name: "Broom And Brush Rack Black",
      },
      user: {
        _id: "01JDHE27MGTASZVBEGTHR9W1GN",
        fullName: "Clerissa Loseke",
        email: "closekef@naver.com",
        avatar: "/images/user3.png",
      },
      commentText:
        "Breakdown (mechanical) of intrauterine contraceptive device",
      score: 1,
      status: "rejected",
      createdAt: "2024-05-23T11:48:55Z",
      updatedAt: "2024-06-22T01:06:18Z",
    },
    {
      _id: "01JDHE27MHMSYFV8C6611ZMVNV",
      product: {
        _id: "01JDHE27MHCGX0WMT13PAR3CEQ",
        name: "Hersey Shakes",
      },
      user: {
        _id: "01JDHE27MHEMHXSRWK4TM1PYR6",
        fullName: "Granny McGee",
        email: "gmcgeeg@de.vu",
        avatar: "/images/user4.png",
      },
      commentText: "Hypothalamic dysfunction, not elsewhere classified",
      score: 1,
      status: "pending",
      createdAt: "2024-09-24T03:18:25Z",
      updatedAt: "2024-06-30T03:29:47Z",
    },
    {
      _id: "01JDHE27MJFEQ8H5FRG7STERFB",
      product: {
        _id: "01JDHE27MKRENHSJRJJ9WP8YM9",
        name: "Potatoes - Yukon Gold 5 Oz",
      },
      user: {
        _id: "01JDHE27MK84NVA4XHMPSN383C",
        fullName: "Dena Dougherty",
        email: "ddoughertyh@businessinsider.com",
        avatar: "/images/user3.png",
      },
      commentText:
        "Disp fx of lower epiphysis (separation) of left femur, init",
      score: 2,
      status: "rejected",
      createdAt: "2024-07-31T23:00:37Z",
      updatedAt: "2024-06-19T11:49:06Z",
    },
    {
      _id: "01JDHE27MMFGQMJTFZB6HQ58JZ",
      product: {
        _id: "01JDHE27MN4YAVW35P1JRHYZ2K",
        name: "Longos - Chicken Curried",
      },
      user: {
        _id: "01JDHE27MNRTSTG0B47NJ3B4WZ",
        fullName: "Neile Gobel",
        email: "ngobeli@flavors.me",
        avatar: "/images/user2.png",
      },
      commentText: "Sltr-haris Type I physl fx upr end unsp fibula, 7thP",
      score: 2,
      status: "pending",
      createdAt: "2024-06-18T04:26:37Z",
      updatedAt: "2024-03-06T20:16:36Z",
    },
    {
      _id: "01JDHE27MPCF1XJZ9R2WFJ25PR",
      product: {
        _id: "01JDHE27MPR65FWJ2AY1KS5Z20",
        name: "V8 Splash Strawberry Kiwi",
      },
      user: {
        _id: "01JDHE27MQTZ7Y5CPHWD4QPJ7T",
        fullName: "Jackie Pedroli",
        email: "jpedrolij@reverbnation.com",
        avatar: "/images/user1.png",
      },
      commentText: "Nondisp spiral fx shaft of rad, r arm, 7thB",
      score: 5,
      status: "rejected",
      createdAt: "2024-05-21T02:15:40Z",
      updatedAt: "2024-06-14T18:35:45Z",
    },
    {
      _id: "01JDHE27MRA6AAKVEH8C1NTAEZ",
      product: {
        _id: "01JDHE27MR4AF5XVY8CTJM4NNX",
        name: "Jerusalem Artichoke",
      },
      user: {
        _id: "01JDHE27MSDC89FWY435CEVFQ2",
        fullName: "Orlan Bredee",
        email: "obredeek@sitemeter.com",
        avatar: "/images/user3.png",
      },
      commentText: "Burn of unspecified degree of abdominal wall, subs encntr",
      score: 2,
      status: "rejected",
      createdAt: "2024-08-22T17:13:06Z",
      updatedAt: "2024-01-06T16:01:56Z",
    },
    {
      _id: "01JDHE27MTHR2K0C4M05JD56VZ",
      product: {
        _id: "01JDHE27MT346K12DFEVEV2XDQ",
        name: "Wine - Balbach Riverside",
      },
      user: {
        _id: "01JDHE27MVHYJTTWR0Z4J2F23X",
        fullName: "Sandra Assad",
        email: "sassadl@sciencedaily.com",
        avatar: "/images/user2.png",
      },
      commentText: "Unspecified injury of left hip, subsequent encounter",
      score: 3,
      status: "rejected",
      createdAt: "2024-01-09T06:24:12Z",
      updatedAt: "2024-06-16T07:49:02Z",
    },
    {
      _id: "01JDHE27MWAEAR8DKEGAAJXM91",
      product: {
        _id: "01JDHE27MWF687G8ESHW1Y3A33",
        name: "Beef - Tongue, Fresh",
      },
      user: {
        _id: "01JDHE27MWE5VPBZZSA1749GJ6",
        fullName: "Ann Malyan",
        email: "amalyanm@uiuc.edu",
        avatar: "/images/user2.png",
      },
      commentText: "Strain of unsp musc/fasc/tend at forearm level, left arm",
      score: 5,
      status: "pending",
      createdAt: "2024-06-24T07:50:27Z",
      updatedAt: "2024-03-02T16:32:19Z",
    },
    {
      _id: "01JDHE27MXB5EHZPTJ2MVWNMGM",
      product: {
        _id: "01JDHE27MXV1AGHK8G3BFMG3YG",
        name: "Pasta - Rotini, Colour, Dry",
      },
      user: {
        _id: "01JDHE27MXJY2NN5JEFQ279J2X",
        fullName: "Bernadine Grannell",
        email: "bgrannelln@nih.gov",
        avatar: "/images/user2.png",
      },
      commentText: "Immunodeficiency, unspecified",
      score: 2,
      status: "approved",
      createdAt: "2024-04-27T04:46:15Z",
      updatedAt: "2024-07-18T15:45:06Z",
    },
    {
      _id: "01JDHE27MYR2K45TZS3RPANWJG",
      product: {
        _id: "01JDHE27MYT6EQZKD5QMJA3419",
        name: "Olives - Morracan Dired",
      },
      user: {
        _id: "01JDHE27MZPJP0CSTQMM2EFFSH",
        fullName: "Starr Syme",
        email: "ssymeo@unc.edu",
        avatar: "/images/user4.png",
      },
      commentText: "Displ unsp condyle fx low end r femr, 7thC",
      score: 4,
      status: "rejected",
      createdAt: "2024-06-22T20:00:24Z",
      updatedAt: "2024-09-19T17:47:21Z",
    },
    {
      _id: "01JDHE27N06Y4N8MVCB4ZGRPD4",
      product: {
        _id: "01JDHE27N0M9S5CJKX329ASSM9",
        name: "Sauce - Soy Low Sodium - 3.87l",
      },
      user: {
        _id: "01JDHE27N0NGTNW4RZTKQGFR8P",
        fullName: "Bride Poppleston",
        email: "bpopplestonp@fema.gov",
        avatar: "/images/user4.png",
      },
      commentText: "Migraine, unspecified, not intractable",
      score: 4,
      status: "pending",
      createdAt: "2024-07-28T15:27:45Z",
      updatedAt: "2024-02-10T08:34:49Z",
    },
    {
      _id: "01JDHE27N1MZKW1Z2M4DFD39X7",
      product: {
        _id: "01JDHE27N16PQWGFDN0E6EN110",
        name: "Macaroons - Homestyle Two Bit",
      },
      user: {
        _id: "01JDHE27N1MENWYKSD9DQ20M9E",
        fullName: "Winfield Heeran",
        email: "wheeranq@ifeng.com",
        avatar: "/images/user3.png",
      },
      commentText: "Nondisp fx of mid 3rd of navic bone of l wrs, 7thP",
      score: 1,
      status: "rejected",
      createdAt: "2024-08-31T19:14:56Z",
      updatedAt: "2024-02-09T03:46:46Z",
    },
    {
      _id: "01JDHE27N23A4GQAK6NEB3MKGD",
      product: {
        _id: "01JDHE27N22025SHE2EE4AJX48",
        name: "Mushroom - Chantrelle, Fresh",
      },
      user: {
        _id: "01JDHE27N3AT2F7PXHQWQ22ZCB",
        fullName: "Anallise Feaks",
        email: "afeaksr@deliciousdays.com",
        avatar: "/images/user2.png",
      },
      commentText: "Alcohol depend w alcoh-induce persisting amnestic disorder",
      score: 5,
      status: "rejected",
      createdAt: "2023-12-17T23:36:46Z",
      updatedAt: "2024-11-09T03:44:52Z",
    },
    {
      _id: "01JDHE27N4RXKTHY8MMP2GK84D",
      product: {
        _id: "01JDHE27N4G1XJ87951QVJGCME",
        name: "Icecream Bar - Del Monte",
      },
      user: {
        _id: "01JDHE27N43A0VZQR0Z6P2YEDD",
        fullName: "Kristina Worham",
        email: "kworhams@si.edu",
        avatar: "/images/user1.png",
      },
      commentText: "Other specified injuries of thorax, sequela",
      score: 1,
      status: "pending",
      createdAt: "2024-02-14T12:39:12Z",
      updatedAt: "2024-05-19T00:30:11Z",
    },
    {
      _id: "01JDHE27N5SE95PWSRC4GJFDXE",
      product: {
        _id: "01JDHE27N57GJ03VCX35W0MXMG",
        name: "Wine - Red, Antinori Santa",
      },
      user: {
        _id: "01JDHE27N62WM4EDWA6YNA4R8B",
        fullName: "Gorden Grasner",
        email: "ggrasnert@fastcompany.com",
        avatar: "/images/user3.png",
      },
      commentText: "Fracture of lower epiphysis (separation) of femur",
      score: 4,
      status: "pending",
      createdAt: "2024-07-04T07:26:50Z",
      updatedAt: "2024-07-01T18:22:16Z",
    },
    {
      _id: "01JDHE27N7442VCDMEM2VNG2B8",
      product: {
        _id: "01JDHE27N72MCQB5RH8JTY4W4V",
        name: "Soup - Cream Of Broccoli, Dry",
      },
      user: {
        _id: "01JDHE27N70SVFZ5QQVKT1D4P8",
        fullName: "Arie Sappson",
        email: "asappsonu@cmu.edu",
        avatar: "/images/user4.png",
      },
      commentText: "Unsp fracture of left talus, init encntr for open fracture",
      score: 3,
      status: "rejected",
      createdAt: "2024-01-26T15:52:29Z",
      updatedAt: "2024-11-23T01:18:51Z",
    },
    {
      _id: "01JDHE27N9FKZ8BWBYQ2CY70DY",
      product: {
        _id: "01JDHE27N90JZVB6N78N3QPS0F",
        name: "Container - Clear 32 Oz",
      },
      user: {
        _id: "01JDHE27N9YX82BYCQ02W5AJNK",
        fullName: "Allissa Lardeux",
        email: "alardeuxv@apache.org",
        avatar: "/images/user4.png",
      },
      commentText: "Congenital dilation of aorta",
      score: 5,
      status: "pending",
      createdAt: "2024-07-05T20:25:11Z",
      updatedAt: "2023-12-04T08:23:03Z",
    },
    {
      _id: "01JDHE27NAZFJMSHC9G7Y3H90S",
      product: {
        _id: "01JDHE27NAQCSX668X1XAA1Z6Q",
        name: "Wasabi Paste",
      },
      user: {
        _id: "01JDHE27NAJ6AD1H9BC04ZCJB0",
        fullName: "Ban Rollinshaw",
        email: "brollinshaww@typepad.com",
        avatar: "/images/user2.png",
      },
      commentText:
        "Pnctr w/o foreign body of l idx fngr w damage to nail, init",
      score: 1,
      status: "rejected",
      createdAt: "2024-06-30T14:48:18Z",
      updatedAt: "2024-02-06T21:13:47Z",
    },
    {
      _id: "01JDHE27NB0HGN8AFQ7B5XHGEH",
      product: {
        _id: "01JDHE27NBRY498E92DP55HEA2",
        name: "Beef - Ground, Extra Lean, Fresh",
      },
      user: {
        _id: "01JDHE27NCCJ8ECQ0ZNW1BD9FM",
        fullName: "Marieann Larman",
        email: "mlarmanx@loc.gov",
        avatar: "/images/user2.png",
      },
      commentText: "Major laceration of right innominate or subclav vein, init",
      score: 1,
      status: "pending",
      createdAt: "2024-02-12T18:42:34Z",
      updatedAt: "2024-05-22T19:58:37Z",
    },
    {
      _id: "01JDHE27NDRN38YHKQ8CF5VT9G",
      product: {
        _id: "01JDHE27NDMHVQQFWW8RPE1212",
        name: "Salmon Atl.whole 8 - 10 Lb",
      },
      user: {
        _id: "01JDHE27NE495J9GRW94JQGHY7",
        fullName: "Portie Groarty",
        email: "pgroartyy@lulu.com",
        avatar: "/images/user4.png",
      },
      commentText: "Other sprain of left index finger, subsequent encounter",
      score: 4,
      status: "approved",
      createdAt: "2023-12-09T16:41:37Z",
      updatedAt: "2024-03-04T01:03:26Z",
    },
    {
      _id: "01JDHE27NFR4TXBE9Y1M9YEEYD",
      product: {
        _id: "01JDHE27NF4Z92957AKDMD7R4E",
        name: "Bread - Pumpernickle, Rounds",
      },
      user: {
        _id: "01JDHE27NG7RPCZF26RZP58P2J",
        fullName: "Bink Hinkes",
        email: "bhinkesz@nba.com",
        avatar: "/images/user4.png",
      },
      commentText: "Corrosion of second degree of left thumb (nail), sequela",
      score: 1,
      status: "approved",
      createdAt: "2024-10-21T07:28:10Z",
      updatedAt: "2024-07-30T04:13:47Z",
    },
    {
      _id: "01JDHE27NHMHBYKQYZS1TKS7PN",
      product: {
        _id: "01JDHE27NHZCKH331MRB5FZCW1",
        name: "Wine - Sauvignon Blanc Oyster",
      },
      user: {
        _id: "01JDHE27NHGR5EYFE46HC71HAV",
        fullName: "Marrissa Jarred",
        email: "mjarred10@utexas.edu",
        avatar: "/images/user3.png",
      },
      commentText: "Toxic effect of latex, intentional self-harm, sequela",
      score: 1,
      status: "approved",
      createdAt: "2024-06-28T15:43:25Z",
      updatedAt: "2024-01-25T02:55:03Z",
    },
    {
      _id: "01JDHE27NJY9KPPY5DVKREJ1N5",
      product: {
        _id: "01JDHE27NKS7PQEGPQ2XVBWBPH",
        name: "Wine - Alicanca Vinho Verde",
      },
      user: {
        _id: "01JDHE27NKG1E99JZ9E2HCX8JG",
        fullName: "Roth Slinger",
        email: "rslinger11@addtoany.com",
        avatar: "/images/user3.png",
      },
      commentText: "Nondisp fx of nk of 3rd MC bone, l hand, 7thP",
      score: 3,
      status: "pending",
      createdAt: "2024-01-16T09:28:20Z",
      updatedAt: "2024-09-22T08:41:48Z",
    },
    {
      _id: "01JDHE27NP659SSNXJJ1KXN61C",
      product: {
        _id: "01JDHE27NPE7F4E066CWDBRRND",
        name: "Eggroll",
      },
      user: {
        _id: "01JDHE27NPYE0BA0B3D0MDNDD4",
        fullName: "Sibbie Scrinage",
        email: "sscrinage12@nydailynews.com",
        avatar: "/images/user4.png",
      },
      commentText: "Other nondisp fx of lower end of right humerus, sequela",
      score: 2,
      status: "rejected",
      createdAt: "2023-12-28T21:10:19Z",
      updatedAt: "2024-08-11T12:11:36Z",
    },
    {
      _id: "01JDHE27NQ7A6DTX8RA6GRS504",
      product: {
        _id: "01JDHE27NQRGPYS4MM2VMBW596",
        name: "Pastry - Banana Tea Loaf",
      },
      user: {
        _id: "01JDHE27NQ0Z8CKZDVSTJ9KRWS",
        fullName: "Rosella Showalter",
        email: "rshowalter13@webmd.com",
        avatar: "/images/user4.png",
      },
      commentText: "Superficial foreign body of right index finger, sequela",
      score: 3,
      status: "pending",
      createdAt: "2024-08-20T08:21:42Z",
      updatedAt: "2024-11-21T16:31:42Z",
    },
    {
      _id: "01JDHE27NSHEB73DSP7F7B76P4",
      product: {
        _id: "01JDHE27NS8FCYPHK53RJ91ZPS",
        name: "Rabbit - Legs",
      },
      user: {
        _id: "01JDHE27NSS5X776QDS48WSB0W",
        fullName: "Sauncho Basler",
        email: "sbasler14@w3.org",
        avatar: "/images/user4.png",
      },
      commentText: "Body mass index (BMI) 26.0-26.9, adult",
      score: 4,
      status: "approved",
      createdAt: "2024-01-18T14:19:07Z",
      updatedAt: "2023-11-25T15:03:01Z",
    },
    {
      _id: "01JDHE27NVZS7Z2JH9EHJYPFPE",
      product: {
        _id: "01JDHE27NV2JB7M36BBGNX4E9D",
        name: "Dasheen",
      },
      user: {
        _id: "01JDHE27NVDBY3HRN5F76R186R",
        fullName: "Ryon Haslen",
        email: "rhaslen15@yale.edu",
        avatar: "/images/user1.png",
      },
      commentText: "Burn of unsp degree of left toe(s) (nail), init encntr",
      score: 4,
      status: "approved",
      createdAt: "2024-11-17T13:23:03Z",
      updatedAt: "2024-07-16T00:34:32Z",
    },
    {
      _id: "01JDHE27NW679JFNX3A38S7D0C",
      product: {
        _id: "01JDHE27NXE9VP8GWE5VAJCMKB",
        name: "Wine - Red, Metus Rose",
      },
      user: {
        _id: "01JDHE27NXNA5MDQ5MH2T3W4WN",
        fullName: "Olly Habben",
        email: "ohabben16@hugedomains.com",
        avatar: "/images/user3.png",
      },
      commentText: "Cnsl related to sexual behavior and orientn of third party",
      score: 1,
      status: "rejected",
      createdAt: "2023-12-10T09:37:17Z",
      updatedAt: "2024-03-28T20:34:45Z",
    },
    {
      _id: "01JDHE27NYK3YSK6ZXKBM9QNN4",
      product: {
        _id: "01JDHE27NYK1D23MQYETSA0GQE",
        name: "Lid - High Heat, Super Clear",
      },
      user: {
        _id: "01JDHE27NY04XCDBSAZ8N8FJTX",
        fullName: "Jo-anne Larkins",
        email: "jlarkins17@google.es",
        avatar: "/images/user2.png",
      },
      commentText: "Pnctr w foreign body of left cheek and TMJ area, subs",
      score: 4,
      status: "approved",
      createdAt: "2024-07-27T13:58:50Z",
      updatedAt: "2024-08-17T10:45:32Z",
    },
    {
      _id: "01JDHE27NZD9WZT6YPFWSMC26C",
      product: {
        _id: "01JDHE27NZK3KJQPNN2G0NDSS8",
        name: "Pail - 15l White, With Handle",
      },
      user: {
        _id: "01JDHE27NZSQWYN6DYSB46NPJP",
        fullName: "Rennie Gravenall",
        email: "rgravenall18@msn.com",
        avatar: "/images/user3.png",
      },
      commentText: "Burn of first degree of left forearm, sequela",
      score: 2,
      status: "pending",
      createdAt: "2024-04-25T05:31:45Z",
      updatedAt: "2024-11-22T23:33:02Z",
    },
    {
      _id: "01JDHE27P030WT45DE15C29ZZK",
      product: {
        _id: "01JDHE27P1GVC81W87P6P6KG1V",
        name: "Amarula Cream",
      },
      user: {
        _id: "01JDHE27P1N47RRHB8J7X9EYXA",
        fullName: "Urbano Stebbings",
        email: "ustebbings19@lycos.com",
        avatar: "/images/user2.png",
      },
      commentText: "Disp fx of proximal phalanx of left thumb, init for opn fx",
      score: 3,
      status: "approved",
      createdAt: "2024-07-09T03:38:32Z",
      updatedAt: "2024-05-19T04:01:55Z",
    },
    {
      _id: "01JDHE27P2F1J9Q7WM5SS2F8WK",
      product: {
        _id: "01JDHE27P2B8V5H1D7GADRZ89K",
        name: "Ice - Clear, 300 Lb For Carving",
      },
      user: {
        _id: "01JDHE27P2E8TF1RJEAST976N1",
        fullName: "Paulina Cordeau",
        email: "pcordeau1a@yandex.ru",
        avatar: "/images/user2.png",
      },
      commentText: "Sandfly fever",
      score: 5,
      status: "rejected",
      createdAt: "2023-12-10T02:30:10Z",
      updatedAt: "2024-07-23T15:25:44Z",
    },
    {
      _id: "01JDHE27P3TJJ96VPHE0FX1RJA",
      product: {
        _id: "01JDHE27P3JG02VX0VZKWG3A1Q",
        name: "Lamb - Shoulder",
      },
      user: {
        _id: "01JDHE27P4PDK2JAWP0XC6ZQJE",
        fullName: "Jerald Stickley",
        email: "jstickley1b@dot.gov",
        avatar: "/images/user3.png",
      },
      commentText:
        "Inj extensor musc/fasc/tend r rng fngr at forarm lv, sequela",
      score: 2,
      status: "rejected",
      createdAt: "2024-11-11T15:49:33Z",
      updatedAt: "2024-02-08T05:50:31Z",
    },
    {
      _id: "01JDHE27P5EXV5YHC8PKZK15AE",
      product: {
        _id: "01JDHE27P501N92YRMRHBHBQCF",
        name: "Liqueur - Melon",
      },
      user: {
        _id: "01JDHE27P5WSZFWMPV8RG1D6Z5",
        fullName: "Witty Buckell",
        email: "wbuckell1c@webeden.co.uk",
        avatar: "/images/user4.png",
      },
      commentText: "Person injured in collision betw mtr veh, nontraffic, init",
      score: 3,
      status: "rejected",
      createdAt: "2024-07-04T19:14:16Z",
      updatedAt: "2024-04-07T10:24:10Z",
    },
    {
      _id: "01JDHE27P6PS2PD1XCBAK8X7NP",
      product: {
        _id: "01JDHE27P6VKWCTXYMSPWR1E02",
        name: "Table Cloth 81x81 White",
      },
      user: {
        _id: "01JDHE27P6ZY6VB0Q8N3A8ZXQ1",
        fullName: "Win Mully",
        email: "wmully1d@friendfeed.com",
        avatar: "/images/user4.png",
      },
      commentText:
        "Nondisp midcervical fx r femur, subs for clos fx w nonunion",
      score: 3,
      status: "approved",
      createdAt: "2024-01-03T03:31:01Z",
      updatedAt: "2024-03-01T03:57:35Z",
    },
  ];

  return (
    <DataTable
      tableData={fakeComments}
      dataColumnsDef={CommentColumns}
      filterFns={{ emailFilter, productFilter, dateRangeFilter }}
    />
  );
};

export default CommentsTable;
