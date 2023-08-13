const { spawn } = require("child_process");
const path = require("path");
const os = require("os");

module.exports = function runPythonScript(
  inputFileName,
  outputFileName,
  callback
) {
  const pythonScript = path.join(__dirname, "../scripts/modifyFile.py");
  const inputPath = path.join(__dirname, `../uploads/${inputFileName}`);
  const outputPath = path.join(__dirname, `../uploads/${outputFileName}`);

  console.log(inputPath);
  console.log(outputPath);

  // Provide the full path to the Python executable in your virtual environment
  const pythonExecutable =
    os.platform() === "win32"
      ? "python"
      : "/usr/bin/python3";

  const pythonArgs = [pythonScript, inputPath, outputPath];

  const pythonProcess = spawn(pythonExecutable, pythonArgs);

  pythonProcess.stdout.on("data", (data) => {
    console.log(`Python stdout: ${data}`);
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`Python stderr: ${data}`);
  });

  pythonProcess.on("close", (code) => {
    console.log(`Python process exited with code ${code}`);
    callback(); // Call the provided callback function after script completion
  });
};
