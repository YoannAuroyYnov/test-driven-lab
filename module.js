/**
 * Calculates the age of a person in years based on their birth date.
 *
 * @param {object} p An object representing a person, implementing a birth date
 * @returns {number} The age of the person in years
 */

export function calculateAge(p) {
  if (!p || !p.birth) {
    let message = "";
    if (!p) message = "p";
    if (p && !p.birth) message = "birth";
    if (p && !(p instanceof Object)) message = "p is not an object";

    throw new Error(`missing param: ${message}`);
  } else if (!(p.birth instanceof Date) || isNaN(p.birth.getTime())) {
    throw new Error("bad param, birth should be a date");
  } else if (p.birth > new Date()) {
    throw new Error(
      "Persons from the future are not allowed to calculate their age",
    );
  }

  let dateDiff = new Date(Date.now() - p.birth.getTime());
  let age = Math.abs(dateDiff.getUTCFullYear() - 1970);
  return age;
}
