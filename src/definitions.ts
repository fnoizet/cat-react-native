enum Status {
  UNLOADED,
  LOADING,
  LOADED
}

type User = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  email: string;
};

type RootState = {
  user: User;
};

export { RootState, User, Status };
