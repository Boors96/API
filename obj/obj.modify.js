/**
 * add new or modify atribute
 * @param {Object} obj        the object to add or modify
 * @param {Object} atrrName the attribute name
 * @param {Object} atrrValue   the value of the attribute
 */
const addAttr = (obj, attr, attrValue) => {
  return {
    ...obj , [attr]: attrValue
  };
};

/**
 * removes attribute from object
 * @param  {Object} obj  the object to remove from
 * @param  {String} attr the attribute to be removed
 * @return {Object}      the modified object
 */
const removeAttr = (obj, attr) => {
  const { [attr]: value, ...newObj } = obj;
  return newObj;
};

/**
 * combines two objects
 * @param  {[type]} fObj the first object
 * @param  {[type]} sObj the second object
 * @return {[type]}      the resulting object of combination
 */
exports.combine = (fObj, fValue, sObj, sValue) => {
  // return {...fObj, ...sObj};
  return {[fObj]: fValue, [sObj]: sValue};
};


exports.splitString = (string, char) => {
  return string.split(char);
};


exports.addRemoveAttr = (obj, rmAttrs, addAttrs, attrValue) => {
  return removeAttr(addAttr(obj, addAttrs, attrValue), rmAttrs);
};

exports.addAttrToArray = (obj, attr, attrValue) => {
  return obj.map(
    ((pat) => ({
      ...pat , [attr]: attrValue
    }))
)
};

exports.removeMultiAttr = (obj, attrs) => {
  attrs.forEach((attr) => delete obj[attr]);
  return obj;
};

exports.getOneFromArrayOfObjects = (arrayOfObjects, attr, attrValue) => {
  return arrayOfObjects.filter(object => object[attr] == attrValue)
};

exports.addAttr = addAttr;
exports.removeAttr = removeAttr;
