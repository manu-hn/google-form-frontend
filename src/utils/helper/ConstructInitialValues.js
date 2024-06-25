export const constructInitialValues = (docsArray) => {
    return docsArray.reduce((acc, doc) => {
        doc.item.forEach((field) => {
            acc[field.id] = ''; // Initialize each field's value to an empty string
        });
        return acc;
    }, {});
};
