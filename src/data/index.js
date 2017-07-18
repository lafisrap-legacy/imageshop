/**
 * Homey Image Shop
 * https://github.com/lafisrap/imageshop.git
 *
 * Copyright © 2017-present Homey Pages Berlin All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { consoleLog } from '../utils';

export function correctYaml(data) {
  // Replace tabs with two spaces
  const d = data.replace(/\t/g, '  ');

  return d;
}

export function parseYaml(data, triedOnce) {
  let yaml = null;

  try {
    yaml = global.YAML.parse(data);
  } catch (err) {
    if (!triedOnce) {
      consoleLog('WARNING: You have an error in a yaml file. Trying to auto correct ...', err);
      yaml = parseYaml(correctYaml(data), true);
    } else {
      consoleLog('ERROR: You have an unrecoverable error in a yaml file. You can use \'https://codebeautify.org/yaml-validator\' to find the error.', err);
      return null;
    }
  }

  return yaml;
}
