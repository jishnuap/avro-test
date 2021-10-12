const avro = require("avsc");

const type = avro.Type.forSchema({
  type: "record",
  name: "redbook_bikevehicle",
  namespace: "com.pickles.redbookdata",
  fields: [
    {
      name: "dateTimeOccurred",
      type: "string",
      default: "null",
    },
    {
      name: "eventSource",
      type: "string",
      default: "null",
    },
    {
      name: "eventType",
      type: "string",
      default: "vevehicle",
    },
    {
      name: "eventId",
      type: "string",
      default: "null",
    },
    {
      name: "domainCorrelationId",
      type: "string",
      default: null,
    },
    {
      name: "schema",
      type: "string",
      default: null,
    },
    {
      name: "topic",
      type: "string",
      default: null,
    },
    {
      name: "data",
      type: [
        "null",
        {
          type: "record",
          name: "data",
          fields: [
            {
              name: "Sourcetable",
              type: ["null", "string"],
              default: null,
            },
            {
              name: "Bikevehicleid",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Vehiclekeylegacy",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Vehiclekey",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Make",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Family",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Modelname",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Makeyear",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Releasemonth",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Description",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Series",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Extraidentification",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Biketype",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Bodystyle",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Enginesize",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Enginedesc",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Engineconfig",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Cylinders",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Enginetype",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Fueltype",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Drive",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Drivecode",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Cam",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Stroke",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Geartype",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Gearnum",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Countryorigin",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Importpercent",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Importpartpercent",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Greyimport",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Limitededition",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Currentrelease",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Configuration",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Colours",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Bore",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Strokemm",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Valvespercylinder",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Exhaustdescription",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Exhaustconfig",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Cooling",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Ignition",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Starter",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Lubrication",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Maxpower",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Maxpowerrpm",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Maxtorque",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Maxtorquerpm",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Maxspeed",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Acceleration",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Clutchtype",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Clutchdiameter",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Primarydrivedescription",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Finaldriveratio",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Frontbrake",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Frontbrakecalliper",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Frontbrakediameter",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Rearbrake",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Rearbrakecalliper",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Rearbrakediameter",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Framematerial",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Frontsuspension",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Frontsuspensiontravel",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Rearsuspension",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Rearsuspensiontravel",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Fronttyre",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Reartyre",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Wheelsizefront",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Wheelsizerear",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Wheeltype",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Dryweight",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Wetoperationalweight",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Fueltankcapacity",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Fuelreservecapacity",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Length",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Width",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Height",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Groundclearance",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Wheelbase",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Seatheight",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Rake",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Trail",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Ridercapacity",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Carburettor",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Carburettornum",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Throttlebody",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Throttlebore",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Ignitiondescription",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Warrantymonths",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Warrantykms",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Marketingyear",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Manufacturermodelyear",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Drivenwheels",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Modelcode",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Voltage",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Recommendedron",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Emissionstandard",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Seatingposition",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Regularserviceinterval",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Chargingmethod",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Kmrangefulltank",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Kmrangefullcharge",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Kerbweight",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Payload",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Vinnumber",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Maxethanolblend",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Abs",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Enginetype1",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Lamsapproved",
              type: ["null", "string"],
              default: "null",
            },
            {
              name: "Avgwhs",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Avgrtl",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Gdwhs",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Gdrtl",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Tradeinpricemin",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Tradeinpricemax",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Privatepricemin",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Privatepricemax",
              type: ["null", "float"],
              default: null,
            },
            {
              name: "Newprice",
              type: ["null", "float"],
              default: null,
            },
          ],
        },
      ],
      default: null,
    },
  ],
});


