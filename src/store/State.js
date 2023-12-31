export const initialState = {
  counter: 0,
  pcBuilderData: [
    { name: "CPU / Processor", to: "/select-by-category", item: {} },
    { name: "Motherboard", to: "/select-by-category", item: {} },
    { name: "RAM", to: "/select-by-category", item: {} },
    { name: "Power Supply Unit", to: "/select-by-category", item: {} },
    { name: "Storage Device", to: "/select-by-category", item: {} },
    { name: "Monitor", to: "/select-by-category", item: {} },
  ],
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "AddToBuilder": {
      const updatedPcBuilderData = [...state.pcBuilderData];
      const findIndex = updatedPcBuilderData.findIndex(
        (item) => item.name === action?.payload.name
      );
      if (findIndex !== -1) {
        updatedPcBuilderData[findIndex].item = action?.payload.item;
      }
      return { ...state, pcBuilderData: updatedPcBuilderData };
    }
    case "removeFromBuilder": {
      const updatedPcBuilderData = [...state.pcBuilderData];
      const findIndex = updatedPcBuilderData.findIndex(
        (item) => item.name === action?.payload.name
      );
      if (findIndex !== -1) {
        updatedPcBuilderData[findIndex].item = action?.payload.item;
      }
      return { ...state, pcBuilderData: updatedPcBuilderData };
    }
    default:
      return state;
  }
};
export default Reducer;
