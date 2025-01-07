const openai = require("../config/openaiConfig");

const getSuggestions = async (req, res) => {
  const { input } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Provide suggestions based on the business plan: ${input}`,
      max_tokens: 100,
    });

    const suggestions = response.data.choices[0].text.trim();
    res.json({ suggestions });
  } catch (error) {
    console.error(
      "Error fetching suggestions:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to get AI suggestions." });
  }
};

module.exports = { getSuggestions };
