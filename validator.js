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
export function validateZipCode(p) {}

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
