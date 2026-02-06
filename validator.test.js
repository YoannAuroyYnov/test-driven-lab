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

describe("validateZipCode", () => {
  it("should return true for a valid French zip code", () => {
    const validsZipCodes = [
      "75001",
      "20167",
      "97139",
      "97600",
      "35200",
      "06000",
    ];
    validsZipCodes.forEach((zip) => {
      expect(validateZipCode({ zipCode: zip })).toBe(true);
    });
  });

  it("should return false for an invalid French zip code", () => {
    const invalidZipCodes = [
      "75000",
      "97500",
      "00100",
      "98000",
      "99000",
      "97700",
      "97800",
      "97900",
    ];
    invalidZipCodes.forEach((zip) => {
      expect(validateZipCode({ zipCode: zip })).toBe(false);
    });
  });

  it("should throw a 'missing param' error", () => {
    const errors = [
      () => validateZipCode(),
      () => validateZipCode({ name: "John", age: 30 }),
      () => validateZipCode({ zipCode: null }),
      () => validateZipCode({ zipCode: undefined }),
    ];
    errors.forEach((fn) => {
      expect(fn).toThrow("missing param");
    });
  });

  it("should throw a 'bad param' error", () => {
    const errors = [
      () => validateZipCode({ zipCode: 75001 }),
      () => validateZipCode({ zipCode: "9300" }),
      () => validateZipCode({ zipCode: "930000" }),
    ];

    errors.forEach((fn) => {
      expect(fn).toThrow("bad param");
    });
  });
});

/**
 * @function validateIndentity
 */

describe("validateIndentity", () => {
  describe.each([
    { firstname: "Pierre", lastname: "Dubois" },
    { firstname: "Franck", lastname: "Müller" },
    { firstname: "Maria", lastname: "García" },
    { firstname: "Noël", lastname: "Côté" },
  ])("valid identity", (identity) => {
    it(`should return true for ${identity.firstname} ${identity.lastname}`, () => {
      expect(validateIndentity(identity)).toBe(true);
    });
  });

  describe.each([
    { firstname: "Jhon_random", lastname: "Doe" },
    { firstname: "Jean<script>", lastname: "Dupont" },
    { firstname: "Marie", lastname: "Curie>" },
    { firstname: "Paul:hack", lastname: "Martin" },
    { firstname: "Luc/admin", lastname: "Lefevre" },
    { firstname: "Anne\\root", lastname: "Rousseau" },
    { firstname: "Tom@sql", lastname: "Dupuis" },
    { firstname: "Lisa[inject]", lastname: "Laurent" },
    { firstname: "Marc{xss}", lastname: "Renard" },
  ])("invalid identity", (identity) => {
    it(`should return false for ${identity.firstname} ${identity.lastname}`, () => {
      expect(validateIndentity(identity)).toBe(false);
    });
  });

  describe.each([
    () => validateIndentity(),
    () => validateIndentity(true),
    () => validateIndentity({ username: "John", age: 30 }),
    () => validateIndentity({ lastname: "Doe" }),
    () => validateIndentity({ firstname: null, lastname: "Doe" }),
    () => validateIndentity({ firstname: "John", lastname: undefined }),
    () => validateIndentity({ firstname: "", lastname: "Doe" }),
  ])("missing param", (identity) => {
    it(`should throw a 'missing param' error for ${JSON.stringify(
      identity,
    )}`, () => {
      expect(() => identity()).toThrow("missing param");
    });
  });

  describe.each([
    () => validateIndentity({ firstname: 121823, lastname: "valid" }),
    () => validateIndentity({ firstname: "John", lastname: 456 }),
  ])("bad param", (identity, index) => {
    it(`should throw a 'bad param' error for case ${index}`, () => {
      expect(() => identity()).toThrow("bad param");
    });
  });
});
/**
 * @function validateEmail
 */

describe("validateEmail", () => {
  describe.each([
    { email: "user@example.com" },
    { email: "john.doe@company.fr" },
    { email: "marie_claire@domain.co.uk" },
    { email: "contact+newsletter@site.com" },
    { email: "admin123@sub.domain.org" },
    { email: "info@company-name.com" },
  ])("valid email", (email) => {
    it(`should return true for ${email}`, () => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  describe.each([
    { email: "invalid.email" },
    { email: "@example.com" },
    { email: "user@" },
    { email: "user @example.com" },
    { email: "user@exam ple.com" },
    { email: "user<script>@example.com" },
    { email: "user@example.com<script>" },
    { email: "user@exam>ple.com" },
    { email: "user:hack@example.com" },
    { email: "user/admin@example.com" },
    { email: "user\\root@example.com" },
    { email: "user[inject]@example.com" },
    { email: "user{xss}@example.com" },
    { email: "user@example..com" },
    { email: "user@@example.com" },
    { email: "user@" },
    { email: "@domain.com" },
  ])("invalid email", (emailCase) => {
    it(`should return false for ${emailCase.email}`, () => {
      expect(validateEmail(emailCase)).toBe(false);
    });
  });

  describe.each([
    () => validateEmail(),
    () => validateEmail(true),
    () => validateEmail({}),
    () => validateEmail({ email: null }),
    () => validateEmail({ email: undefined }),
  ])("missing param", (testCase) => {
    it(`should throw a 'missing param' error`, () => {
      expect(() => testCase()).toThrow("missing param");
    });
  });

  describe.each([
    () => validateEmail({ email: 123456 }),
    () => validateEmail({ email: true }),
  ])("bad param", (testCase) => {
    it(`should throw a 'bad param' error for ${testCase}`, () => {
      expect(() => testCase()).toThrow("bad param");
    });
  });
});
