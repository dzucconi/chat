export const timeOfDay = ({
  morning,
  afternoon,
  evening
}: {
  morning: string;
  afternoon: string;
  evening: string;
}) => {
  const today = new Date();
  const hour = today.getHours();

  if (hour < 12) {
    return morning;
  } else if (hour < 18) {
    return afternoon;
  } else {
    return evening;
  }
};
