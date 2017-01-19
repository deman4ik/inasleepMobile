export const checkNameOrEmail = (nameOrEmail) =>
{
  //TODO: regexp check
  return nameOrEmail.length > 3;
}

export const checkPassword = (password) =>
{
  //TODO: regexp check
  return password.length >= 6;
}
