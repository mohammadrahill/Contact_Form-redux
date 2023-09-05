const initialState = [
    {
      firstName: "Mohammad",
      lastName: "Rahil",
      phone: "1234567890",
      email: "rahil@123gmail.com",
      password: "rahil@123",
    },
    {
      firstName: "John",
      lastName: "Deo",
      phone: "0987654321",
      email: "jhon@987gmail.com",
      password: "john@987",
    },
  ];
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER": 
        return action.payload;
  
      case "DELETE_USER":
        state.splice(action.payload, 1);
        return [...state];
  
      case "UPDATE_USER":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default Reducer;