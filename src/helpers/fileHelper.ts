const isEmptyValue = (value?: any) => {
  if (value === 0 || value === false) {
    return false;
  } else {
    return !value || value?.length === 0;
  }
};

export const convertObjectToFormData = (values: {}) => {
  let newValues = JSON.parse(JSON.stringify(values));
  let formData = new FormData();

  Object.keys(newValues).forEach((key) => {
    if (!isEmptyValue(newValues[key as keyof typeof newValues])) {
      if (Array.isArray(newValues[key])) {
        if (newValues[key].length > 0) {
          newValues[key].forEach((item: any) => {
            formData.append(key, item);
          });
        }
      } else {
        formData.append(key, newValues[key]);
      }
    }
  });
  return formData;
};
