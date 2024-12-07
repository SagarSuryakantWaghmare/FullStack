import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        message: "Type in your URL:",
        name: "URL",
    }
])
.then((answers) => {
    const url = answers.URL;
    console.log("Generating QR code for:", url);

    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));

    console.log("QR code saved as 'qr_code.png'");
})
.catch((err) => {
    if (err.isTtyError) {
        console.log(err);
    } else {
        console.log(err);
    }
});
