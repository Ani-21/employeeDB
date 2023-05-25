import { faker, SexType } from "@faker-js/faker";

export interface IUser {
  _id: string;
  birthday: Date | string;
  fullName: string;
  sex: SexType;
  phone: string;
  streetAddress: string;
  subway: string;
}

const createUser = (): IUser => {
  const id = faker.string.uuid();
  const dateBirth = faker.date.birthdate({
    min: 1961,
    max: 2000,
    mode: "year",
  });
  const birthday = `${dateBirth.getDay()}.${dateBirth.getMonth()}.${dateBirth.getFullYear()}`;

  return {
    _id: id.slice(0, 3) + "..." + id.slice(id.length - 3),
    fullName: faker.person.fullName(),
    phone: faker.phone.number("+7 ### ### ## ##"),
    sex: faker.person.sexType(),
    birthday: birthday,
    subway: faker.location.street(),
    streetAddress: faker.location.streetAddress(),
  };
};

export const data = new Array(50).fill(null).map(createUser);
export const length = data.length;
