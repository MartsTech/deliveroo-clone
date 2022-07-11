// @ts-ignore
import schemaTypes from "all:part:@sanity/base/schema-type";
// @ts-ignore
import createSchema from "part:@sanity/base/schema-creator";
import category from "./category";
import dish from "./dish";
import featured from "./featured";
import restaurant from "./restaurant";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([restaurant, category, dish, featured]),
});
