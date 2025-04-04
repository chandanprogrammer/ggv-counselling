const CUET_PROVIDED_DATA_URI =
  "https://script.google.com/macros/s/AKfycby4-UKM91trYwuhRp8cGCDCDT6v_hKAQm462JWGfpTsoKc10QLnmYPBu7RIbyNCRKKo/exec";

const getCuetProvidedData = async () => {
  try {
    const response = await fetch(CUET_PROVIDED_DATA_URI);

    if (!response.ok) {
      throw new Error(`HTTP Error!! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(
      "Error: There has been a problem with your fetch operation:",
      error
    );
  }
};

export default getCuetProvidedData;
