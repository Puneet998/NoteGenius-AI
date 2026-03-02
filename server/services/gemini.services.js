
const Gemini_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";


export const generateGeminiResponce = async (prompt) => {
  try {
    // 1️⃣ Validate prompt
    if (!prompt || typeof prompt !== "string") {
      throw new Error("Prompt must be a valid string");
    }

    // 2️⃣ Call Gemini API
    const response = await fetch(
      `${Gemini_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // fixed
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt, // 🔥 dynamic prompt use karo
                },
              ],
            },
          ],
        }),
      }
    );

    // 3️⃣ Handle HTTP error
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API Error: ${errText}`);
    }

    // 4️⃣ Parse API response
    const data = await response.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    // 5️⃣ Clean markdown wrappers if present
    const cleanText = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    // 6️⃣ Safe JSON parsing
    if (!cleanText.startsWith("{")) {
      throw new Error("AI did not return valid JSON");
    }

    return JSON.parse(cleanText);

  } catch (error) {
    console.error("Gemini Service Error:", error.message);

    return {
      success: false,
      message: "Failed to generate notes",
      error: error.message,
    };
  }
};