console.log(type);
try {
  const val = {
    eventSource: "sales-microservice",
    eventType: "AssetSaleAmended",
    data: {
      assetType: "EMQ",
      sellingMethodFDD365Code: "1",
      assetExternalId: 2000003823,
      department: "Government Vehicles",
      noOfDaysBeforeFirstReleased: 105,
      salvageStatus: "Non-Salvage Asset",
      regoJurisdiction: "",
      export: true,
      buyBack: true,
      licenceAddress: "unknown",
      feesCalculated: true,
      lctAmount: "",
      familyName: "unknown",
      assetLocation: {
        locationId: "unknown",
        addressType: "unknown",
        addressAddressLine1: "unknown",
        addressAddressLine2: "unknown",
        suburb: "unknown",
        state: "unknown",
        postcode: "unknown",
        country: "unknown",
      },
      buyer: {
        organisationName: "LABSUPPLY AUSTRALIA PTY LTD",
        billingAddressAddressLine1: "ACACIA HILLS",
        gstStatus: true,
        ownerPrincipalFamilyName: "Small",
        clientType: "Organisation",
        familyName: "",
        billingAddressAddressLine2: "",
        abnAndLegalName: "35 003 417 123 My Name",
        givenName: "",
        billingAddressState: "NSW",
        billingPhoneNumber: "1234567891",
        clientNumber: "0A05568",
        clientId: "2D64A03B-2E3B-460C-AA20-6780D9AB9A1F",
        ownerPrincipalGivenName: "Tim",
        billingAddressCountry: "AUS",
        billingAddressSuburb: "ACACIA HILLS",
        billingAddressPostcode: "0822",
        billingEmailAddress: "munfei.woo@gmail.com",
      },
      licenceNumber: "MD14830",
      gstStatus: "GST_INCL",
      trustBankAccountD365Code: "NSW1",
      longDescription:
        "No C/P,Toyota,RAV4R,XZU302 4505,Cab Chassis5,22 doors,4 Cyl,Diesel3,6 Gears,8745 (Kms. Showing on),Colour: Black,Rego: RR1307",
      assetManagementBusinessUnitId: "3",
      reserve: 5000,
      subAccountFDD365Code: "A0001",
      vendorReferenceNumber: "VR1307",
      vinChassisNumber: "RF3AA03Y8HT000492",
      repoAccountNumber: "",
      claimNumber: "CL1307",
      vendorNumber: "0A05766",
      participationMethodFDD365Code: "2",
      businessUnitSellingChannel: {
        id: "6DF29AA0-3E07-4F06-B0F5-09556DEFF80B",
        name: "Belmore, Sydney (NSW) SC1",
        businessUnitId: "99384D5F-3037-4B80-8ECC-8F41B3F275FD",
        businessUnitName: "Belmore, Sydney (NSW)",
        sellingChannelId: "126",
        sellingChannelDescription: "SC1",
        d365Code: "unknown",
        isPublic: true,
        standardFeeIds: ["7AA24EAA-326F-4389-A91F-0C7FFC57D2D7"],
      },
      saleAmount: 7500,
      assetId: "DCC34E5E-34E6-4518-B1F7-FADBADD367B4",
      vendorServiceAgreement: {
        id: 1111,
        name: "Carnarvon VSA1",
        apAccountNumber: "V000000106",
        arAccountNumber: "V000000107",
        feeCalcOnSalePriceExGst: "Y",
        standardFees: [
          {
            standardFeeId: "7AA24EAA-326F-4389-A91F-0C7FFC57D2D7",
            feeVendorDescription: "Fee 11/9",
          },
        ],
      },
      sellingMethod: "AUCTION",
      businessUnitFDD365Code: "201",
      valuation: 5000,
      lotNumber: "29",
      shortDescription: "No C/P,Toyota,RAV4R,XZU302 4505,Cab Chassis5,5 seats,22 doors",
      nonAuctionBuyerSellingFees: null,
      salesDivisionFDD365Code: "1",
      qtySold: 1,
      dateSold: "2021-07-13T02:00:00Z",
      saleGstAmount: 750,
      hammerPrice: 7500,
      assetNumber: "1005049",
      departmentFDD365Code: "40",
      assetVariants: ["0A64B60D-F5E8-4B67-8E1E-0BDFAD335081"],
      saleEvent: {
        id: "9788A284-BDD6-4D68-B771-B37620546BD1",
        d365Code: "unknown",
        number: 134,
        saleEventStartDate: "2021-03-25T06:51:00Z",
        name: "Belmore, Sydney (NSW) SC1",
        sellingChannelDescription: "SC1",
        businessUnitName: "Belmore, Sydney (NSW)",
        saleEventEndDate: "2021-05-31T06:51:00Z",
        isPublic: true,
        businessUnitId: "99384D5F-3037-4B80-8ECC-8F41B3F275FD",
        sellingChannelId: "A270AAFC-AD6E-42E4-BA20-638AD50C9F7A",
        standardFeeIds: ["7AA24EAA-326F-4389-A91F-0C7FFC57D2D7"],
        allowReleaseWithoutPayment: "unknown",
        invoiceMessage: "",
        invoiceLotMessage: "",
        addressUsedOnOutput: "unknown",
        salvageLineOnInvoice: "unknown",
      },
      registrationNumber: "RR1307",
      depositDetails: {
        depositDate: "2021-06-07T13:00:00Z",
        depositAmount: 1000,
        transactionReferenceNumber: "AGG12072021",
        paymentMethodD365Code: "654",
      },
      participationMethod: "INPERSON",
      serialNumber: "",
      assetManagementBusinessUnitD365Code: "201",
      updatedValues: ["saleAmount"],
    },
    dateTimeOccurred: "2021-06-10T09:24:54.000Z",
    eventId: "e2c32035-631d-42a5-af4c-1310aa4258ef",
    topic: "dev.pickles.picklesauctions.sales.salmg.asset",
    schemaId: 1649,
    context: {
      _userEmail: "Tyrell.Berge@yahoo.com",
      _tenantID: "e3352e99-bf87-4885-841e-de84af1361de",
      _correlationID: "f504583c-c4f0-4115-b685-b634f12c944d",
      _errors: {
        _instance: "HTTP POST /utility/message-gateway/v1/api/message",
        _errors: [
          {
            _name: "Unable to encode the payload for given avro schema",
            _code: 1014,
            _description: "Unable to encode the payload for given avro schema",
          },
          {
            _name: "Unable to encode the payload for given avro schema",
            _code: 1014,
            _description: "Unable to encode the payload for given avro schema",
          },
        ],
      },
      _sourceEventIds: "",
      _securedAuthToken: {
        _securedTokenInfo: "",
      },
      _requestTimeStamp: "2021-07-23T10:50:20.486Z",
    },
  };
  //type.isValid(val, { errorHook });
  const buf = type.toBuffer(val);
  const valParsed = type.fromBuffer(buf);
  console.log(valParsed);
} catch (error) {
  console.log(error);
}

// Encoded buffer.
// = {kind: 'CAT', name: 'Albert'}
function errorHook(path, any, type) {
  let msg = `[${path.join(".")}]\t`;
  if (type.typeName === "record") {
    if (any !== null && typeof any == "object") {
      const declared = new Set(type.fields.map((f) => f.name));
      const extra = Object.keys(any).filter((n) => !declared.has(n));
      msg += `extra fields (${extra.join(", ")})`;
    } else {
      msg += `not an object: ${any}`;
    }
  } else {
    msg += `not a valid ${type}: ${JSON.stringify(any)}`;
  }
  // Here, we just print the mismatches. It would be straightforward to return
  // them instead too (for example using a custom error).
  console.error(msg);
}
