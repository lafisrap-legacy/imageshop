/**
 * Homey Image Shop
 * https://github.com/lafisrap/imageshop.git
 *
 * Copyright © 2017-present Homey Pages Berlin All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function correctYaml( data ) {

	// Replace tabs with two spaces
	data = data.replace(/\t/g, "  ");

	return data;
}

export function parseYaml( data, triedOnce ) {
	try {
		var yaml = YAML.parse( data );
	} catch( err ) {
		if( !triedOnce ) {
			console.warn( "You have an error in a yaml file. Trying to auto correct ... ", err );
			var yaml = parseYaml( correctYaml( data ), true );			
		} else {
			console.error( "You have an unrecoverable error in a yaml file. You can use \"https://codebeautify.org/yaml-validator\" to find the error.", err );
			return null;
		}
	}

	return yaml;
}