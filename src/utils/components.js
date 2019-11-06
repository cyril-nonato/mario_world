export const timeAgo = (created_at) => {
  if(!created_at) return null;
  const timeInSeconds = created_at.seconds;
  const timeNow = Date.now() / 1000;
  const timeDiff = timeNow - timeInSeconds;

  const secondsEquivalents = {
    year: 60 * 60 * 24 * 30 * 12,
    month: 60 * 60 * 24 * 30,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  }

  if (timeDiff <= 1) {
    return `Just now`
  }

  for (let key in secondsEquivalents) {
    if (timeDiff >= secondsEquivalents[key]) {
      const value = Math.round(timeDiff / secondsEquivalents[key]);
      if (value === 1) {
        return `${value} ${key} ago`
      }

      return `${value} ${key}s ago`
    }
  }
};

export const notifRandomMessage = (firstName, lastName) => {

  const max = 4;
  const min = 1;

  // Generate number between 0 to 3
  const randomNum = Math.round(Math.random() * (max - min));

  switch (randomNum) {
    case 1:
      return `${firstName} ${lastName} has joined the gang`;
    case 2:
      return `No more clowning around because ${firstName} ${lastName} is here`;
    case 3:
      return `Don't forget to thank ${firstName} ${lastName}`;
    default: return `${firstName} ${lastName} is here to beat the game`
  }
}

export const checkForMobileView = (windowWidth) => (
  windowWidth < 900 ? true : false
);


export const checkIfEdited = (edited) => edited ? ` - edited` : null;
