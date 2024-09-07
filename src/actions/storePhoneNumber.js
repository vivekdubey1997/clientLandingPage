export const storePhoneNumber = (data) => {
    return {
        type: "Change_Number",
        payload: data,
    }
};