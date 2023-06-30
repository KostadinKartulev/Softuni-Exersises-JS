function extractFile(filePath) {
    let indexOfLastDot=filePath.lastIndexOf(".");
    let indexOfLastBackslash=filePath.lastIndexOf("\\");

    let extension=filePath.substring(indexOfLastDot+1);
    let fileName=filePath.slice(indexOfLastBackslash+1,indexOfLastDot);

    console.log("File name:",fileName);
    console.log("File extension:",extension);
    
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');