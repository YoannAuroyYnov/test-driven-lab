import { calculateAge } from "./module";

/**
 * Validates if a person is 18 years old or older based on their birth date.
 *
 * @param {object} p An object representing a person, implementing a birth date
 * @returns {boolean} true if the age is 18 or more, false otherwise
 */
export function validateAge(p) {
  const age = calculateAge(p);
  const isAdult = Boolean(age >= 18);

  return isAdult;
}

/**
 * Validates if the given French zip code is valid.
 *
 * @param {object} p An object representing a person, implementing a zipCode
 * @return {boolean} true if the zip code is a valid French zip code, false otherwise
 */
export function validateZipCode(p) {
  if (!p || !(p instanceof Object) || !p.zipCode)
    throw new Error("missing param");

  const { zipCode } = p;
  const basicZipCodeRegexp = /^[0-9]{5}$/;
  if (
    typeof zipCode !== "string" ||
    zipCode.length !== 5 ||
    !basicZipCodeRegexp.test(zipCode)
  )
    throw new Error("bad param");

  const isValidGenericZipCodeRegexp =
    /^(0[1-9]|[1-6]\d|7[0-4]|7[6-9]|8\d|9[0-5])\d{3}|97[1-4]\d{2}|976\d{2}|7500[1-9]|7501\d|75020$/;
  const isValid = isValidGenericZipCodeRegexp.test(zipCode);

  return isValid;
}

/**
 * Validates if the given first name and last name are valid.
 *
 * @param {object} p An object representing a person, implementing a firstName and a lastName
 * @return {boolean} true if the first name and last name are valid, false otherwise
 */
export function validateIndentity(p) {}

/**
 * Validates if the given email is valid.
 *
 * @param {object} p An object representing a person, implementing an email
 * @return {boolean} true if the email is valid, false otherwise
 */
export function validateEmail(p) {}
