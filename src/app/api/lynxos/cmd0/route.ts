export async function POST(request: Request) {
    // Get the command and arguments from the request body
    const { command }: any = await request.json();
    const args: string[] = command.split(' ').slice(1).join(' ');

    // Check if command is alphanumeric with = and spaces
    if (!/^[a-zA-Z0-9=/ ]+$/.test(command)) {
        // Return the command output
        return Response.json({ output: "Security Error: Illegal Command"});
    }

    // Handle specific commands
    switch(command.trim()) {
        case "ls":
            // Handle ls command with arguments
            return Response.json({ output: ls(args) });
        // Add more cases for other commands as needed
        default:
            return Response.json({ output: "Invalid Command"});
    }
}

function ls(args: any) {
    // Simplified for illustration - A production-ready version would
    // need more robust error handling and path validation
 
    const allowedPath = 'C:/test'; // Restrict to a specific directory 
    const sanitizedArgs = args.replace(/[^a-zA-Z0-9\- ]/g, ''); // More restrictive filtering
 
    const fs = require('fs'); // Node.js example
 
    try {
        const dirContents = fs.readdirSync(`${allowedPath}/${sanitizedArgs}`);

        let formattedOutput = '';
        for (const item of dirContents) {
           const filePath = `${allowedPath}/${sanitizedArgs}/${item}`;
           const stats = fs.statSync(filePath);
           const isDirectory = stats.isDirectory();
           const fileSize = stats.size; // Get file size in bytes
     
           // Example formatting (human-readable sizes can be added later)
           formattedOutput += `$RWX  ${fileSize} Bytes ${"|"} ${item}${isDirectory ? '/' : ''}\n`; 
        }
     
        return formattedOutput;
    } catch (err) {
       return "Error listing directory contents";  
    } 
 }