const fs = require("fs");

// Function to generate a MongoDB-like ObjectId
const generateObjectId = () => {
  return (
    Math.floor(Date.now() / 1000).toString(16) +
    "xxxxxxxxxxxxxxxx".replace(/[x]/g, () =>
      ((Math.random() * 16) | 0).toString(16)
    )
  );
};

// Read the file
const filePath = "AmazonDataSetWithId.ts"; // Your input file
const outputFilePath = "AmazonDataSetWithId_with_ids.ts"; // Output file

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Split data into lines
  const lines = data.split("\n");
  let updatedLines = [];
  let insideObject = false;

  lines.forEach((line) => {
    if (line.trim() === "{") {
      insideObject = true;
      updatedLines.push(line);
      updatedLines.push(`    _id: "${generateObjectId()}",`);
    } else {
      updatedLines.push(line);
    }
  });

  // Write updated content to a new file
  fs.writeFile(outputFilePath, updatedLines.join("\n"), "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log(`✅ Updated file saved as ${outputFilePath}`);
  });
});
