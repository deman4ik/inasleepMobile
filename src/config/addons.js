export function getSizeRelativeToReference(dimension, originalRefVal, actualRefVal) {
	return dimension / originalRefVal * actualRefVal;
}

export function dimensionRelativeToIphone(dimension, actualRefVal) {
	// 375 is iPhone width
	return getSizeRelativeToReference(dimension, 375, actualRefVal);
}
