var argv = require("yargs")
  .usage("Sign, encrypt or decrypt UASIGN files")
  .option("tsp", { default: false })
  .option("tax", { default: true })
  .option("edrpou", {})
  .string("edrpou")
  .option("detached", { default: false })
  .option("role", { default: "director" }).argv;

const agent = require("./agent");
// agent
//   .main(argv)
//   .then((result) => {
//     // daemon was started and is still running
//     if (typeof result === "function") {
//       return null;
//     }
//     //process.exit(result ? 0 : 1);
//   })
//   .catch((error) => {
//     if(error.constructor.name === 'ENOKEY') {
//       console.error(error.message);
//       console.error("Try adding --role personal or --role stampt to you commandline");
//     }
//     else if (!(error instanceof agent.ReadFileError)) {
//       console.error("Internal error");
//     }
//     if (argv.debug) {
//       console.error("Details", error);
//     }
//     //process.exit(1);
//   });
