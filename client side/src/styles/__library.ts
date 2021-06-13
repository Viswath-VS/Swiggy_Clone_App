/**
 * Used to push the scss common modules into every scss file
 * so as to not need to import it anywhere
 */

import path from 'path';
const resources = ['_colors.scss', '_variables.scss', '_mixins.scss', '_animations.scss'];
module.exports = resources.map((file) => path.resolve(__dirname, file));
