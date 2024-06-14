type UserObjetos = {
  name: string;
  lastName: string;
  age: number;
  _password?: string; // campo opcional
  fullName(): string; // fullName: () => string;
};

const userObjetos: UserObjetos = {
  name: "John",
  lastName: "Doe",
  age: 30,
  _password: "123456",
  fullName() {
    this._password;
    return `${this.name} ${this.lastName}`;
  },
};
