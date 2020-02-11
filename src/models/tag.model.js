export const TAG_COLORS = [
  '3398DB', '01638C', 'E75ADC', '8E36EB', 'FFEA00', 'EBBE36', 'F39C19', 'EB6236', 'C0382B', '3F312B', 'A9B4B7', '838A8C', '2B3B3F'
]
export class TagModel {
  /*
  * Tag model
  * @param {String} name
  * @param {String} color
  */
  constructor ({ name = '', color = '' }) {
    this.name = name
    this.color = color
  }
}
