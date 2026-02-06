/**
 * Calculates the age of a person in years based on their birth date.
 *
 * @param {object} p An object representing a person, implementing a birth date
 * @returns {number} The age of the person in years
 */

export function calculateAge(p) {
  let dateDiff = new Date(Date.now() - p.birth.getTime());
  let age = Math.abs(dateDiff.getUTCFullYear() - 1970);
  return age;
}
