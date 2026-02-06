import {
  validateAge,
  validateZipCode,
  validateIndentity,
  validateEmail,
} from "./validator.js";

/**
 * @function validateAge
 */

describe("validateAge", () => {
  let adultPerson;
  let underagePerson;

  beforeEach(() => {
    const today = new Date();
    adultPerson = {
      birth: new Date(today.getFullYear() - 20, 0, 1),
    };
    underagePerson = {
      birth: new Date(today.getFullYear() - 15, 0, 1),
    };
  });

  it("should return true for a valid person", () => {
    expect(validateAge(adultPerson)).toBe(true);
  });

  it("should return false for an underage person", () => {
    expect(validateAge(underagePerson)).toBe(false);
  });

  it("should throw a 'missing param' error", () => {
    expect(() => validateAge()).toThrow("missing param");
  });

  it("should throw a 'missing param' error if p doesn't have a birth property", () => {
    const personWithoutBirth = { name: "John", age: 30 };
    expect(() => validateAge(personWithoutBirth)).toThrow("missing param");
  });

  it("should throw a 'missing param' error if birth is null", () => {
    expect(() => validateAge({ birth: null })).toThrow("missing param");
  });

  it("should throw a 'missing param' error if birth is undefined", () => {
    expect(() => validateAge({ birth: undefined })).toThrow("missing param");
  });

  it("should throw a 'bad param' error if birth is not a date", () => {
    expect(() => validateAge({ birth: "not a date" })).toThrow("bad param");
  });

  it("should throw a 'bad param' error if birth is not a valid date", () => {
    expect(() => validateAge({ birth: new Date("invalid date") })).toThrow(
      "bad param",
    );
  });

  it("should throw a 'not allowed' error if birth is in the future", () => {
    const futurePerson = { birth: new Date(Date.now() + 100000) };
    expect(() => validateAge(futurePerson)).toThrow("not allowed");
  });
});

/**
 * @function validateZipCode
 */

describe("validateZipCode", () => {});

/**
 * @function validateIndentity
 */

describe("validateIndentity", () => {});

/**
 * @function validateEmail
 */

describe("validateEmail", () => {});
