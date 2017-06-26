export const checkEmail = email => {
	//TODO: regexp check
	return email.length > 3;
};

export const checkName = name => {
	//TODO: regexp check
	return name.length > 3;
};

export const checkPassword = password => {
	//TODO: regexp check
	return password.length >= 6;
};

export const checkStringIsNotNull = text => {
	return text !== "" && text !== null && text !== undefined;
};
