const avro = require("avsc");

const type = avro.Type.forSchema({
  name: "RootObject",
  namespace: "com.jishnuap.models",
  type: "record",
  fields: [
    {
      name: "address",
      type: {
        type: "record",
        fields: [
          {
            name: "streetAddress",
            type: "string",
          },
          {
            name: "city",
            type: "string",
          },
        ],
      },
    },
    { name: "name", type: "string", default: "null" },
  ],
});

const buf = type.toBuffer({
  address: {
    streetAddress: "42 wallaby way",
    city: "Sydney",
  },
  name: "P Sherman",
}); // Encoded buffer.
console.log(buf);
const val = type.fromBuffer(buf); // = {kind: 'CAT', name: 'Albert'}
console.log(val);
