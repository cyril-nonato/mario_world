export const sortDataByTimestamp = (data) => {
  return data.sort((a, b) => b['created_at'].seconds - a['created_at'].seconds)
}

export const docsToMap = (docs) => {
  const posts = docs.map(doc => {
    const id = doc.id;
    const data = doc.data();

    return {
      ...data,
      id
    }
  });

  return posts;
};

export const checkTitleAndContentLength = (title, content) => {
  const filteredTitle = title.trim();
  const filteredContent = content.trim();
  if (filteredTitle.length <= 2 || filteredContent.length <= 2) {
    throw new Error('The title and content should be at least 3 letters long');
  }
  return null;
};

const trimAndToUpperCaseFirstLetter = (str) => {
  const trimStr = str.trim();
  const filteredStr = trimStr.slice(0,1).toUpperCase() + trimStr.slice(1, trimStr.length);
  return filteredStr;
}

export const filterUserCreds = (userCreds) => {
  const filteredFN = trimAndToUpperCaseFirstLetter(userCreds.firstName);
  const filteredLN =  trimAndToUpperCaseFirstLetter(userCreds.lastName);

  if (filteredFN.length <= 1 || filteredLN.length <= 1) {
    throw new Error(`First Name and Last Name should be at least 2 letters long`)
  }

  if (userCreds.password !== userCreds.confirmPassword) {
    throw new Error(`Passwords don't match`)
  }

  return {
    ...userCreds,
    firstName: filteredFN,
    lastName: filteredLN
  }

}