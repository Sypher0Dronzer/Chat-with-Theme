export default function extractTime(mongoTimestamp) {
    const date = new Date(mongoTimestamp); // Convert to JavaScript Date object
  const hours = date.getHours().toString().padStart(2, '0'); // Extract local hours
  const minutes = date.getMinutes().toString().padStart(2, '0'); // Extract local minutes

  return `${hours}:${minutes}`; // Return time in "HH:MM" format
  }